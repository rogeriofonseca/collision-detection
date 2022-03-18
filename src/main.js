let canvas, context;
const mouseCoords = {};

const onMouseMove = e => {
    mouseCoords.x = e.clientX;
    mouseCoords.y = e.clientY;
}

const onResize = () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
};

const draw = () => {
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = '#ffffff';

    context.beginPath();
    context.arc(mouseCoords.x, mouseCoords.y, 50, 0, Math.PI * 2);
    context.stroke();
}

const update = () => {};

const step = () => {
    update();
    draw();
    window.requestAnimationFrame(step);
};

const init = () => {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    context = canvas.getContext('2d');

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
    onResize();
    step();
};

init();