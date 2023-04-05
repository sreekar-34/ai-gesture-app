nose_x = 0;
nose_y = 0;
rightWristX = 0;
leftWristX = 0;
differnce = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("grey");
    fill("skyblue");
    stroke("black")
    square(nose_x,nose_y,differnce);

    document.getElementById("square_side").innerHTML = "Width and Height of the Square will be " + differnce + " px";
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    console.log("noseX = " + nose_x + " noseY = " + nose_y);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    differnce = floor(leftWristX - rightWristX);
    }
}