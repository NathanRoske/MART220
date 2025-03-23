class animationImages
{
    constructor(x, y, w, h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.currentAnimation;
        this.createAnimation();
        this.direction = "";
        this.speed = 3;
        
        
        
    }

    
    createAnimation()
    {
        this.currentAnimation = createSprite(this.x, this.y);
    }

    loadAnimation(animationType, fileNames)
    {
        this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length - 1]); 
        this.currentAnimation.width = 300;
        this.currentAnimation.height = 150;  
    }

    drawAnimations(animationType)
    {
        this.currentAnimation.frameDelay = 5000;
        this.currentAnimation.scale = .25; 
        this.currentAnimation.changeAnimation(animationType);
        if (animationType == 'walk' && this.direction == 'forward') {
            this.currentAnimation.direction = 0;
            this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = this.speed;
        }
        else if (animationType == 'walk' && this.direction == 'reverse') {
            this.currentAnimation.mirror.x = true;
            this.currentAnimation.direction = 180;
            this.currentAnimation.speed = this.speed;
        }
        else if (animationType == 'walk' && this.direction == 'down') {
            this.currentAnimation.mirror.x = true;
            this.currentAnimation.direction = 90;
            this.currentAnimation.speed = this.speed;
        }
        else if (animationType == 'walk' && this.direction == 'up') {
            this.currentAnimation.direction = 270;
            this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = this.speed;
        }
        else {
            this.currentAnimation.velocity.x = 0;
            this.currentAnimation.velocity.y = 0;
        }
    }

    updatePosition(direction)
    {
        this.direction = direction;   
    }
    
    isColliding(myBarrier) {
        return this.currentAnimation.collide(myBarrier);
    }
        
}