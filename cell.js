class Cell
{
  constructor(x,y,color,text,textColor,textSize,type)
  {
    //bx and by stand for "board x/y" 
    //it stores the cell's x and y values
    //relative to the board not in pixels
    this.bx = x;
    this.by = y;
    this.x = OutlineSize + (x - 1) * CellWidth + (x - 1) * BorderSize;
    this.y = OutlineSize + (y - 1) * CellHeight + (y - 1) * BorderSize;
    if (type != "empty")
    {
    this.color = color;
    this.text = text;
    this.type = type;
    this.textColor = textColor;
    this.textSize = CellWidth / text.length;
    }
    else 
    {
      this.color = BackgroundColor;
      this.text = text;
      this.type = "empty";
      this.textColor = "darkred";
      this.textSize = CellWidth / text.length;
    }
  }
  drawCell()
  {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,CellWidth,CellHeight);
  }
  drawText()
  {
    ctx.fillStyle = this.textColor;
    ctx.font = this.textSize + "px Arial";
    ctx.fillText(this.text, this.x + CellWidth / 3, this.y + CellHeight /1.2);
  }
  move(x,y)
  {
    if (this.bx + x <= Columns && this.bx + x != 0 && this.by + y <= Rows && this.by + y != 0)
    {
    let ocolor = this.color;
    let otcolor = this.textColor;
    this.color = BackgroundColor;
    this.drawCell();
    this.color = ocolor;
    this.textColor = otcolor;
    this.bx += x;
    this.by += y;
    this.x = OutlineSize + (this.bx - 1) * CellWidth + (this.bx - 1) * BorderSize;
    this.y = OutlineSize + (this.by - 1) * CellHeight + (this.by - 1) * BorderSize;
    this.drawCell();
    this.drawText();
    }
  }
    tp(x,y)
    {
      let ocolor = this.color;
      this.color = BackgroundColor;
      this.drawCell();
      this.color = ocolor;
      this.bx = x;
      this.by = y;
      this.x = OutlineSize + (this.bx - 1) * CellWidth + (this.bx - 1) * BorderSize;
      this.y = OutlineSize + (this.by - 1) * CellHeight + (this.by - 1) * BorderSize;
      this.drawCell();
      this.drawText();
    }
  }
function setup()
{
    let i = OutlineSize + CellWidth;
    let a = 1;
    ctx.fillStyle = OutlineColor;
    ctx.fillRect(0,0,CanvasWidth, CanvasHeight);
    ctx.fillStyle = BackgroundColor;
    ctx.fillRect(OutlineSize, OutlineSize, CanvasWidth - OutlineSize * 2,CanvasHeight - (OutlineSize * 2));
    ctx.fillStyle = BorderColor;
    while (a != Columns)
    {
        ctx.fillRect(i, OutlineSize, BorderSize, CanvasHeight - (OutlineSize * 2));
        i += CellWidth + BorderSize;
        a += 1;
    }
        i = OutlineSize + CellHeight;
        a = 1;
        while (a != Rows)
    {
        ctx.fillRect(OutlineSize, i, CanvasWidth - (OutlineSize * 2),BorderSize);
        i += CellHeight + BorderSize;
        a += 1;
    }
}