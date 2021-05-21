class Slingshot{
 constructer(bodyA,pointB){

 var options ={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.04,
    lenght:8

 }
    this.polygon=loadImage("polygon.png");
   this.pointB=pointB
    this.polygon = Constraint.create(options);
   World.add(world, this.polygon)
 }

 fly(){
    this.polygon.bodyA = null;
}

display(){
    imageMode(CENTER)
    image(polygon_img ,polygon.position.x ,polygon.position.y,40,40)
}

}
