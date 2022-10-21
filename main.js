

window.onload = function(){
    var w = $(window).width();
    var h = $(window).height(); 
    resizeGlass(w,h);
    generateGlass(w,h);
}

function resizeGlass(w,h){  
    $('#polyhold').width(w);
    $('#polyhold').height(h);
}

function generateGlass(w,h){
    var hArray = [{x:129, y:610}, {x:129, y:97}, {x:248, y:97}, {x:248, y:311}, 
        {x:457,y:311}, {x:457, y:97}, {x:577, y:97}, {x:577, y:610}, {x:457, y:610},
        {x:457, y:392}, {x:248, y:392}, {x:248, y:610}];
    hPoints = '';
    var centerWidth = w/2;
    var centerHeight = h/2
    for (var pointCount = 0; pointCount < hArray.length ; pointCount++){
        hPoints+= (hArray[pointCount]['x']+(centerWidth-353))+","+ (hArray[pointCount]['y']+(centerHeight-353.5)) + " ";
    }

    var hhtml = '<polygon id="h" points="'+hPoints+'">';
    $('#polyhold').html(hhtml);

    
}