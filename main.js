function preload(){

}
function setup(){
canvas=createCanvas(640,480)
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
video.size(350,200);

}
function draw( ){
image(video,0,0,640,480);
fill("red");
stroke("red");
circle(50,50,80);
circle(590,50,80);
circle(50,470,80);
circle(590,470,80);
fill("green");
stroke("green");
rect(30,90,40,340);
rect(570,90,40,340);
rect(80,30,470,40);
rect(80,450,470,40);
}
function take_snapshot(){
    save('student_name.png');

}
