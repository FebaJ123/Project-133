status = "";
name = [];
objects = "";

function preload(){
    img = loadImage('Bedroom.jpg')
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center;
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded(){
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(){
    objects = results;
}

function draw(){
    if(status !=""){
        for (i = 0; i< objects.length; i++){
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x,objects[i].y);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}