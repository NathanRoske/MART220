class burntSteakbites
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.burntSteakbitePiece = new Sprite(x, y, 25)
    }

    draw()
    {
        this.burntSteakbitePiece.color = "black";
    }
}