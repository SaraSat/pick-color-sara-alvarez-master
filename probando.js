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