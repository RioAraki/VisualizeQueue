// DOM element where the Timeline will be attached
var container_main = document.getElementById('visualization_main');
var container_17_40 = document.getElementById('visualization_17_40');
var container_kmd = document.getElementById('visualization_kmd');

// Create a DataSet (allows two way data-binding)
var items_main = new vis.DataSet([
  {id: 133910, content: '<b><a href="http://ontrack-internal.amd.com/browse/SWDEV-133910" target="_blank">133910 [QR][Maya2018] TDR</b><br/>ASIC: WX7100, OS:RS2</a>', start: '2017-08-29'}
]);

var items_17_40 = new vis.DataSet([
  {id: 1, content: '<b><a href="http://ontrack-internal.amd.com/browse/SWDEV-133910" target="_blank">133910 [QR][Maya2018] TDR</b><br/>ASIC: WX7100, OS:RS2</a>', start: '2017-08-29'}
]);

var items_kmd = new vis.DataSet([
  {id: 1, content: '<b><a href="http://ontrack-internal.amd.com/browse/SWDEV-133910" target="_blank">133910 [QR][Maya2018] TDR</b><br/>ASIC: WX7100, OS:RS2</a>', start: '2017-08-29'}
]);

// Configuration for the Timeline
var options = {};

// Create a Timeline
var timeline_main = new vis.Timeline(container_main, items_main, options);
var timeline_17_40 = new vis.Timeline(container_17_40, items_17_40, options);
var timeline_kmd = new vis.Timeline(container_kmd, items_kmd, options);

document.getElementById('fit').onclick = function() {
    timeline_main.fit();
  };

document.getElementById('find').onclick = function() {
  //  TODO: error check if the value is not found
    timeline_main.focus(document.getElementById('find_val').value);
  };
