the_bell = new Audio("Buddha-bell-sound-mp3");


document.getElementById("no").style.visibility = "none";
document.getElementById("yes").style.visibility = "none";

function jazz() {
document.getElementById("thebest").play();
}

//https://teachablemachine.withgoogle.com/models/[...]

//also remeber amibition abt bell sound demo as creativitty

function randomInteger(bruh) {
    return Math.floor(Math.random() * max + 1);
}
function randomColor() {
red = randomInteger(255);
blue = randomInteger(255);
green = randomInteger(255);
return [r, g, b];
}

for(i = 0; i<12345678901234567890234567890123456789; i++) {
    document.getElementById("htmlbod").style.backgroundColor = randomColor;
}

first();
function first() {
    document.getElementById("WOWZA").innerHTML = "RED IS THE FIRST OF THESE AMAZING COLORS IN THE BACK OF THE SCREEN";
    setTimemout(second(), 3000);
}

function second() {
    document.getElementById("WOWZA").innerHTML = "NEXT IS THE GREEN OF GRASSSSSSSSSINESSSSSSSSSS";
    setTimeout(third(), 3000);
}

function third() {
    document.getElementById("WOWZA").innerHTML = "lastly...is blue. its ok i guess...";
    setTimeout(firstIntro(), 3000);
}

function firstIntro() {
    document.getElementById("WOWZA").innerHTML="BUT WHATS BETTER IS...";
    setTimeout(first(), 1000);
}

function classifier() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classify.ml5.soundClassifier("", modelReady);
}

function modelReady() {
    classifier.classify(gotresult);
}

function gotresult(result, error) {
if(error) {
    console.error(error);
}
else {
    console.log(result);

    random_r = Math.floor(Math.random() * 255) + 1;
    random_g = Math.floor(Math.random() * 255) + 1;
    random_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_obj_name").innerHTML = "i can totally hear someee" + result[0].label;
    document.getElementById("result_am_confident").innerHTML = "im confident to about" + (results[0].confidence*100).toFixed(2)+ '%';
    document.getElementById("result_obj_name").style.color = rgb(random_r, random_g, random_b);
    
    img = document.getElementById("alien1");
    img2 = document.getElementById("alien2");
    img3 = document.getElementById("alien3");
    img4 = document.getElementById("alien4");


    if(result == "Background Noise") {
        img.src = "aliens-01.gif";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
    }
    else if(result == "snap") { 
        img.src = "aliens-01.png";
        img2.src = "aliens-02.gif";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.png";
    }
    else if(result == "clap") { 
        img.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.gif";
        img4.src = "aliens-04.png";
    }
    else{
        img.src = "aliens-01.png";
        img2.src = "aliens-02.png";
        img3.src = "aliens-03.png";
        img4.src = "aliens-04.gif";
    }
}
}


function thesecrets() {
    document.getElementById("secreative").innerHTML = "so you realized the background wasnt the right color... are you sure you want this? there will be consequences.";
    document.getElementById("no").style.visibility = "visible";
    document.getElementById("yes").style.visibility = "visible";
}

function no() {
    docoument.getElementById("secretive").innerHTML = "fine by me, click on the central button again if you change your mind...";
}

function yes() {
    document.getElementById("secretive").innerHTML = "wow, you actually did it. well enjoy your victory for now, it wont last. ill be back...";
    setTimeout(truecolor1, 0000);
}

function truecolor1() {
    document.getElementById("htmlbod").style.backgroundColor = "red";
    setTimeout(truecolor2, 3000);
}
function truecolor2() {
    document.getElementById("htmlbod").style.backgroundColor = "green";
    setTimeout(truecolor3, 3000);
}
function truecolor3() {
    document.getElementById("htmlbod").style.backgroundColor = "blue";
    setTimeout(truecolor1, 4000);
}

function ring() {
    the_sound.play;
}