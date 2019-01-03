var D = "demo"
var M = "myImg"
var Yt = Math.floor((Math.random() * 20) + 90);
var CP = Yt
var X = Math.floor((Math.random() * 6) + 1);
var Type = [
  "Lion",
  "Zebra",
  "Giraffe",
  "Tiger",
  "Meerkat",
  "Camel",
  "Bear",
  "Monkey",
  "Elephant"
];
var picture = Math.floor(Math.random()*9)
var Types = Type[picture];
var E = Math.floor(Math.random()*100);
var C = Math.floor(Math.random()*100);
while(C>=E){
    var X=X+1
    var C= C-E
  }
    function Nature(){
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
    }
var nature = Nature()
var i = 0
function tobj(CP){
 var Character2={
   Name     : Names,
   Power    : Types,
   Level    : X,
   FP : Yt,
   CFP : CP,
   CEx : C,
   Ex : E,
   Nature   : nature,
   Photo    : function(picture){
     var Images = [
       "Lion.jpg",
       "Zebra.jpg",
       "Giraffe.jpg",
       "Tiger.jpg",
       "Meerkat.jpg",
       "Camel.jpg",
       "Bear.jpg",
       "Monkey.jpg",
       "Elephant.jpg"
     ];
     var Image_select = Types + ".jpg"
     var Image_select2 = "Images/characters/" + Image_select
     return Image_select2;
   },
   Info     : function(){
     return "Species: " + this.Power + "<br>" +
    "Hp: " + this.CFP + " / " + this.FP
   }
 };
 document.getElementById("demo2").innerHTML = Character2.Info();
 document.getElementById("myImg2").src = Character2.Photo(Types);
 document.getElementById("demo3").innerHTML = Character2.CFP
return Character2.CFP
}
