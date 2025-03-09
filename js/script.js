/** 
Author: Goshanraj Govindaraj (400599969) & Arkel Ziko (#400586552)
Date: Thursday, March 6, 2025 at 8:35 AM
Description: The JS consisting of all Canvas Drawing Functionallity
             and logic for persisting drawings
**/

window.addEventListener("load", function () {


  // ---------VARIABLES AND CLASSES--------- //

  let c = document.getElementById("canvas");
  let ctx = c.getContext("2d");
  let clear = document.getElementById("clear-button");
  let undo = document.getElementById("undo-button");
  let shapes = JSON.parse(localStorage.getItem("history")) || [];

  /** Represents a circle
   *
   * @param {number} x - The x-coordinate of the circle
   * @param {number} y - The y-coordinate of the circle
   * @param {number} radius - The radius of the circle
   * @param {string} color - The fill color of the circle
   */
  class Circle {
    constructor(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
    }

    /**
     * Draws the circle on the provided canvas context
     * @param {canvasContext} ctx - The canvas rendering context
     */
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }

  /** Represents a Squqare
   *
   * @param {number} x - The x-coordinate of the square
   * @param {number} y - The y-coordinate of the square
   * @param {number} width - The radius of the square
   * @param {string} color - The fill color of the square
   */
  class Square {
    constructor(x, y, width, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.color = color;
    }

    /**
     * Draws the square on the provided canvas context
     * @param {canvasContext} ctx - The canvas rendering context
     */
    draw(ctx) {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.width);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }

  /** Represents a Triangle
   *
   * @param {number} x - The x-coordinate of the triangle
   * @param {number} y - The y-coordinate of the triangle
   * @param {number} height - The height of the triangle
   * @param {string} color - The fill color of the triangle
   */
  class Triangle {
    constructor(x, y, height, color) {
      this.x = x;
      this.y = y;
      this.height = height;
      this.color = color;
    }

    /**
     * Draws the triangle on the provided canvas context
     * @param {canvasContext} ctx - The canvas rendering context
     */
    draw(ctx) {
      const base = (2 * this.height) / Math.sqrt(3); // formula for the base using the 30/60/90 formula for equaliterals
      const x1 = this.x;
      const y1 = this.y;

      const x2 = this.x - base / 2;
      const y2 = this.y + this.height;

      const x3 = this.x + base / 2;
      const y3 = this.y + this.height;

      ctx.beginPath();
      ctx.lineTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();

      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.strokeStyle = this.color;
      ctx.stroke();
    }
  }

  /** Represents a rectangle
   *
   * @param {number} x - The x-coordinate of the rectangle
   * @param {number} y - The y-coordinate of the rectangle
   * @param {number} width - The width of the rectangle
   * @param {number} height - The height of the rectangle
   * @param {string} color - The fill color of the rectangl
   */
  class Rectangle {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
    }

    /**
     * Draws the rectangle on the provided canvas context
     * @param {canvasContext} ctx - The canvas rendering context
     */
    draw(ctx) {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }


  // ---------CANVAS EVENT LISTENERS--------- //

  c.addEventListener("click", (event) => {
    let sound = new Audio("media/sounds/Pew Sound Effect.mp3");
    let shapeType = document.getElementById("user-shape").value;
    let color = document.getElementById("color-input").value;
    let size = parseInt(document.getElementById("size-input").value);
    if (size > 0) {
      sound.play();
      let { x, y } = getMousePosition(event);
      let drawnShape;
      if (shapeType === "circle") {
        drawnShape = new Circle(x, y, size / 2, color);
      } else if (shapeType === "square") {
        drawnShape = new Square(x, y, size, color);
      } else if (shapeType === "rectangle") {
        drawnShape = new Rectangle(x, y, size * 2, size, color);
      } else {
        drawnShape = new Triangle(x, y, size, color);
      }
      drawnShape.draw(ctx);
      shapesHistory(drawnShape);
    }
  });

  undo.addEventListener("click", function () {
    if (shapes.length > 0) {
      shapes.pop();
      localStorage.setItem("history", JSON.stringify(shapes));
      ctx.clearRect(0, 0, c.width, c.height);
      redrawCanvas();
    }
  });

  clear.addEventListener("click", function () {
    ctx.clearRect(0, 0, c.width, c.height);
    shapes = [];
    localStorage.setItem("history", JSON.stringify(shapes));
  });


  // ---------CANVAS FUNCTIONS--------- //

  /**
   * Adds a shape to the history array and saves it in local storage.
   *
   * @param {Object} shape - The shape object to store
   */
  function shapesHistory(shape) {
    shapes.push(shape);
    localStorage.setItem("history", JSON.stringify(shapes));
  }

  /**
   * Gets the mouse position relative to the canvas.
   *
   * @param {MouseEvent} event - The mouse event
   * @returns {{x: int, y: int}} - The relative mouse coordinates
   */
  function getMousePosition(event) {
    const rect = c.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return { x, y };
  }

  /**
   * Redraws all shapes from the history onto the canvas.
   */
  function redrawCanvas() {
    shapes.forEach((shape) => {
      if (shape.radius) {
        new Circle(shape.x, shape.y, shape.radius, shape.color).draw(ctx);
      } else if (shape.width && shape.height) {
        new Rectangle(shape.x, shape.y, shape.width, shape.height,shape.color).draw(ctx);
      } else if (shape.width) {
        new Square(shape.x, shape.y, shape.width, shape.color).draw(ctx);
      } else if (shape.height) {
        new Triangle(shape.x, shape.y, shape.height, shape.color).draw(ctx);
      }
    });
  }

  redrawCanvas();

});