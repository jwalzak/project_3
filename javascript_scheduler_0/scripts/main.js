//Global Variable
var data;
var lastCell = null;
var cellDataString;
//Create an object to hold the data and reference the id of table elements
localStorage.getItem(cellDataString);
console.log(cellDataString);

//Create an object filled with arrays.
var cellData = {
    daysArray: [],
    weekArray: [],
    dataArray: []
}

//Put data in the array
cellData.daysArray[0] = "Sunday";
cellData.daysArray[1] = "Monday";
cellData.daysArray[2] = "Tuesday";
cellData.daysArray[3] = "Wednesday";
cellData.daysArray[4] = "Thursday";
cellData.daysArray[5] = "Friday";
cellData.daysArray[6] = "Saturday";

cellData.weekArray[0] = "Week 1";
cellData.weekArray[1] = "Week 2";
cellData.weekArray[2] = "Week 3";
cellData.weekArray[3] = "Week 4";





function seletedCell(ref) {
   
    //Get the id of the selected cell
    //place it into a variable
    data = ref.id;
    //cellData.dataArray.push(combineId);

    if (lastCell != null) {
        lastCell.style.backgroundColor = "White";
    }
    ref.style.backgroundColor = "#DDD";
    
    lastCell = ref;
}

function insertData() {
    //Get the text from the text box
    var text = document.getElementById("textArea").value;
    //display the text in the table
    document.getElementById(data).innerHTML = text;
    //concatenate the values and push to the end of the dataArray
    data += "-" + text;
    cellData.dataArray.push(data);
    //Put the cellData object into a JSON string
    cellDataString = JSON.stringify(cellData);
    //Save the string with HTML5 storage
    localStorage.setItem(cellDataString);


}


//this will create the table based on the length of the object arrays weekArray and daysArray
function loadTable() {
    for (var i = 0; i < cellData.weekArray.length; i++) {
        document.getElementById("schedTable").innerHTML += "<tr id=row" + i + "><td>Week " + (i + 1) + "</td>";
        for (var j = 0; j < cellData.daysArray.length; j++) {
            document.getElementById('row' + i).innerHTML += '<td id="' + (i + "_" + j) + '"onclick="seletedCell(this);">Data</td>';
        }
    }

}
