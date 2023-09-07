document.addEventListener("DOMContentLoaded", function () {
    const table = document.getElementById("circleTable");
    const numRows = 8;
    const numCols = 9;

    for (let row = 0; row < numRows; row++) {
        const newRow = table.insertRow(row);
        for (let col = 0; col < numCols; col++) {
            const newCell = newRow.insertCell(col);
            newCell.classList.add("circle");

            if (col > row) {
                newCell.classList.add("upper-triangle");
            } else {
                newCell.classList.add("lower-triangle");
            }
        }
    }
});
