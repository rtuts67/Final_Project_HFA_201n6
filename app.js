'use strict';

var houseData = [];

function Region(name, type, averageList, sq) {
  this.name = name;
  this.type = [];
  this.averageList = averageList;
  this.sq = sq;
  this.dp = 0;
  houseData.push(this);
}

//TODO: GET DP WORKING
Region.prototype.createDP = function() {
  for (var i = 0; i < houseData.length; i++) {
    this.avergerageList[i] * 0.10;
    this.dp += this.averageList[i];
  }
};
Region.prototype.createDP();
new Region('North', 'House', 480000, 1200);
new Region('East', 'Condo', 439500, 1175);
new Region('West', 'Condo', 438000, 1171);
new Region('South', 'House', 699000, 1765);
