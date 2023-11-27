const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "12px Arial";
const BorderColor = "grey";
const OutlineColor = "blue";
const BackgroundColor = "cyan";
const CellHeight = 25;
const CellWidth = 10;
const BorderSize = 20;
const OutlineSize = 5;
const Columns = 7;
const Rows = 20;
const CanvasHeight = 2 * OutlineSize + (Rows - 1) * BorderSize + Rows * CellHeight;
const CanvasWidth = 2 * OutlineSize + (Columns - 1) * BorderSize + Columns * CellWidth;
document.getElementById("canvas").width = CanvasWidth;
document.getElementById("canvas").height = CanvasHeight;

function setup()
{
    let i = OutlineSize + CellWidth;
    let a = 1;
    ctx.fillStyle = OutlineColor;
    ctx.fillRect(0,0,CanvasWidth, CanvasHeight);
    ctx.fillStyle = BackgroundColor;
    ctx.fillRect(OutlineSize, OutlineSize, CanvasWidth - OutlineSize * 2,CanvasHeight - (OutlineSize * 2));
    ctx.fillStyle = BorderColor;
    while (a != Rows + 2)
    {
        ctx.fillRect(OutlineSize, OutlineSize, OutlineSize, CanvasWidth - (OutlineSize * 2));
        i += CellWidth + BorderSize;
        a += 1;
    }
        i = 0;
        a = 1;
        /*
    while (a != 22)
    {
        ctx.fillRect(0,i, 305, 5);
        i += 30;
        a += 1;
    }
    */
}
setup();