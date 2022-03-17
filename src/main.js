let canvas, context;
let x = 0;

const onResize = () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
};

const draw = () => {
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = '#ffffff';

    context.beginPath();
    context.arc(x, x, 150, 0, Math.PI * 2);
    context.stroke();
}

const update = () => {
    x++;
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

    window.addEventListener('resize', onResize);
    onResize();
    step();
};

init();