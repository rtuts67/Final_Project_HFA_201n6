'use strict';
var tableHeader = ['Region','Type','List Price', 'Square Ft', 'Downpayment'];

var houseData = [];

//var signInForm = document.getElementById('signIn');
//signInForm.addEventListener('submit', sendButton);
// TODO: The Eventlistener for the income click will go here.
//var incomeDrop = document.getElementById('dropDown');
//incomeDrop.addEventListener('click');

function Region(name, type, averageList, sq) {
  this.name = name;
  this.type = type;
  this.averageList = averageList;
  this.sq = sq;
  this.dp = 0;
  houseData.push(this);
}

Region.prototype.createDP = function() {
  this.dp = (this.averageList * 0.10);
};

Region.prototype.makeItHappen = function() {
  this.createDP();
};

new Region('North', 'House', 480000, 1200);
new Region('East', 'Condo', 439500, 1175);
new Region('West', 'Condo', 438000, 1171);
new Region('South', 'House', 699000, 1765);

function doRegionMath() {
  for (var i = 0; i < houseData.length; i++) {
    houseData[i].makeItHappen();
  }
};

doRegionMath();

//function sendButton() {
  //window.location.href = 'guide.html';
//};

function makeFirstRow() {
  var firstRow = document.getElementById('header-row');
  for (var i = 0; i < tableHeader.length; i++) {
    var headers = document.createElement ('th');
    headers.textContent = tableHeader[i];
    firstRow.appendChild(headers);
  }
};
makeFirstRow();

function makeOtherRows() {
  for (var x = 0; x < houseData.length; x++) {
    var tableRows = document.getElementById('table');

    var makeRows = document.createElement('tr');

    var firstCell = document.createElement('td');
    var a = document.createElement('a');
    a.textContent = houseData[x].name;
    a.href = 'landing.html';
    firstCell.appendChild(a);
    //firstCell.id = 'landing';
    //firstCell.addEventListener('click', landingButton);
    makeRows.appendChild(firstCell);
    console.log(houseData[x].name);

    var secondCell = document.createElement('td');
    secondCell.textContent = houseData[x].type;
    makeRows.appendChild(secondCell);

    var thirdCell = document.createElement('td');
    thirdCell.textContent = houseData[x].averageList;
    makeRows.appendChild(thirdCell);

    var fourthCell = document.createElement('td');
    fourthCell.textContent = houseData[x].sq;
    makeRows.appendChild(fourthCell);

    var fifthCell = document.createElement('td');
    fifthCell.textContent = houseData[x].dp;
    makeRows.appendChild(fifthCell);

    tableRows.appendChild(makeRows);
  }
};
makeOtherRows();
