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