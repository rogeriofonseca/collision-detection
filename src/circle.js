export class Circle {
    constructor(pos = {x: 0, y: 0}, radius = 1, color = `#ffffff`) {
        this.pos = pos;
        this.radius = radius;
        this.color = color;
    }

    setPosition = pos => { this.pos = pos; };

    draw = context => {
        context.strokeStyle = this.color;
        context.beginPath();
        context.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        context.stroke();
    };
}

export default Circle;