/** 
Author: Goshanraj Govindaraj (#) & Arkel Ziko (#400586552)
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
            this.y = y
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
            this.y = y
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
        let { x, y } = getMousePosition(event)

        if (shape === "circle") {
            const circle = new Circle(x, y, size / 2, color);
            circle.draw(ctx);
        }
        else if (shape === "square") {
            const square = new Square(x, y, size/2, color)
            square.draw(ctx);
        }
        else {
            /// THIS LAST ONE IS TRIANGLE LOGIC
        }

    });

    undo.addEventListener("click", function () {
        //Undo logic of most recent shape made
    });

    clear.addEventListener("click", function () {
        ctx.clearRect(0, 0, c.width, c.height);
    });

});