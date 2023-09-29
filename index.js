//Classes
let columns = $('.col');
columns.addClass(`border border-black border-2 border-opacity-50 p-5 m-3
                  btn btn-light
                  fs-1
                `);

let rows = $('.row');
rows.addClass('mb-3');

let buttons = $('.btn');
buttons.addClass('btn-outline-primary btn-lg');

let player1 = $('#Player1');
let player2 = $('#Player2');

//Actions
let topLeft = $('#top-left');
topLeft.on('click', function() {
    // console.log(`This ${topLeft.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
    }else if (playerO === true){
        oClick($(this));
    }else{
        let error = new Error('Players have not been assigned');
        return alert(error);
    }
})

let topCenter = $('#top-center');
topCenter.on('click', function() {
    // console.log(`This ${topCenter.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
    }else if (playerO === true){
        oClick($(this));
    }else{
        let error = new Error('Players have not been assigned');
        return alert(error);
    }
})

let topRight = $('#top-right');
topRight.on('click', function() {
    // console.log(`This ${topRight.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
    }else if (playerO === true){
        oClick($(this));
    }else{
        let error = new Error('Players have not been assigned');
        return alert(error);
    }
})

let middleLeft = $('#middle-left');
middleLeft.on('click', function() {
    // console.log(`This ${middleLeft.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
    }else if (playerO === true){
        oClick($(this));
    }else{
        let error = new Error('Players have not been assigned');
        return alert(error);
    }
})

let middleCenter = $('#middle-center');
middleCenter.on('click', function() {
    // console.log(`This ${middleCenter.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
    }else if (playerO === true){
        oClick($(this));
    }else{
        let error = new Error('Players have not been assigned');
        return alert(error);
    }
})

let middleRight = $('#middle-right');
middleRight.on('click', function() {
    // console.log(`This ${middleRight.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
    }else if (playerO === true){
        oClick($(this));
    }else{
        let error = new Error('Players have not been assigned');
        return alert(error);
    }
})

let bottomLeft = $('#bottom-left');
bottomLeft.on('click', function() {
    // console.log(`This ${bottomLeft.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
    }else if (playerO === true){
        oClick($(this));
    }else{
        let error = new Error('Players have not been assigned');
        return alert(error);
    }
})

let bottomCenter = $('#bottom-center');
bottomCenter.on('click', function() {
    // console.log(`This ${bottomCenter.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
    }else if (playerO === true){
        oClick($(this));
    }else{
        let error = new Error('Players have not been assigned');
        return alert(error);
    }
})
let bottomRight = $('#bottom-right');
bottomRight.on('click', function() {
    // console.log(`This ${bottomRight.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
    }else if (playerO === true){
        oClick($(this));
    }else{
        let error = new Error('Players have not been assigned');
        return alert(error);
    }
})

//Click Events
let xClick = function (element) {
    //this will replace the current text with a new text
    $(element).text("X");
}

let oClick = function (element) {
    $(element).text('O')
}

//Disable Buttons
let p1Disable = function () {
    player1.addClass('disabled');
}

let p2Disable = function () {
    player2.addClass('disabled');
}


//Player Assignment
let playerX = true;

let playerO = false;
