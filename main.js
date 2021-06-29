function setup(){
canvas=createCanvas(600,600);
Video=createCapture(VIDEO);
canvas.center();
Video.hide()
}
status="";objects=[];
function draw(){
image (Video,0,0,600,600);
}
function on(){
garvit=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("objectname").value; 
document.getElementById("status").innerHTML="detecting";
}
function modelLoaded(){
console.log("model has loaded");
status=true;
}