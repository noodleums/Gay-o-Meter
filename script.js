var names = [];
var gaynesslist = [];

document.getElementById("runCheck").addEventListener("click", function(){
  document.getElementById("debug").innerHTML = "";
  document.getElementById("finalScore").innerHTML = "";
  document.getElementById("bar").style.width = "0%";
  
  var styleName = document.getElementById("nameInput").value.toString();
  var rawName = document.getElementById("nameInput").value.toString().toLowerCase().replace(/ /g,'')
  if (!names.includes(rawName) && rawName.length !== 0){
    names.push(rawName);
  } else if (rawName.length == 0){
    denyName();
  }
  var gayness = Math.random() * 100;
  gaynesslist.push(gayness.toFixed(2));
  var nameIndex = names.indexOf(rawName);
  if (nameIndex !== -1) {
    var gaynessAtIndex = gaynesslist[nameIndex];
    var i = 0;
    if (i == 0) {
      i = 1;
      var bar = document.getElementById("bar");
      var width = 1;
      var id = setInterval(frame, 1);
      function frame() {
        if (width >= gaynessAtIndex) {
          clearInterval(id);
          i = 0;
        } else {
          width = width +.25;
          bar.style.width = width + "%";
        }
      }
    }
    document.getElementById("finalScore").innerHTML = styleName+" is "+gaynessAtIndex+"%"+" homosexual";
  } else {
    denyName();
  }
  document.getElementById("nameInput").value = "";
});

function denyName() {
  document.getElementById("debug").innerHTML = "name invalid or not found";
}
