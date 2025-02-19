class animationImages
{
    constructor(fileName, x, y, w, h)
    {
        this.fileName = fileName;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ManAtArms =this.loadAnimation();
    }
    loadAnimation()
    {
        return loadImage(this.fileName);
    }

    drawAnimations()
    {
        image(this.ManAtArms, this.x,this.y,this.w, this.h);
    }
}