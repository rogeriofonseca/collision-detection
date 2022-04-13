import Circle from './circle';

let canvas, context, c1;
const NUM_CIRCLES = 40;
const SIZE_MAIN_CIRCLE = 40;
const objects = [];

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
    objects.forEach(circle => circle.draw(context));
}

const update = () => {
    c1.setPosition(mouseCoords);
    c1.update();
    objects.forEach(currentCircle => {
        currentCircle.update();
        if (currentCircle.overlaps(c1)) {
            c1.setOverlapping(true);
            currentCircle.setOverlapping(true);
        }
    });
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

    c1 = new Circle({x: 0, y: 0}, SIZE_MAIN_CIRCLE);
    for (let i = 0; i < NUM_CIRCLES; i++) {
        const circle = new Circle();
        circle.reset(canvas.width, canvas.height);
        objects.push(circle);
    }
    step();
};

init();