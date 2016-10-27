'use strict';

var houseData = [];

function Region(name, type, averageList, sq) {
  this.name = name;
  this.type = [];
  this.averageList = averageList;
  this.sq = sq;
  houseData.push(this);
}

new Region('North', 'House', 480000, 1200);
new Region('East', 'Condo', 439500, 1175);
new Region('West', 'Condo', 438000, 1171);
new Region('South', 'House', 699000, 1765);
