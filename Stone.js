class Stone {
    constructor(x, y, r, stoneImage){
        var options = {
            isStatic:false,
            restitution:0,
            friction:1,
            density:2
        }
        this.r = r;
        this.image1 = stoneImage;
        this.body = Matter.Bodies.circle(x, y, r, options);
        this.body.collisionFilter.group = 1;
        World.add(world, this.body);
    }

    display(){
        image(this.image1, this.body.position.x-25, this.body.position.y-25, 50, 50);
    }
}