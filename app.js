'use strict';

var houseData = [];

var signInForm = document.getElementById('signIn');
signInForm.addEventListener('submit', 'sign in function goes here');
// TODO: The Eventlistener for the income click will go here.
incomeDrop.addEventListener()

function Region(name, type, averageList, sq) {
  this.name = name;
  this.type = type;
  this.averageList = averageList;
  this.sq = sq;
  this.dp = 0;
  houseData.push(this);
}

Region.prototype.createDP = function(averageList) {
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
