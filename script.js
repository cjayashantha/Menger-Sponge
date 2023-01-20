var depth = 5;
var gridLength = 3;
var gridZise = gridLength * gridLength;
var boxLength = 300;
var timeOut = 1500;
var colorMain = "black";
var middle = (gridZise - 1) / 2;
var canves;

canves = document.getElementById("body");

function drawGrid() {
  var cell = document.createElement("div");
  cell.style.width = `${boxLength * gridLength}px`;
  cell.style.height = `${boxLength * gridLength}px`;
  cell.style.backgroundColor = colorMain;
  cell.style.float = "left";
  canves.appendChild(cell);

  setTimeout(() => drawInnerGrid([cell]), timeOut);
}

function drawInnerGrid(cells) {
  depth = depth - 1;
  var newCells = [];
  cells.forEach((cell) => {
    console.log(cell.offsetWidth);
    let size = parseInt(cell.style.width.replace("px")) / gridLength;
    for (var i = 0; i < gridZise; i++) {
      var box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = colorMain;
      box.style.float = "left";
      if (i === middle) {
        box.style.backgroundColor = "white";
      } else {
        newCells.push(box);
      }
      cell.appendChild(box);
    }
  });
  if (depth > 0) {
    setTimeout(() => drawInnerGrid(newCells), timeOut);
  }
}

drawGrid();
