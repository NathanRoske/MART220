class animationImages
{
    constructor(fileName, x, y, w, h)
    {
        this.fileName = fileName;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.i = 0;
        this.currentFramecount = 0;
        this.imageObjects = [];
        this.loadAnimation();
        
    }
    loadAnimation()
    {
        for(var i = 0; i < this.fileName.length; i++)
        {
            this.imageObjects[i] = loadImage(this.fileName[i]);
        }
    }

    drawAnimations()
    {
        this.incrementIndex();
        if(this.direction == "reverse")
        {
            translate(this.w,0);
            scale(-1.0,1.0);
            image(this.imageObjects[this.i], -this.x, this.y, this.w, this.h);
        }
        else
        {
            image(this.imageObjects[this.i], this.x, this.y, this.w, this.h);
        }
    }

    incrementIndex() {
        if(this.currentFramecount % 5 == 0)
            this.i++;
        if(this.i >= this.fileName.length){
            this.i = 0;
        }
    }

    hasCollided(x2, y2, w2, h2) {
        return (
            this.x < x2 + w2 &&
            this.x + this.w > x2 &&
            this.y < y2 + h2 &&
            this.y + this.h > y2
        );
    }
    updatePosition(direction)
    {
        this.direction = direction;
        if(direction == "forward")
        {
            this.x += 1;
        }
        else if(direction == "reverse")
        {
            this.x -= 1;
        }
        else if(direction == "up")
        {
            this.y -= 1;
        }
        else if(direction == "down")
        {
            this.y += 1;
        }
    }
    setCurrentFrameCount(currentFramecount)
    {
        this.currentFramecount = currentFramecount;
    }
}