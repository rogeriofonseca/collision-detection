import Circle from './circle';
let canvas, context, c1;
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
    c1.draw(context);
}

const update = () => {
    c1.setPosition(mouseCoords);
};

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

    c1 = new Circle({x: 0, y: 0}, 40);
    step();
};

init();