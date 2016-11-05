'use strict';

var tableHeader = ['Region','Type','Average List Price', 'Square Ft', 'Downpayment'];

var landing = ['landing.html', 'landingEast.html', 'west.html', 'slanding.html'];

var houseData = [];

var clicksTotal = 0;

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

function lowValue() {
  new Region('North', 'Condo', 354000, 1200);
  new Region('East', 'Condo', 439500, 1175);
  new Region('West', 'Condo', 438000, 1171);
  new Region('South', 'House', 440000, 1765);
};

function midValue() {
  new Region('North', 'House', 480000, 1200);
  new Region('East', 'Condo', 439500, 1175);
  new Region('West', 'Condo', 438000, 1171);
  new Region('South', 'House', 699000, 1765);
};

function highValue() {
  new Region('North', 'House', 480000, 2200);
  new Region('East', 'House', 584000, 2000);
  new Region('West', 'House', 557000, 2100);
  new Region('South', 'House', 699000, 2200);
};

function doRegionMath() {
  for (var i = 0; i < houseData.length; i++) {
    houseData[i].makeItHappen();
  }
};

function displayLocalStorage() {
  if (localStorage.name) {
    var name = JSON.parse(localStorage.getItem('name'));
    var id = document.getElementById('localS');
    id.textContent = 'Welcome, ' + name + '!' + ' This is as simple as it gets. Select your income level and let us suggest which neighborhoods fit your needs.';
  }
}
displayLocalStorage();

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
    var tableRows = document.getElementById('tbody');

    var makeRows = document.createElement('tr');

    var firstCell = document.createElement('td');
    var a = document.createElement('a');
    a.textContent = houseData[x].name;
    a.href = landing[x];
    firstCell.appendChild(a);
    makeRows.appendChild(firstCell);

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

function showTable (event) {
  table.style.visibility = 'visible';
  clicksTotal += 1;
  if (clicksTotal > 1) {
    houseData = [];
    var elmHead = document.getElementById('header-row');
    elmHead.innerHTML = '';
    console.log(elmHead);
    var elmTable = document.getElementById('tbody');
    elmTable.innerHTML = '';
    console.log(elmTable);
  }
  if (event.target.value === 'low') {
    lowValue();
  } else if (event.target.value === 'mid') {
    midValue();
  } else if (event.target.value === 'high') {
    highValue();
  } else {
    document.getElementById('dropDown0');
    table.style.visibility = 'hidden';
  };
  // doRegionMath();
  // makeOtherRows();
    doRegionMath();
    makeFirstRow();
    makeOtherRows();
}

dropDown.addEventListener('change', showTable);

var theToggle = document.getElementById('toggle');

function hasClass(elem, className) {

  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');

  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');

}
function addClass(elem, className) {

  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }

  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
}
function removeClass(elem, className) {

  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }

  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }

}
function toggleClass(elem, className) {

  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0 ) {
      newClass = newClass.replace( " " + className + " " , " " );
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  } else {
    elem.className += ' ' + className;
  }
}

theToggle.onclick = function() {
  toggleClass(this, 'on');
  return false;
};
var theToggle = document.getElementById('toggle');

function hasClass(elem, className) {

	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');

  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');

}
function addClass(elem, className) {

    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }

  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
}
function removeClass(elem, className) {

	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }

  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }

}
function toggleClass(elem, className) {

	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;

  var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0 ) {
      newClass = newClass.replace( " " + className + " " , " " );
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  } else {
    elem.className += ' ' + className;
  }
}

theToggle.onclick = function() {
  toggleClass(this, 'on');
  return false;
}
