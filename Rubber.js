class rubber {

    constructor(x,y,r) {
    
    var options= {
    
        restitution: 0.5,
        friction: 1.0,
        density:4,
        mass:3,
    }
    this.width= width;
    this.height=height;
    this.r=r;
    this.body=Bodies.circle(x, y, this.r, options)
    World.add (world, this.body);
    
    }
    
    display () {
    
        var pos= this.body.position;
        var angle = this.body.angle;
       
         translate(pos.x,pos.y)
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
         ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
     
    }
    
    }