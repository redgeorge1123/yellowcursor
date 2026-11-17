
(function () {
    const style = document.createElement("style");

    style.textContent = `
        html, body, canvas, #openfl-content {
            cursor: none !important;
        }

        #custom-cursor {
            position: fixed;
            width: 9px;
            height: 9px;
            background: #ffeb00;
            border-radius: 50%;
            pointer-events: none;
            z-index: 999999;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 10px #ffeb00;
        }

        #cursor-circle {
            position: fixed;
            width: 35px;
            height: 35px;
            border: 2px solid #ffeb00;
            border-radius: 50%;
            pointer-events: none;
            z-index: 999998;
            transform: translate(-50%, -50%);
            transition: width 0.2s, height 0.2s;
        }
    `;

    document.head.appendChild(style);

    const dot = document.createElement("div");
    dot.id = "custom-cursor";

    const circle = document.createElement("div");
    circle.id = "cursor-circle";

    document.body.appendChild(circle);
    document.body.appendChild(dot);

    let mouseX = -100;
    let mouseY = -100;
    let circleX = -100;
    let circleY = -100;

    document.addEventListener("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = mouseX + "px";
        dot.style.top = mouseY + "px";
    });

    function animate() {
        circleX += (mouseX - circleX) * 0.12;
        circleY += (mouseY - circleY) * 0.12;

        circle.style.left = circleX + "px";
        circle.style.top = circleY + "px";

        requestAnimationFrame(animate);
    }

    animate();

    document.addEventListener("mousedown", function () {
        circle.style.width = "27px";
        circle.style.height = "27px";
    });

    document.addEventListener("mouseup", function () {
        circle.style.width = "35px";
        circle.style.height = "35px";
    });

    document.addEventListener("mouseleave", function () {
        dot.style.opacity = "0";
        circle.style.opacity = "0";
    });

    document.addEventListener("mouseenter", function () {
        dot.style.opacity = "1";
        circle.style.opacity = "1";
    });
})();
