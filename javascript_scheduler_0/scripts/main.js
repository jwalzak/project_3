//Global Variable
var data;
var lastCell = null;
var cellDataString;
var elIdText = "";
//Create an object to hold the data and reference the id of table elements


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

//var dataArrayJSONString = localStorage.getItem(data);
//cellData.dataArray = JSON.parse(dataArrayJSONString);


//This function will select the cell id
//To show that the cell has been chosen 
//the cell will change colour.
function seletedCell(ref) {
   
    //Get the id of the selected cell
    //place it into a variable
    data = ref.id;

    if (lastCell != null) {
        lastCell.style.backgroundColor = "#0094ff";
    }
    ref.style.backgroundColor = "#DDD";
    
    lastCell = ref;
}

//When the user clicks the button
//the data will be put into the cell and the object will be stored to localstorage.

function insertData() {
    //Get the text from the text box
    var text = document.getElementById("textArea").value;
    //display the text in the table
    document.getElementById(data).innerHTML = text;
    //concatenate the values and push to the end of the dataArray
    //elIdText = " ";
    elIdText += data + "-" + text;
    cellData.dataArray.push(elIdText);
    elIdText = "";
    //Put the cellData object into a JSON string
    cellDataString = JSON.stringify(cellData.dataArray);
    //Save the string with HTML5 storage
    localStorage.setItem("data", cellDataString);


}


//this will create the table based on the length of the object arrays weekArray and daysArray
function loadTable() {
    //Table creation
   
    for (var i = 0; i < cellData.weekArray.length; i++) {
        document.getElementById("schedTable").innerHTML += "<tr id=row" + i + "><td>Week " + (i + 1) + "</td>";
        for (var j = 0; j < cellData.daysArray.length; j++) {
            document.getElementById('row' + i).innerHTML += '<td id="' + (i + "_" + j) + '"onclick="seletedCell(this);" class="cell">Data</td>';
        }
    }

    var storageJSON = localStorage.getItem("data");
    var storage = JSON.parse(storageJSON);
    
    //alert(typeof storage);

    //Use jQuery to change the returned object into an array
    var storageArray = $.map(storage, function (value, index) {
        return [value];
    });

    for (var i = 0; i < storageArray.length; i++) {
        cellData.dataArray.push(storageArray[i]);
    }

    //To put the data in the table make a var that splits the string on -
    //array[0] is the element id
    //document.getElementById[array[0]].innerHTML = array[1];
    //will it be in a for loop for each item in the cellData.dataArray.length
    for (var i = 0; i < storageArray.length; i++) {
        var insert = storageArray[i];
        var tempArray = insert.split("-");
        console.log(tempArray);
        alert(tempArray[0]);
        alert(typeof tempArray);
        document.getElementById(tempArray[0]).innerHTML = tempArray[1];
    }

}//end loadTable




var i;
//logs to the console what is in local and session storage.
console.log("local storage");
for (i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
}

console.log("session storage");
for (i = 0; i < sessionStorage.length; i++) {
    console.log(sessionStorage.key(i) + "=[" + sessionStorage.getItem(sessionStorage.key(i)) + "]");
}


//Will remove all table data.
function clearTable() {
    for (var i = 0; i < cellData.weekArray.length; i++) {
        for (var j = 0; j < cellData.daysArray.length; j++) {
            document.getElementById(i + "_" + j).innerHTML = "";
        }
    }
}//End clearTable();