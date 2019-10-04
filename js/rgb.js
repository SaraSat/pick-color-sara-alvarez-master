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
  var ñ = h.charAt(0) + h.charAt(1);
  var r = h.charAt(2) + h.charAt(3);
  var g = h.charAt(4) + h.charAt(5);
  var b = h.charAt(6) + h.charAt(7);
  r = parseInt(r, 16).toString();
  g = parseInt(g, 16).toString();
  b = parseInt(b, 16).toString();
  
  r=r.padStart(3, "0");
  g=g.padStart(3, "0");
  b=b.padStart(3, "0");

  return r + '' + g + '' + b;
}

