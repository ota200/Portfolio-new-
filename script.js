var holder = [document.getElementById("1"),document.getElementById("2"),document.getElementById("3"),document.getElementById("4"),document.getElementById("5")]
var h = document.getElementById("hide").style

var num = 0

function show(btn){
  var name = btn.id
  if (name == "pro"){
    holder[0].style.visibility = "visible";
  }

  else if (name == "web"){
    holder[0].style.visibility = "visible";
  }

  h.visibility = "hidden";

}

function hide(btn){
  var name = btn.id
  if (name == "x_1"){
    holder[0].style.visibility = "hidden";
  }

  else if (name == "x_2"){
    holder[0].style.visibility = "hidden";
  }
  h.visibility = "visible";

}


