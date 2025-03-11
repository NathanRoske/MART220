class Steakbites
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.r = 25;
    }

    draw()
    {
        fill(100,0,0);
        circle(this.x, this.y, this.r);
    }
}