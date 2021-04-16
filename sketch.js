var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    //create 4 different surfaces
block1 = createSprite(0,580,360,30);
block1.shapeColor = "red";
block2 = createSprite(295,580,360,30);
block2.shapeColor = "blue";
block3 = createSprite(590,580,360,30);
block3 .shapeColor = "green";
block4 = createSprite(885,580,360,30);
block4.shapeColor = "purple";


    //create box sprite and give velocity
box1 = createSprite(random(20,750),100,40,40);
box1.shapeColor = "white";
box1.velocityX = 4;
box1.velocityY = 8;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
box1.bounceOff(edges);

if(block1.isTouching(box1)&& box1.bounceOff(block1)){
box1.shapeColor = "red";
music.play();
}

if(block2.isTouching(box1)){
    box1.shapeColor = "blue";
    box1.velocityX = 0;
    box1.velocityY = 0;
    music.stop();
}

    if(block3.isTouching(box1)&& box1.bounceOff(block3)){
        box1.shapeColor = "green";
        music.play();
        }
        
        if(block4.isTouching(box1)&& box1.bounceOff(block4)){
            box1.shapeColor = "purple";
            music.play();
            }
            
    
drawSprites();
    //add condition to check if box touching surface and make it box
}
