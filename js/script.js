window.addEventListener("load", function () {
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    const canvasOffSetX = c.offsetLeft;
    const canvasOffSetY = c.offsetTop;



    document.getElementById("circle-button")
        .addEventListener("click", function (event) {

        });


    document.getElementById("rectangle-button")
        .addEventListener("click", function (event) {

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