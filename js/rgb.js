document.getElementById("enviar").addEventListener("click",function(e){
  var r = document.getElementById("r").value;
  var g = document.getElementById("g").value;    
  var b = document.getElementById("b").value;    
  
  var valorHex = rgb(r,g,b);
  // alert(valorHex);
  document.getElementById("hex").value = valorHex;
  

});
document.getElementById("enviar2").addEventListener("click",function(e){
  var h=document.getElementById("hex").value;
  var valorRGB= hex(h);
  document.getElementById("r").value=valorRGB[0];
  document.getElementById("g").value=valorRGB[1];
  document.getElementById("b").value=valorRGB[2];
});

function rgb(r, g, b) {
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);
  rh = (r.toString(16)).toUpperCase();
  gh = g.toString(16).toUpperCase();
  bh = b.toString(16).toUpperCase();
  if(r>255){
      rh="FF";
  }
  if(g>255){
      gh="FF";
  }
  if(b>255){
      bh="FF";
  }
  if(r<0){
      rh="00";
  }
  if(g<0){
      gh="00";
  }
  if(b<0){
      bh="00";
  }

  rh=rh.padStart(2,"0");
  gh=gh.padStart(2,"0");
  bh=bh.padStart(2,"0");

  return "#"+rh+""+gh+""+bh;
}

function hex(h) {
  h = h.toString().toUpperCase();
  var r = h.charAt(1) + h.charAt(2);
  var g = h.charAt(3) + h.charAt(4);
  var b = h.charAt(4) + h.charAt(6);
  r = parseInt(r, 16).toString();
  g = parseInt(g, 16).toString();
  b = parseInt(b, 16).toString();
  
  r=r.padStart(3, "0");
  g=g.padStart(3, "0");
  b=b.padStart(3, "0");
var he=[r,g,b];
  return he;
}

