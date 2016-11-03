// var xoff1 = 0;
// var xoff2 = 10000;

var inc = 0.1;
var scl = 10;
var cols, rows;
var particles = [];
var flowfield;
var zoff = 0;
// var start = 0;


var fr;
function setup () {

    createCanvas(800,600);
    colorMode(HSB, 255);

cols = floor(width / scl);
 rows = floor(height / scl);
 fr = createP('');

flowfield = new Array(cols * rows);

for (var i = 0; i < 6000; i++ ) {
 particles[i] = new Particle();
}
background(255);

}


function draw() {
    var yoff = 0;
    for(var y = 0; y < rows; y++) {
            var xoff = 0;

        for (var x = 0; x < cols; x++) {
        var index = x+y * cols;

        var angle = noise(xoff,yoff, zoff) * TWO_PI * 4;
        var v = p5.Vector.fromAngle(angle);
        v.setMag(1);
        flowfield[index] = v;
        xoff += inc;
       stroke(0,50);
       // push();
       // translate(x * scl,y *scl);
       // rotate(v.heading());
       //  strokeWeight(1);

       // line(0, 0, scl, 0);

       // pop();
        }
        yoff += inc;

         zoff += 0.003;
    }

for (var i = 0; i < particles.length; i++){
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();

}

    fr.html(floor(frameRate()));
}

    // background(51);
    // stroke(255);
    // noFill();
    // beginShape();
    // var xoff = start;
    // for (var x = 0; x < width; x++) {
    //     stroke(255);
    //     // var y = random(height);
    //     var y = noise(xoff) *height;
    //     vertex(x,y);

    //     xoff += inc;
    // }

    // endShape();

    // start += inc;
    // noLoop();
    // var x = map(noise(xoff1),0,1,0,width);
    // var y = map(noise(xoff2),0,1,0,height);


    // xoff1 += 0.02;
    // xoff2 += 0.02;


    // ellipse(x,y,24,24);






