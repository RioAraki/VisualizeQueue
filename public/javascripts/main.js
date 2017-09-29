// DOM element where the Timeline will be attached
var container_main = document.getElementById('visualization_main');
var container_17_40 = document.getElementById('visualization_17_40');
var container_kmd = document.getElementById('visualization_kmd');

// Create a DataSet (allows two way data-binding)
var items_main = new vis.DataSet([
  {id: 1, content: '133910 [QR][Maya2018] TDR<br/>WX7100 RS2', start: '2017-08-29'}
]);

// Configuration for the Timeline
var options = {};

// Create a Timeline
var timeline_main = new vis.Timeline(container_main, items_main, options);
var timeline_17_40 = new vis.Timeline(container_17_40, items_main, options);
var timeline_kmd = new vis.Timeline(container_kmd, items_main, options);
