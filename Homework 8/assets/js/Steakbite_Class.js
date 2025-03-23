class Steakbites
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.SteakbitePiece = new Sprite(x, y, 25)
        
    }

    draw()
    {
        this.SteakbitePiece.color = "red";
    }
}