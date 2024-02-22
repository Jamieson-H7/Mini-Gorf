document.onload = initiate();



// A class to represent a tile in a top-down game
class Tile {
    // A constructor that takes the x and y coordinates, the width and height, and the image index of the tile
    constructor(x, y, width, height, color="rgb(0,0,0)", image=null) {
        // Assign the parameters to the properties of the tile object
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.image = image;
    }

    // A method to draw the tile on the canvas
    draw(ctx) {
        // Draw the tile image on the canvas using the source and destination coordinates and dimensions
        if(!this.image==null){
            ctx.drawImage(image, this.x, this.y, this.width, this.height);
        }
        else{
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = "rgb(0,0,0)";
        }
    }
}



function initiate() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    let testTile = new Tile(50,50,50,50);
    testTile.draw(ctx)
}

