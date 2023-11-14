const Point = (color, top, left) => {
  // const size = 10;
  const div = document.createElement("div");
  div.style.backgroundColor = color;
  if (color==="black") {
    div.setAttribute("class","died point")
  }else{
    div.setAttribute("class","alive point");
  }
  return div;
};

const LetterZ = () => {
  let div = document.createElement("div");
  div.className = "letterZ";

  const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  map.forEach((row) => {
    let rowdiv = document.createElement("div");
    rowdiv.className = "row";
    for (let i = 1; i <= row.length; i++) {
      if (row[i] === 1) rowdiv.appendChild(Point("white"));
      if (row[i] === 0) rowdiv.appendChild(Point("black"));
    }
    div.appendChild(rowdiv);
  });

  return div;
};
const Letter0 = () => {
  let div = document.createElement("div");
  div.className = "letter0";

  const map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  map.forEach((row) => {
    let rowdiv = document.createElement("div");
    rowdiv.className = "row";
    for (let i = 1; i <= row.length; i++) {
      if (row[i] === 1) rowdiv.appendChild(Point("white"));
      if (row[i] === 0) rowdiv.appendChild(Point("black"));
    }
    div.appendChild(rowdiv);
  });

  return div;
};
const Letter1 = () => {
  let div = document.createElement("div");
  div.className = "letter1";

  const map = [
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  map.forEach((row) => {
    let rowdiv = document.createElement("div");
    rowdiv.className = "row";
    for (let i = 1; i <= row.length; i++) {
      if (row[i] === 1) rowdiv.appendChild(Point("white"));
      if (row[i] === 0) rowdiv.appendChild(Point("black"));
    }
    div.appendChild(rowdiv);
  });

  return div;
};

export const obstacles = () => {
  let container = document.querySelector(".obstacles");

  container.appendChild(LetterZ());
  container.appendChild(Letter0());
  container.appendChild(Letter1());
};
