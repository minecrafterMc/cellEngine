const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "12px Arial";
ctx.textAlign = "center";
const BorderColor = "black";
const OutlineColor = "grey";
const BackgroundColor = "blue";
const CellHeight = 25;
const CellWidth = 25;
const BorderSize = 5;
const OutlineSize = 10;
const Columns = 9;
const Rows = 5;
const TicksPerSec = 4;
const CanvasHeight = 2 * OutlineSize + (Rows - 1) * BorderSize + Rows * CellHeight;
const CanvasWidth = 2 * OutlineSize + (Columns - 1) * BorderSize + Columns * CellWidth;
const SpacesOnGrid = Rows * Columns;
document.getElementById("canvas").width = CanvasWidth;
document.getElementById("canvas").height = CanvasHeight;
var Board = [];
function tick()
{
  
}
setup()
const ticks = setInterval(tick, 1000 / TicksPerSec)
var test = new Cell(3,3,"cyan","1","black","player");
test.drawCell();
test.drawText();