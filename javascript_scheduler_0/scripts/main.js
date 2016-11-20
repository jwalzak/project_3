//Will create the table dynamically

var row = 4;
var col = 7;
function loadTable() {
    for (var i = 0; i < row; i++) {
        document.getElementById("schedTable").innerHTML += "<tr id=row" + i + "><td>Week " + (i + 1) + "</td>";
        for (var j = 0; j < col; j++) {
            document.getElementById('row' + i).innerHTML += '<td id="' + (i + j) + '"onclick="insertData(this);">Data</td>';
        }
    }
}


//The function to change the table to store the information that the user adds to the text area.
function insertData(ref) {
    alert("it worked");
    ref.innerHTML = "Data Inserted";
}