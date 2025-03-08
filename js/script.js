/** 
Author: Goshanraj Govindaraj (400599969) & Arkel Ziko (#400586552)
Date: Thursday, March 6, 2025 at 8:35 AM
Description: The JS consisting of all Canvas Drawing Functionallity
             and logic for persisting drawings
**/

// NOTE: NEED TO FIGURE OUT HOW TO USE LOCAL STORAGE FOR THIS
window.addEventListener("load", function () {
  let c = document.getElementById("canvas");
  let ctx = c.getContext("2d");
  let clear = document.getElementById("clear-button");
  let undo = document.getElementById("undo-button");
  let shapes = JSON.parse(localStorage.getItem("history")) || [];

  class Circle {
    constructor(x, y, radius, color) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }

  class Square {
    constructor(x, y, width, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.color = color;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.width);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }

  class Triangle {
    constructor(x, y, height, color) {
      this.x = x;
      this.y = y;
      this.height = height;
      this.color = color;
    }

    draw(ctx) {
      const base = (2 * this.height) / Math.sqrt(3); //formula for the base using the 30/60/90 formula for equaliterals
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
      ctx.stroke();
    }
  }

  class Rectangle {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
    }

    draw(ctx) {
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }

  function shapesHistory(shape) {
    shapes.push(shape);
    localStorage.setItem("history", JSON.stringify(shapes));
  }

  function getMousePosition(event) {
    const rect = c.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return { x, y };
  }

  c.addEventListener("click", (event) => {
    let shapeType = document.getElementById("user-shape").value;
    let color = document.getElementById("color-input").value;
    let size = parseInt(document.getElementById("size-input").value);
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
  });

  undo.addEventListener("click", function () {
    if (shapes.length > 0) {
      shapes.pop();
      localStorage.setItem("history", JSON.stringify(shapes));
      ctx.clearRect(0, 0, c.width, c.height);
      redrawCanvas();
    }
  });

  function redrawCanvas() {
    shapes.forEach((shape) => {
      if (shape.radius) {
        new Circle(shape.x, shape.y, shape.radius, shape.color).draw(ctx);
      } else if (shape.width && shape.height) {
        new Rectangle(
          shape.x,
          shape.y,
          shape.width,
          shape.height,
          shape.color
        ).draw(ctx);
      } else if (shape.width) {
        new Square(shape.x, shape.y, shape.width, shape.color).draw(ctx);
      } else if (shape.height) {
        new Triangle(shape.x, shape.y, shape.height, shape.color).draw(ctx);
      }
    });
  }

  clear.addEventListener("click", function () {
    ctx.clearRect(0, 0, c.width, c.height);
    shapes = [];
    localStorage.setItem("history", JSON.stringify(shapes));
  });
  redrawCanvas();
});
