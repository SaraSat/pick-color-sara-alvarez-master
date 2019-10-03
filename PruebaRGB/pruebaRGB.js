function rgb(r,g,b){
    r=parseInt(r);
    g=parseInt(g);
    b=parseInt(b);
  if(r<=255 && r>15){
    rh=(r.toString(16)).toUpperCase();
  }  
  else{
      if(r>255){
        rh="FF";
      }
      else if(r<=15 && r>=0){
          rh="0"+(r.toString(16)).toUpperCase();
      }
      else{
          rh="00";
      }
      
  }
  if(g<=255 && g>15){
      
      gh=g.toString(16).toUpperCase();
  }
  else{
      if(g>255){
         gh="FF"; 
      }
      else if(g<=15 && g>=0){
          gh="0"+g.toString(16).toUpperCase();
      }
      else{
          gh="00";
      }
      
  }
  if(b<=255 && b>15){
       bh=b.toString(16).toUpperCase();
  }
  else{
      if(b>255){
        bh="FF";  
      }
      else if(b<=15 && b>=0){
          bh="0"+b.toString(16).toUpperCase();
      }
      else{
          bh="00";
      }
      
  }
  
  return "#"+rh+""+gh+""+bh;

}