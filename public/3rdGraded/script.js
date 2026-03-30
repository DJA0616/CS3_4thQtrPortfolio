function plotPoint(x0, y0, x, y) {
    console.log(x0, y0, x, y) // checks the arguments passed to this function
    //in1.innerHTML = x0 + " " + y0 + " " + x + " " + y;, no need to access this anymore

    var point = document.createElement('div');  
    point.className = 'point';
    /* control where to place the div on the screen using left and bottom of position:absolute */
    point.style.left = (x - x0 + 200 - 5) + 'px'; // subtract half the width of the point to center it by changing left css property
    point.style.bottom = (y - y0 + 200 - 5) + 'px'; // subtract half the height of the point to center it by changing bottom css property
    document.getElementById('coordinatePlane').appendChild(point);

    // append new line of input and output to the table
    let editable = document.getElementById('tableEditable');
    let line = document.createElement('tr');

    let output = "";
    if (x > x0 && y > y0){
      output = "NE";
    }
    else if (x < x0 && y < y0){
      output = "SO";
    }
    else if (x > x0 && y < y0){
      output = "SE";
    }
    else if (x < x0 && y > y0){
      output = "NO";
    }
    else{
      output = "divisa";
    }

    line.innerHTML = "<td>" + x0 + " " + y0 + " " + x + " " + y + "</td><td>" + output + "</td>";
    editable.appendChild(line);
  }