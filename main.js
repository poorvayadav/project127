peter_pan_song="";
harry_potter_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video=createCanvas(VIDEO);
    video.hide();

}
function preload(){
    peter_pan_song = loadSound("music2.mp3");
    harry_potter_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);
}
