var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new vis.DataSet([
  {id: 1, content: '133910 [QR][Maya2018] TDR\nWX7100 RS2', start: '2017-08-29'}
]);

// Configuration for the Timeline
var options = {};

// Create a Timeline
var timeline = new vis.Timeline(container, items, options);
