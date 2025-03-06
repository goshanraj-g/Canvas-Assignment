window.addEventListener("load", function () {
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    const canvasOffSetX = c.offsetLeft;
    const canvasOffSetY = c.offsetTop;

    c.addEventListener("mousedown", () => {
        if
        //create constructor, and call method


    });

    //event listener for click, and then we create constructor based on details
    // 
    Circle(usercolor, usersize)
    Circle.draw()
    class Circle {
        constructor(radius, color) {
            this.radius = radius;
            this.color = color;
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.arc
        }
    }


    document.getElementById("circle-button")
        .addEventListener("click", function (event) {

        });


    document.getElementById("square-button")
        .addEventListener("click", function (event) {
            ctx.fillRect(25, 25, 100, 100);


        });


    document.getElementById("triangle-button")
        .addEventListener("click", function (event) {

        });


    document.getElementById("undo-button")
        .addEventListener("click", function (event) {

        });


    document.getElementById("clear-button")
        .addEventListener("click", function (event) {
            ctx.clearRect(0, 0, c.width, c.height);
        });





})