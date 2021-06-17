let img = [];
let pic;

function preload() {
    for (let i = 0; i < 5; i++) {
        img[i] = loadImage('image/' + (i + 1) + 'f.png');
    }
}

function setup() {
    createCanvas(1200, 900);
    pic = floor(random(1, 6));
    image(img[pic], 0, 0);
    frameRate(5);
}

function draw() {
    let x1 = random(width - 10);
    let y1 = random(height - 20);

    let x2 = round(x1 + random(-30, 10));
    let y2 = round(y1 + random(-20, 10));

    let w = width / 20;
    let h = height / 10;

    set(x2, y2, get(x1, y1, w, h));

    rect(mouseX, mouseY, 8, 8);
    fill(259);
    noStroke();
}

function keyReleased() {
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    if (keyCode == DELETE || keyCode == BACKSPACE) {
        clear();
        image(img, 0, 0);
    }
}