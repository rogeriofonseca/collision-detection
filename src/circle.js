const RADIUS_RANGE = {
    min: 3,
    max: 50
};

const OVERLAPPING_COLOR = '#ff0000';
export class Circle {
    constructor(pos = {x: 0, y: 0}, radius = 1, color = `#ffffff`) {
        this.pos = pos;
        this.radius = radius;
        this.color = color;
        this.overlappging = false;
    }

    setPosition = pos => { this.pos = pos; };
    setRadius = radius => { this.radius = radius; };
    setOverlapping = val => { this.overlappging = val; };

    overlaps = circle => {
        const dx = circle.pos.x - this.pos.x;
        const dy = circle.pos.y - this.pos.y;

        return Math.sqrt(dx * dx + dy * dy) <= this.radius + circle.radius;
    };

    update = () => {
        this.overlappging = false;
    };

    reset = (width, height) => {
        this.setPosition({
            x: Math.random() * width,
            y: Math.random() * height
        });

        this.setRadius(RADIUS_RANGE.min + Math.random() * RADIUS_RANGE.max);
    }

    draw = context => {
        context.strokeStyle = this.overlappging ? OVERLAPPING_COLOR : this.color;
        context.beginPath();
        context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        context.stroke();
    };
}

export default Circle;