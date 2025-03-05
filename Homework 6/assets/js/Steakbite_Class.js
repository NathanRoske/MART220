class Steakbites
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

    draw()
    {
        fill(100,0,0);
        circle(this.x, this.y, 25);
    }
}