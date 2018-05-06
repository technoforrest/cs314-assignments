'use strict'
function pointillizeImage(){
    var img = document.getElementById('spokane.jpg');
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    let lum = 200;

    let x = int(random(img.width));
    let y = int(random(img.height));
    let loc = x + y*img.width;
    
    
    let any_pixel = img.pixels[loc];
    
    loadPixels();
    
    let r = red(any_pixel);
    let g = green(any_pixel);
    let b = blue(any_pixel);
    
    noStroke();
    fill(r,g,b, lum);
    ellipse(x,y,int(random(24, 42)),6);
    if (lum <=200 && lum > 0){
      lum --;
    }else
      lum = 200;

}