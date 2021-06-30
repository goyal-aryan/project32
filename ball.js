class Ball {
    constructor(x, y, r) {
        let options = {
            isStatic: false,
            restitution: -0.9

        };

        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        // this.h = h;
        World.add(world, this.body);
    }

    show() {
        let pos = this.body.position;
        push();
        ellipseMode(CENTER);
        fill(148, 127, 146);
        ellipse(pos.x, pos.y, this.r);
        pop();
    }
}