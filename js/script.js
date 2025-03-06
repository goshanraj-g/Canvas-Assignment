window.addEventListener("load", function () {
    let c = document.getElementById("canvas");
    let ctx = c.getContext("2d");
    const canvasOffSetX = c.offsetLeft;
    const canvasOffSetY = c.offsetTop;

    c.height = window.innerHeight - canvasOffSetY;
    c.width = window.innerWidth - canvasOffSetX;

    let isPainting = false;
    let lineWidth = 5;
    let startX;
    let startY;

    c.addEventListener("mousedown", (e) => {
        isPainting = true;
        startX = e.clientX - canvasOffSetX;
        startY = e.clientY - canvasOffSetY
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);;
    })

    c.addEventListener("mouseup", (e) => {
        isPainting = false;
        ctx.stroke();
        ctx.beginPath();
    })




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