// ------------------ Background images ---------------------------
// All the images schould go in this file

const bgImg = document.createElement('img');
bgImg.src = '../images/road.png';

// create backgr
class Background {
    constructor( canvasContext ){
        (this.ctx = canvasContext),
        (this.x = 0),
        (this.y = 0),
        (this.width = 500),
        (this.height = 900);
    }

    draw(){
        this.ctx.drawImage(bgImg, this.x, this.y, this.width, this.height);
    }


}