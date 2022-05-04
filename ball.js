class Rounds{
    constructor(x,y,radius) {
        
        this.body = Bodies.circle(x,y,radius);
        this.radius=radius

        World.add(world, this.body);
    }
    show(){

        fill(255)
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
};    