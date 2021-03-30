function preload(){}

function setup(){
    canvas=createCanvas(440,380)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(430,380)
    video.hide()
    colour=""
}

function draw(){
    image(video,0,0,440,380)
    colour=document.getElementById("tint").value
    tint(colour)
}

function take_snapshot(){
    save("photo.png")
}