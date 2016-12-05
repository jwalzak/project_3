<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="javascript_scheduler_0.index" %>

<!DOCTYPE HTML>
<html>
<head>
    <title>JavaScript Scheduler</title>
	<meta charset="utf-8" />
    <link href="style/style.css" rel="stylesheet" />
    <script src="scripts/jquery-3.1.1.js"></script>
    <script src="scripts/main.js"></script>
</head>
<body onload="loadTable();">
    <div id="main">
        <h1>Month Planner</h1>
        <h2>Instructions</h2>
        <ol>
            <li>Click the cell that you wish to update.</li>
            <li>Enter your text into the textbox.</li>
            <li>Press Submit to enter data.</li>
            <li>Clear table will remove all information.</li>
            <li>WARNING: Clear Table will delete all data.</li>
            
        </ol>
        <table border="1" id="schedTable" class="table">
            <tr>
                <th></th>
                <th class="cell">Sunday</th>
                 <th class="cell">Monday</th>
                 <th class="cell">Tuesday</th>
                 <th class="cell">Wednesday</th>
                 <th class="cell">Thursday</th>
                 <th class="cell">Friday</th>
                 <th class="cell">Saturday</th>
            </tr>
        </table>
        <form>
            <textarea id="textArea" rows="2" cols="20"></textarea>
            <input id="btnSubmit" type="button" onclick="insertData();" class="control" value="Submit" />
            <input id="btnClear" type="button" onclick="clearTable();"class="control" value="Clear table" />
        </form>
        <p>Currently Saving to: <span id="status"><script>document.write(navigator.onLine ? "Online" : "Offline");</script></span></p>
    </div>
</body>
</html>