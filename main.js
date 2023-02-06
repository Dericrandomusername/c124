function preload(){

}
function setup(){
    Canvas=createCanvas(400, 400);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded );
    poseNet.on('pose',gotposes);
}
function draw(){
    image(video,0,0,400,400);

}
function takeSnapshot(){
    save("filterimage.png")
}
function modelLoaded(){
    console.log("model has been initialized")
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        console.log("noseX="+results[0].pose.nose.x);
        console.log("noseY="+results[0].pose.nose.y);
    }
}