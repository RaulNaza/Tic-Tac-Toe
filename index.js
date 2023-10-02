//JQuery 
let columns = $('.col');
columns.addClass(`border border-black border-2 border-opacity-50 p-5 m-3
                  btn btn-light
                  fs-1
                `);

let rows = $('.row');
rows.addClass('mb-3');

let buttons = $('.btn');
buttons.addClass('btn-outline-primary btn-lg');

let alert = $('#alert-box');

//Player Name Inputs
// let p1Name = $('#p1Name').val();
// let p2Name = $('#p2Name').val();

//Form
let nameForm = $('#name-form');

//Player Buttons
let player1 = $('#Player1');
// let nameOfP1 = player1.text() + ' (X)';
// player1.text(nameOfP1);

let player2 = $('#Player2');
// let nameOfP2 = player2.text() + ' (O)';
// player2.text(nameOfP2);

//Submit Button
let subBtn = $('#submit-btn');


//Error Message
const error = new Error('Please choose a Player')

//Actions
let topLeft = $('#top-left');
let topLText = '';
topLeft.on('click', function() {
    // console.log(`This ${topLeft.text()} is working as a button!!!`);
    
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
        topLText = getText($(this));
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
        topLText = getText($(this));
    }else{

        return alert(error);
    }
})

let topCenter = $('#top-center');
let topCText = '';
topCenter.on('click', function() {
    // console.log(`This ${topCenter.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
        topCText = getText($(this));
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
        topCText = getText($(this));
    }else{
        return alert(error);
    }
})

let topRight = $('#top-right');
let topRText = '';
topRight.on('click', function() {
    // console.log(`This ${topRight.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
        topRText = getText($(this));
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
        topRText = getText($(this));
    }else{
        return alert(error);
    }
})

let middleLeft = $('#middle-left');
let middleLText = '';
middleLeft.on('click', function() {
    // console.log(`This ${middleLeft.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
        middleLText = getText($(this));
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
        middleLText = getText($(this));
    }else{
        return alert(error);
    }
})

let middleCenter = $('#middle-center');
let middleCText = '';
middleCenter.on('click', function() {
    // console.log(`This ${middleCenter.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
        middleCText = getText($(this));
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
        middleCText = getText($(this));
    }else{
        return alert(error);
    }
})

let middleRight = $('#middle-right');
let middleRText = '';
middleRight.on('click', function() {
    // console.log(`This ${middleRight.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
        middleRText = getText($(this));
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
        middleRText = getText($(this));
    }else{
        return alert(error);
    }
})

let bottomLeft = $('#bottom-left');
let bottomLText = '';
bottomLeft.on('click', function() {
    // console.log(`This ${bottomLeft.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
        bottomLText = getText($(this));
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
        bottomLText = getText($(this));
    }else{
        return alert(error);
    }
})

let bottomCenter = $('#bottom-center');
let bottomCtext ='';
bottomCenter.on('click', function() {
    // console.log(`This ${bottomCenter.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
        bottomCtext = getText($(this));
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
        bottomCtext = getText($(this));
    }else{
        return alert(error);
    }
})
let bottomRight = $('#bottom-right');
let bottomRText = '';
bottomRight.on('click', function() {
    // console.log(`This ${bottomRight.text()} is working as a button!!!`);
    if (playerX === true){
        xClick($(this));
        p1Disable();
        p2Enable();
        $(this).off('click');
        bottomRText = getText($(this));
    }else if (playerO === true){
        oClick($(this));
        p2Disable();
        p1Enable();
        $(this).off('click');
        bottomRText = getText($(this));
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

//Submit Button

nameForm.on('submit', function(event) {
    event.preventDefault();
    
    let p1Name = $('#p1Name').val();
    let p2Name = $('#p2Name').val();

    let player1 = $('#Player1');
    let player2 = $('#Player2');
    player1.text(p1Name);
    player2.text(p2Name);
})

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

//Get element text
let getText = function (event) {
    let text = $(event).text();
    let trimmed = text.trim();
    return trimmed;
};

// Tester
let tester = setInterval(function () {
    let topRow = `${topLText}${topCText}${topRText}`;
    let middleRow = `${middleLText}${topCText}${topRText}`;
    let bottomRow = `${bottomLText}${bottomCtext}${bottomRText}`;
    console.log(bottomRow);
    if(topRow === 'XXX' || topRow === "OOO"){
        winnerAlert();
        clearInterval(tester);
    }else if(middleRow === 'XXX' || middleRow === "OOO"){
        winnerAlert();
        clearInterval(tester);
    }else if(bottomRow === 'XXX' || bottomRow === "OOO"){
        winnerAlert();
        clearInterval(tester);
    }
}, 1000);

//Winner Aler
//must make it functional
function winnerAlert () {
    alert.addClass('alert alert-success');
    alert.text('You won Player 1!!!');
    
}