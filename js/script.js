/** 
Author: Goshanraj Govindaraj (400599969) & Arkel Ziko (#400586552)
Date: Thursday, March 6, 2025 at 8:35 AM
Description: The JS consisting of all Canvas Drawing Functionallity
             and logic for persisting drawings
*/

// NOTE: NEED TO FIGURE OUT HOW TO USE LOCAL STORAGE FOR THIS
window.addEventListener("load", function () {
  let c = document.getElementById("canvas");
  let ctx = c.getContext("2d");
  let clear = document.getElementById("clear-button");
  let undo = document.getElementById("undo-button");

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

  function getMousePosition(event) {
    const rect = c.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return { x, y };
  }

  c.addEventListener("click", (event) => {
    let shape = document.getElementById("user-shape").value;
    let color = document.getElementById("color-input").value;
    let size = parseInt(document.getElementById("size-input").value);
    let { x, y } = getMousePosition(event);

    if (shape === "circle") {
      const circle = new Circle(x, y, size / 2, color);
      circle.draw(ctx);
    } else if (shape === "square") {
      // DRAW SQUARE LOGIC
    } else {
      const triangle = new Triangle(x, y, size, color);
      triangle.draw(ctx);
    }
  });

  undo.addEventListener("click", function () {
    //Undo logic of most recent shape made
  });

  clear.addEventListener("click", function () {
    ctx.clearRect(0, 0, c.width, c.height);
  });
});
