class chain{
    constructor(BodyA,BodyB){
var options = {
    bodyA:BodyA,
    bodyB:BodyB,
    stiffness:1,
    length:10
}
this.chain = Constraint.create(options);
World.add(world,this.chain);
    } 
    display(){
        strokeWeight(5);
        stroke("brown");
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);

    }
}