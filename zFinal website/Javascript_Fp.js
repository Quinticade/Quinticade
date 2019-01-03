function Atk_function(Cp,num){
  var Attacks = [
    "Left hand",
    "Right hand",
    "Left foot",
    "Right foot",
    "Special move",
    0,
  ]
  function Attack_question(OATC){
    if (OATC==0){
      document.getElementById("demo8").innerHTML = "Your oppenent's attack missed"
    }
    if (OATC==1){
      document.getElementById("demo8").innerHTML = "Your opponent used its Left hand"
    }
    if (OATC==2){
      document.getElementById("demo8").innerHTML = "Your opponent used its Right hand"
    }
    if (OATC==3){
      document.getElementById("demo8").innerHTML = "Your opponent used its Left foot"
    }
    if (OATC==4){
      document.getElementById("demo8").innerHTML = "Your opponent used its Right foot"
    }
    if (OATC==5){
      document.getElementById("demo8").innerHTML = "Your opponent used its Special move"
    }
  }
  function accuracy(OATC){
    if (OATC==1){
      var acur = Math.floor((Math.random()*19)+1)
      if (acur<1){
        return 0
      }
      else{
        return OATC
      }
    }
    else if (OATC==2){
      var acur = Math.floor((Math.random()*19)+1)
      if (acur<1){
        return 0
      }
      else{
        return OATC
      }
    }
    else if (OATC==3){
      var acur = Math.floor((Math.random()*19)+1)
      if (acur<3){
        return 0
      }
      else{
        return OATC
      }
    }
    else if (OATC==4){
      var acur = Math.floor((Math.random()*19)+1)
      if (acur<5){
        return 0
      }
      else{
        return OATC
      }
    }
    else if (OATC==5){
      var acur = Math.floor((Math.random()*19)+1)
      if (acur<7){
        return 0
      }
      else{
        return OATC
      }
    }
    else{
      return 10
    }
  }
  var num2 = num + 1
  if (num==0){
    var acc = Math.floor((Math.random()*19+1))
    if (acc<1){
      document.getElementById("demo5").innerHTML = "Your attack missed"
      var OATC = Math.floor((Math.random() * 5) + 1)
      var OATC = accuracy(OATC)
      var MCP = document.getElementById("demo7").innerHTML - OATC;
      Attack_question(OATC)
      if (MCP>0){
        oobj(MCP)
      }
      if (MCP<=0){
        window.open("Game_lose.html","_self")
      }
    }
  else{
    document.getElementById("demo5").innerHTML = "You used your " + Attacks[num];
    var CP = tobj(Cp) - num2
      if (CP>0){
        tobj(CP)
      }
      if (CP<=0){
        window.open("Game_won.html","_self")
      }
      var OATC = Math.floor((Math.random() * 5) + 1)
      var OATC = accuracy(OATC)
      var MCP = document.getElementById("demo7").innerHTML - OATC;
      Attack_question(OATC)
      if (MCP>0){
        oobj(MCP)
      }
      if (MCP<=0){
        window.open("Game_lose.html","_self")
      }
  }
}

  if (num==1){
    var acc = Math.floor((Math.random()*19)+1)
    if (acc<3){
      document.getElementById("demo5").innerHTML = "Your attack missed"
      var OATC = Math.floor((Math.random() * 5) + 1)
      var OATC = accuracy(OATC)
      var MCP = document.getElementById("demo7").innerHTML - OATC;
      Attack_question(OATC)
      if (MCP>0){
        oobj(MCP)
      }
      if (MCP<=0){
        window.open("Game_lose.html","_self")
      }
    }
  else{
    document.getElementById("demo5").innerHTML = "You used your " + Attacks[num];
    var CP = tobj(Cp) - num2
      if (CP>0){
        tobj(CP)
      }
      if (CP<=0){
        window.open("Game_won.html","_self")
      }
      var OATC = Math.floor((Math.random() * 5) + 1)
      var OATC = accuracy(OATC)
      var MCP = document.getElementById("demo7").innerHTML - OATC;
      Attack_question(OATC)
      if (MCP>0){
        oobj(MCP)
      }
      if (MCP<=0){
        window.open("Game_lose.html","_self")
      }
  }
}
if (num==2){
  var acc = Math.floor((Math.random()*19)+1)
  if (acc<5){
    document.getElementById("demo5").innerHTML = "Your attack missed"
    var OATC = Math.floor((Math.random() * 5) + 1)
    var OATC = accuracy(OATC)
    var MCP = document.getElementById("demo7").innerHTML - OATC;
    Attack_question(OATC)
    if (MCP>0){
      oobj(MCP)
    }
    if (MCP<=0){
      window.open("Game_lose.html","_self")
    }
  }
else{
  document.getElementById("demo5").innerHTML = "You used your " + Attacks[num];
  var CP = tobj(Cp) - num2
    if (CP>0){
      tobj(CP)
    }
    if (CP<=0){
      window.open("Game_won.html","_self")
    }
    var OATC = Math.floor((Math.random() * 5) + 1)
    var OATC = accuracy(OATC)
    var MCP = document.getElementById("demo7").innerHTML - OATC;
    Attack_question(OATC)
    if (MCP>0){
      oobj(MCP)
    }
    if (MCP<=0){
      window.open("Game_lose.html","_self")
    }
}
}
if (num==3){
  var acc = Math.floor((Math.random()*19)+1)
  if (acc<7){
    document.getElementById("demo5").innerHTML = "Your attack missed"
    var OATC = Math.floor((Math.random() * 5) + 1)
    var OATC = accuracy(OATC)
    var MCP = document.getElementById("demo7").innerHTML - OATC;
    Attack_question(OATC)
    if (MCP>0){
      oobj(MCP)
    }
    if (MCP<=0){
      window.open("Game_lose.html","_self")
    }
  }
else{
  document.getElementById("demo5").innerHTML = "You used your " + Attacks[num];
  var CP = tobj(Cp) - num2
    if (CP>0){
      tobj(CP)
    }
    if (CP<=0){
      window.open("Game_won.html","_self")
    }
    var OATC = Math.floor((Math.random() * 5) + 1)
    var OATC = accuracy(OATC)
    var MCP = document.getElementById("demo7").innerHTML - OATC;
    Attack_question(OATC)
    if (MCP>0){
      oobj(MCP)
    }
    if (MCP<=0){
      window.open("Game_lose.html","_self")
    }
}
}
if (num==4){
  var acc = Math.floor((Math.random()*19)+1)
  if (acc<13){
    document.getElementById("demo5").innerHTML = "Your attack missed"
    var OATC = Math.floor((Math.random() * 5) + 1)
    var OATC = accuracy(OATC)
    var MCP = document.getElementById("demo7").innerHTML - OATC;
    Attack_question(OATC)
    if (MCP>0){
      oobj(MCP)
    }
    if (MCP<=0){
      window.open("Game_lose.html","_self")
    }
  }
else{
  document.getElementById("demo5").innerHTML = "You used your " + Attacks[num];
  var CP = tobj(Cp) - num2
    if (CP>0){
      tobj(CP)
    }
    if (CP<=0){
      window.open("Game_won.html","_self")
    }
    var OATC = Math.floor((Math.random() * 5) + 1)
    var OATC = accuracy(OATC)
    var MCP = document.getElementById("demo7").innerHTML - OATC;
    Attack_question(OATC)
    if (MCP>0){
      oobj(MCP)
    }
    if (MCP<=0){
      window.open("Game_lose.html","_self")
    }
}
}
  return Cp
}
