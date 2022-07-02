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
    objects.reduceRight((acc, item, index, object) =>{
        if (item.overlaps(c1)) {
            object.splice(index, 1);
        }
    }, []);
};

const step = () => {
    update();
    draw();
    window.requestAnimationFrame(step);
};

const poolNewCircle = () => {
    for (let i = 0; i < NUM_CIRCLES; i++) {
        const circle = new Circle();
        circle.reset(canvas.width, canvas.height);
        objects.push(circle);
    }
}

const init = () => {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    context = canvas.getContext('2d');

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
    onResize();

    c1 = new Circle({x: 0, y: 0}, SIZE_MAIN_CIRCLE);
    poolNewCircle();
    setInterval(poolNewCircle, 10000);
    step();
};

init();