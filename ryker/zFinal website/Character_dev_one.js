var D = "demo"
var M = "myImg"
var Y = Math.floor((Math.random() * 20) + 90);
var X = Math.floor((Math.random() * 6) + 1);
var Cp = Y
var Names = document.getElementById("Hero_name").innerHTML
function oobj(CP){
 var Character={
   Name     : document.getElementById("Hero_name").innerHTML,
   Power    : document.getElementById("spec").innerHTML,
   Level    : X,
   FP : Y,
   CFP : CP,
   CEx : C,
   Ex : E,
   Nature   : function(){
     var Natures = [
       "Leader",
       "Independant",
       "Quiet",
       "Kind",
       "Happy",
       "Hasty"
     ];
     function Pick_nature(){
       var selected_nature = Natures[Math.floor(Math.random()*6)];
       return selected_nature;
   }
   return Pick_nature();
   },
   Photo    : function(typettt){
     var Another = document.getElementById("spec").innerHTML
     var typettt = Another + ".jpg"
     var Image_select2 = "Images/characters/" + typettt
     return Image_select2;
   },
   Info     : function(){
     return "Name: " + this.Name + "<br>" +
    "Species: " + this.Power + "<br>" +
    "HP: " + this.CFP + " / " + this.FP
   }
 };
 document.getElementById(D).innerHTML = Character.Info();
 document.getElementById(M).src = Character.Photo();
 document.getElementById("demo7").innerHTML = Character.CFP
 return Character.CFP
 }
