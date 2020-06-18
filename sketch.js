var road;
var player, player_img;
var npc = [], npc_img;
var c;
var won = false;
var go = false;
var w = 50;
var h = 80;
var npcgrp;

function preload(){
  road = loadImage("track.jpg");
  player_img = loadImage("car4.png");
  npc_img = loadImage("car1.png");
}

function setup() {
  createCanvas(800,windowHeight);
  //createSprite(400, 200, 50, 50);
  //camera.zoom = 0.5
  c = new Cars(400,-20,0,10,true);
  npc.push(new Cars(10,-700,90+25,10,false));
  npc.push(new Cars(370,-1200,180,10,false));
  npc.push(new Cars(200,-1300,180,10,false));
  npc.push(new Cars(600,-1420,180,10,false));
  npc.push(new Cars(300,-1480,180,10,false));
  npc.push(new Cars(-850,-1550,90+45,10,false));
  npc.push(new Cars(-1550,-2050,90+45,10,false));
  npc.push(new Cars(520,-2320,180,10,false));
  npc.push(new Cars(-2450,-2750,90+45,10,false));
  npc.push(new Cars(600,-3020,180,10,false));
  npc.push(new Cars(-3350,-3900,90+45,10,false));
  npc.push(new Cars(180,-4520,180,10,false));
  npc.push(new Cars(620,-4520,180,10,false));
  npc.push(new Cars(200,-5020,180,10,false));
  npc.push(new Cars(450,-5150,180,10,false));
  npc.push(new Cars(320,-5280,180,10,false));
  npc.push(new Cars(600,-5400,180,10,false));
  npc.push(new Cars(-5550,-5800,90+45,10,false));
  npc.push(new Cars(-5850,-6000,90+45,10,false));
  npc.push(new Cars(-6050,-6200,90+45,10,false));
  npc.push(new Cars(-6350,-6500,90+45,10,false));
  npc.push(new Cars(-650,-6600,90+45,10,false));
  npc.push(new Cars(-6969,-6969,90+40,10,false));
  npc.push(new Cars(200,-8000,180,10,false));
  npc.push(new Cars(600,-9000,180,10,false));
  npc.push(new Cars(-8369,-8069,90+40,10,false));
  npc.push(new Cars(400,-10000,180,10,false));
  npc.push(new Cars(180,-12000,180,10,false));
  npc.push(new Cars(500,-16000,180,10,false));
  npcgrp = createGroup();
  for(var i = 0; i < npc.length; i++){
    npcgrp.add(npc[i].sprite);
  }
}

function draw() {
  background(0);

  push();
  image(road,0,-7800,width,7800);
  pop();

  c.work();
  for(var i = 0; i < npc.length; i++){
    npc[i].work();
  }
  drawSprites();
}