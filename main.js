leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
song="";

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Posenet is initalised");
}

function preload(){
   song=loadSound("music.mp3");
}

function play(){
    song.play();
}

function draw(){
    image(video,0,0,600,500);
}