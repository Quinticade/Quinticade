function key_select(letter){
  if(letter!="bks"){
    if(letter!="space"){
  var Hero_name = Hero_name+=letter
  document.getElementById("Hero_name").innerHTML+=letter;
}
}
  if(letter=="bks"){
    var str = document.getElementById("Hero_name").innerHTML;
    var len = str.length
    var len = len-1
    var nstr = str.slice(0,len);
    document.getElementById("Hero_name").innerHTML = nstr;
  }
  if(letter=="space"){
    document.getElementById("Hero_name").innerHTML+=" ";
  }
}
function escape(){
  alert('Submitting name')
  document.getElementById("div").style.display = "none"
  document.getElementById("atks").style.display = "block"
  document.getElementById("myImg2").style.display = "block"
  document.getElementById("demo2").style.display = "block"
  document.getElementById("Nameu").style.display = "none"
  document.getElementById("Hero_name").style.display = "none"
  oobj(Y)
  tobj(Yt)
}
function visible(){
  alert('Submitting character species')
  document.getElementById("div").style.display = "block"
  document.getElementById("Nameu").style.display = "block"
  document.getElementById("char").style.display = "none"
}
var Attacks = [
  1,
  2,
  3,
  4,
  5,
]
function Atk_function(num){
  document.getElementById("demo").innerHTML = Attacks[num];
}
function Print(A,x){
  var B = "You selected a "
  if(A == "Elephant"){
    var B = "You selected an "
  }
  document.getElementById("im1").innerHTML = B + A
  document.getElementById("spec").innerHTML = A
}
