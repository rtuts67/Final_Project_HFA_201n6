'use strict';
var tableHeader = ['Region','Type','List Price', 'Square Ft', 'Downpayment'];

var landing = ['landing.html', 'landingEast.html', 'west.html', 'slanding.html'];

var houseData = [];

var dropDown1 = document.getElementById('dropdown1');

var dropDown2 = document.getElementById('dropdown2');

var dropDown3 = document.getElementById('dropdown3');

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

function makeFirstRow() {
  var firstRow = document.getElementById('header-row');
  for (var i = 0; i < tableHeader.length; i++) {
    var headers = document.createElement ('th');
    headers.textContent = tableHeader[i];
    firstRow.appendChild(headers);
  }
};

function makeOtherRows() {
  for (var x = 0; x < houseData.length; x++) {
    var tableRows = document.getElementById('table');

    var makeRows = document.createElement('tr');

    var firstCell = document.createElement('td');
    var a = document.createElement('a');
    a.textContent = houseData[x].name;
    a.href = landing[x];
    firstCell.appendChild(a);
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

function handleClick(event) {
  if (event.target.id === 'dropdown1') {
    doRegionMath();
    makeFirstRow();
    makeOtherRows();
  } else {}
};


dropDown1.addEventListener('click', handleClick);

dropDown2.addEventListener('click', handleClick);

dropDown3.addEventListener('click', handleClick);
