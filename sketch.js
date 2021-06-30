const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var mainBall;
var stick;
var mainBlowerMouth;
var button;
var blowButton;


function setup() {

    engine = Engine.create();
    world = engine.world;
    createCanvas(1200, 700);

    mainBall = new Ball(800, 150, 150, );
    stick = new Stick(525, 445, 400, 70);
    mainBlowerMouth = new Blowermouth(800, 405, 150, 150);
    blowButton = new Blower(800, 600, 150, 50);

    button = createButton("Click to Blow");
    button.position(750, 580);
    button.class("blowButton");
    button.mousePressed(blow)

}

function draw() {
    background("yellow");

    Engine.update(engine);
    mainBall.show();
    stick.show();
    mainBlowerMouth.show();
    blowButton.show();
}

function blow() {
    Matter.Body.applyForce(mainBall.body, { x: 0, y: 0 }, { x: 0, y: -0.9 });
}