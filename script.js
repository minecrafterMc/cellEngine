const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "12px Arial";
const borderColor = "grey";
const outlineColor = "black";
const BackgroundColor = "red";
const cellHeight = 25;
const cellWidth = 30;
const BorederSize = 5;
const OutlineSize = 5;
const Columns = 6;
const Rows = 5;
const canvasHeight = 2 * OutlineSize + (Rows - 1) * BorederSize + Rows * cellHeight;
const canvasWidth = 2 * OutlineSize + (Columns - 1) * BorederSize + Columns * cellWidth;
document.getElementById("canvas").style.width = canvasWidth + "px";
document.getElementById("canvas").style.height = canvasHeight + "px";

function setup()
{
    let i = 0;
    let a = 1;
    ctx.fillStyle = outlineColor;
    ctx.fillRect(0,0,canvasWidth, canvasHeight);
    ctx.fillStyle = BackgroundColor;
    ctx.fillRect(OutlineSize, OutlineSize, OutlineSize, canvasHeight - (OutlineSize * 7));
    /*
    while (a != 12)
    {
        ctx.fillRect(i, 0, 5, 605);
        i += 30;
        a += 1;
    }
        i = 0;
        a = 1;
    while (a != 22)
    {
        ctx.fillRect(0,i, 305, 5);
        i += 30;
        a += 1;
    }
    */
}
setup();