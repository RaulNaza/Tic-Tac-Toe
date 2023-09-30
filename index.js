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

// Player Buttons
let player1 = $('#Player1');
let nameOfP1 = player1.text() + ' (X)';
player1.text(nameOfP1);

let player2 = $('#Player2');
let nameOfP2 = player2.text() + ' (O)';
player2.text(nameOfP2);

//Error Message
const error = new Error('Please choose a Player')

//Actions
let topLeft = $('#top-left');
topLeft.on('click', function() {
    // console.log(`This ${topLeft.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
    }else{

        return alert(error);
    }
})

let topCenter = $('#top-center');
topCenter.on('click', function() {
    // console.log(`This ${topCenter.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
    }else{
        return alert(error);
    }
})

let topRight = $('#top-right');
topRight.on('click', function() {
    // console.log(`This ${topRight.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
    }else{
        return alert(error);
    }
})

let middleLeft = $('#middle-left');
middleLeft.on('click', function() {
    // console.log(`This ${middleLeft.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
    }else{
        return alert(error);
    }
})

let middleCenter = $('#middle-center');
middleCenter.on('click', function() {
    // console.log(`This ${middleCenter.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
    }else{
        return alert(error);
    }
})

let middleRight = $('#middle-right');
middleRight.on('click', function() {
    // console.log(`This ${middleRight.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
    }else{
        return alert(error);
    }
})

let bottomLeft = $('#bottom-left');
bottomLeft.on('click', function() {
    // console.log(`This ${bottomLeft.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
    }else{
        return alert(error);
    }
})

let bottomCenter = $('#bottom-center');
bottomCenter.on('click', function() {
    // console.log(`This ${bottomCenter.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
    }else{
        return alert(error);
    }
})
let bottomRight = $('#bottom-right');
bottomRight.on('click', function() {
    // console.log(`This ${bottomRight.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
    }else{
        return alert(error);
    }
})

//Click Events
let xClick = function (element) {
    //this will replace the current text with a new text
    $(element).text("X");
    playerX = null;
}

let oClick = function (element) {
    $(element).text('O')
    playerO = null;
}

//Disable/Enable Buttons
let p1Disable = function () {
    player1.addClass('disabled');
}
let p1Enable = function () {
    player1.removeClass('disabled');
}

let p2Disable = function () {
    player2.addClass('disabled');
}
let p2Enable = function () {
    player2.removeClass('disabled');
}


//Player Assignment
let playerX = null;

let playerO = null;

//player1 will be assigned to playerX and change its value to true
player1.on('click', function () {
    p2Disable();
    playerX = true;
    playerO = false;
})

//player2 will be assigned to playerO and change its value to true;

player2.on('click', function () {
    p1Disable();
    playerX = false;
    playerO = true;
})

