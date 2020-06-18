class Cars{
    constructor(iX,iY,angle,speed,playable){
        this.x = iX;
        this.y = iY;
        this.angle = angle;
        this.playable = playable;
        this.speed = speed;
        this.sprite = createSprite(iX,iY,w,h);
        if(this.playable){
            this.img = player_img;
        }else{
            this.img = npc_img;
        }
        this.sprite.debug = true;
        this.sprite.visible = false;
        this.sprite.setCollider("obb",0,0,40,70,0)
        //this.sprite.rotateToDirection = true;
    }

    work(){
        if(this.playable){
            camera.position.y = this.sprite.y-200;
            console.log(key,keyCode)
            if(keyIsPressed === true){
                if(key === 'ArrowLeft' && this.angle <= 0){
                    this.sprite.velocityX = -5;
                    this.angle = -10;
                    this.sprite.rotation = this.angle;
                }else if(key === 'ArrowRight' && this.angle >= 0){
                    this.sprite.velocityX = 5;
                    this.angle = 10;
                    this.sprite.rotation = this.angle;
                }
            }else{
                keyCode = 0;
                this.angle = 0;
                this.sprite.rotation = 0;
                this.sprite.velocityX = 0;
            }
            if(!won && !go){
                if(this.sprite.y < -500){
                    this.speed = 10+(this.sprite.y/-500);
                }
                this.sprite.velocityY = -this.speed;
            }else{
                this.sprite.velocityY = 0;
                this.sprite.velocityX = 0;
            }
            if(this.sprite.y < -7450){
                won = true;
            }
            if(this.sprite.isTouching(npcgrp)){
                go = true;
            }
            if(this.sprite.x < 155 && this.sprite.velocityX < 0){
                this.sprite.x += this.sprite.velocityX;
            }
            if(this.sprite.x > 800-155 && this.sprite.velocityX > 0){
                this.sprite.x -= this.sprite.velocityX;
            }
        }else{
            this.sprite.rotation = this.angle;
            if(this.sprite.y < -500){
                this.speed = 10+(this.sprite.y/-500);
            }
            this.sprite.velocityY = this.speed;
            if(this.angle === 180 || this.angle === 0){
                this.sprite.velocityX = 0;
                //console.log("Yes")
            }else{
                this.sprite.velocityX = this.speed*2*this.angle/180;
                this.sprite.velocityY = this.speed*this.angle/180;
            }
        }
        
        //console.log(this.speed);
        push();
        translate(this.sprite.x,this.sprite.y);
        imageMode(CENTER);
        rotate(this.angle);
        image(this.img,0,0,w,h);
        pop();
    }
}