const cont = document.getElementById("image");

document.body.addEventListener('mousemove',function(e){
    var x=e.clientX;
    var y=e.clientY;
    if(x<=480){
        var xx = x;
        var movex = (xx/480)*30-30;
        cont.style.transform="rotateY("+movex+"deg)";
        if(y<=230){
            var yy = y
            var movey = -1*((yy/230)*30-30); 
            cont.style.transform="rotateY("+movex+"deg) rotateX("+movey+"deg)";
        }
        else if(y>=231){
            var yy=y-230;
            var movey=(yy/230)*30;
            cont.style.transform="rotateY("+movex+"deg) rotateX(-"+movey+"deg)";
        }
    }
    else if(x>=481){
        var xx=x-481;
        var movex = (xx/478)*30;
        cont.style.transform="rotateY("+movex+"deg)";
        if(y<=230){
            var yy = y
            var movey = -1*((yy/230)*30-30); 
            cont.style.transform="rotateY("+movex+"deg) rotateX("+movey+"deg)";
        }
        else if(y>=231){
            var yy=y-230;
            var movey=(yy/230)*30;
            cont.style.transform="rotateY("+movex+"deg) rotateX(-"+movey+"deg)";
        }
    }
    
});
