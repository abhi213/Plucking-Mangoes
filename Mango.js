class Mango {
    constructor(x, y, r, mangoImage){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.r = r;
        this.image1 = mangoImage;
        this.body = Matter.Bodies.circle(x, y, this.r, options);
        this.body.collisionFilter.group = 1;
        World.add(world, this.body);
    }

    display(){
        image(this.image1, this.body.position.x-25, this.body.position.y-25, 50, 50);
    }
}