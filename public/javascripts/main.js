// DOM element where the Timeline will be attached
var container_main = document.getElementById('visualization_main');
var container_17_40 = document.getElementById('visualization_17_40');
var container_kmd = document.getElementById('visualization_kmd');

// Create a DataSet (allows two way data-binding)
var items_main = new vis.DataSet([
  {id: 133910, content: '<b><a href="http://ontrack-internal.amd.com/browse/SWDEV-133910" target="_blank">133910 [QR][Maya2018] TDR</b><br/>ASIC: WX7100, OS:RS2</a>', start: '2017-07-13'},
  {id: 134104, content: '<b><a href="http://ontrack-internal.amd.com/browse/SWDEV-134104" target="_blank">134104 [CF][Hawaii] TDR</b><br/>ASIC: WX7100, OS:RS2</a>', start: '2017-08-29'},
  {id: 134227, content: '<b><a href="http://ontrack-internal.amd.com/browse/SWDEV-134227" target="_blank">133910 [QR][Maya2018] TDR</b><br/>ASIC: WX7100, OS:RS2</a>', start: '2017-09-26'},
]);

var items_17_40 = new vis.DataSet([
  {id: 133910, content: '<b><a href="http://ontrack-internal.amd.com/browse/SWDEV-133910" target="_blank">133910 [QR][Maya2018] TDR</b><br/>ASIC: WX7100, OS:RS2</a>', start: '2017-08-29'}
]);

var items_kmd = new vis.DataSet([
  {id: 133910, content: '<b><a href="http://ontrack-internal.amd.com/browse/SWDEV-133910" target="_blank">133910 [QR][Maya2018] TDR</b><br/>ASIC: WX7100, OS:RS2</a>', start: '2017-08-29'}
]);

// Configuration for the Timeline
var options = {
  editable: false,
  clickToUse: true
};
// Create a Timeline
var timeline_main = new vis.Timeline(container_main, items_main, options);
var timeline_17_40 = new vis.Timeline(container_17_40, items_17_40, options);
var timeline_kmd = new vis.Timeline(container_kmd, items_kmd, options);


var choosen = timeline_main
// Click to choose a timeline to work on
$( "body" ).click(function( event ) {
  console.log("EVENT: " + event.target.innerHTML);
  if (event.target.innerHTML == 'Mainline'){
    choosen = timeline_main
    document.getElementById('chosen').innerHTML = 'Mainline'
  } else if (event.target.innerHTML == '17.40'){
    choosen = timeline_17_40
    document.getElementById('chosen').innerHTML = '17.40'
  } else if (event.target.innerHTML == 'kmd') {
    choosen = timeline_kmd
    document.getElementById('chosen').innerHTML = 'kmd'
  }
});



document.getElementById('fit').onclick = function() {
    choosen.fit();
  };

document.getElementById('find').onclick = function() {
  //  TODO: error check if the value is not found
    choosen.focus(document.getElementById('find_val').value);
  };
