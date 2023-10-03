//JQuery assignment
let gameBoard = $('#gameboard');

let resetBtn = $('#reset-board');

let newPlayers = $('#new-players')

let columns = $('.col');
columns.addClass(`border border-black border-2 border-opacity-50 p-5 m-3
                  btn btn-light
                  fs-1
                  bg-dark-subtle
                `);

let rows = $('.row');
rows.addClass('mb-3');

let buttons = $('.btn');
buttons.addClass('btn-outline-primary btn-lg mb-3');

let alertBox = $('#alert-box');

//Player Buttons
let player1 = $('#Player1');
let player2 = $('#Player2');

//Error Message
const noPlayerSelected = new Error('Please choose a Player');
const noNameEntered = new Error('No name entered.');

//Actions
let topLeft = $('#top-left');
let topLText = '';
topLeft.on('click', function() {
    if (playerX === true){
        xClick($(this));
        topLText = "X"
        p2Click();
        p1Disable();
        p2Enable();
        $(this).off('click');
        postToBoardElements(topLText);
    }else if (playerO === true){
        oClick($(this));
        topLText = "O"
        p1Click();
        p2Disable();
        p1Enable();
        $(this).off('click');
        postToBoardElements(topLText);
    }else{
        return alert(noPlayerSelected);
    }
});

let topCenter = $('#top-center');
let topCText = '';
topCenter.on('click', function() {
    if (playerX === true){
        xClick($(this));
        topCText = "X";
        p2Click();
        p1Disable();
        p2Enable();
        $(this).off('click');
        postToBoardElements(topCText);
    }else if (playerO === true){
        oClick($(this));
        topCText = "O";
        p1Click()
        p2Disable();
        p1Enable();
        $(this).off('click');
        postToBoardElements(topCText);
    }else{
        return alert(noPlayerSelected);
    }
});

let topRight = $('#top-right');
let topRText = '';
topRight.on('click', function() {
    if (playerX === true){
        xClick($(this));
        topRText = "X";
        p2Click();
        p1Disable();
        p2Enable();
        $(this).off('click');
        postToBoardElements(topRText);
    }else if (playerO === true){
        oClick($(this));
        topRText = "O";
        p1Click();
        p2Disable();
        p1Enable();
        $(this).off('click');
        postToBoardElements(topRText);
    }else{
        return alert(noPlayerSelected);
    }
});

let middleLeft = $('#middle-left');
let middleLText = '';
middleLeft.on('click', function() {
    if (playerX === true){
        xClick($(this));
        middleLText = "X";
        p2Click();
        p1Disable();
        p2Enable();
        $(this).off('click');
        postToBoardElements(middleLText);
    }else if (playerO === true){
        oClick($(this));
        middleLText = "O";
        p1Click();
        p2Disable();
        p1Enable();
        $(this).off('click');
        postToBoardElements(middleLText);
    }else{
        return alert(noPlayerSelected);
    }
});

let middleCenter = $('#middle-center');
let middleCText = '';
middleCenter.on('click', function() {
    if (playerX === true){
        xClick($(this));
        middleCText = "X";
        p2Click();
        p1Disable();
        p2Enable();
        $(this).off('click');
        postToBoardElements(middleCText);
    }else if (playerO === true){
        oClick($(this));
        middleCText = "O";
        p1Click();
        p2Disable();
        p1Enable();
        $(this).off('click');
        postToBoardElements(middleCText);
    }else{
        return alert(noPlayerSelected);
    }
});

let middleRight = $('#middle-right');
let middleRText = '';
middleRight.on('click', function() {
    if (playerX === true){
        xClick($(this));
        middleRText = 'X';
        p2Click();
        p1Disable();
        p2Enable();
        $(this).off('click');
        postToBoardElements(middleRText);
    }else if (playerO === true){
        oClick($(this));
        middleRText = "O";
        p1Click();
        p2Disable();
        p1Enable();
        $(this).off('click');
        postToBoardElements(middleRText);
    }else{
        return alert(noPlayerSelected);
    }
});

let bottomLeft = $('#bottom-left');
let bottomLText = '';
bottomLeft.on('click', function() {
    if (playerX === true){
        xClick($(this));
        bottomLText = "X";
        p2Click();
        p1Disable();
        p2Enable();
        $(this).off('click');
        postToBoardElements(bottomLText);
    }else if (playerO === true){
        oClick($(this));
        bottomLText = "O";
        p1Click();
        p2Disable();
        p1Enable();
        $(this).off('click');
        postToBoardElements(bottomLText);
    }else{
        return alert(noPlayerSelected);
    }
});

let bottomCenter = $('#bottom-center');
let bottomCtext ='';
bottomCenter.on('click', function() {
    if (playerX === true){
        xClick($(this));
        bottomCtext = "X";
        p2Click();
        p1Disable();
        p2Enable();
        $(this).off('click');
        postToBoardElements(bottomCtext);
    }else if (playerO === true){
        oClick($(this));
        bottomCtext = "O";
        p1Click();
        p2Disable();
        p1Enable();
        $(this).off('click');
        postToBoardElements(bottomCtext);
    }else{
        return alert(noPlayerSelected);
    }
});

let bottomRight = $('#bottom-right');
let bottomRText = '';
bottomRight.on('click', function() {
    if (playerX === true){
        xClick($(this));
        bottomRText = "X";
        p2Click();
        p1Disable();
        p2Enable();
        $(this).off('click');
        postToBoardElements(bottomRText);
    }else if (playerO === true){
        oClick($(this));
        bottomRText = "O";
        p1Click();
        p2Disable();
        p1Enable();
        $(this).off('click');
        postToBoardElements(bottomRText);
    }else{
        return alert(noPlayerSelected);
    }
});

//Player Assignment
let playerX = null;
let playerO = null;

//player1 will be assigned to playerX and change its value to true
player1.on('click', p1Click);
function p1Click (){
    p2Disable();
    playerX = true;
    playerO = false;
};

//player2 will be assigned to playerO and change its value to true;
player2.on('click', p2Click);
function p2Click (){
    p1Disable();
    playerX = false;
    playerO = true;
};

//Click Events
let xClick = function (element) {
    $(element).css(`background-image`,`url('Images/X_Clipart.png')`);
    $(element).css(`background-size`,`30%`);
    $(element).css(`background-repeat`,`no-repeat`);
    $(element).css(`background-position`,`center`);
};

let oClick = function (element) {
    $(element).css(`background-image`,`url('Images/O_Clipart.png')`);
    $(element).css(`background-size`,`30%`);
    $(element).css(`background-repeat`,`no-repeat`);
    $(element).css(`background-position`,`center`);
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

// Tester
let tester = setInterval(function () {
    //Rows, columns, diagonals
    let topRow = `${topLText}${topCText}${topRText}`;
    let middleRow = `${middleLText}${topCText}${topRText}`;
    let bottomRow = `${bottomLText}${bottomCtext}${bottomRText}`;
    let firstCol = `${topLText}${middleLText}${bottomLText}`;
    let secondCol = `${topCText}${middleCText}${bottomCtext}`;
    let thirdCol = `${topRText}${middleRText}${bottomRText}`;
    let leftDiagonal = `${topLText}${middleCText}${bottomRText}`;
    let rightDiagonal = `${topRText}${middleCText}${bottomLText}`;
    
    //Condtions for a win
    if(topRow === 'XXX' || topRow === "OOO"){
        winnerAlert(topRow);
        clearInterval(tester);
    }else if(middleRow === 'XXX' || middleRow === "OOO"){
        winnerAlert(middleRow);
        clearInterval(tester);
    }else if(bottomRow === 'XXX' || bottomRow === "OOO"){
        winnerAlert(bottomRow);
        clearInterval(tester);
    }else if(firstCol === 'XXX' || firstCol === "OOO"){
        winnerAlert(firstCol);
        clearInterval(tester);
    }else if(secondCol === 'XXX' || secondCol === "OOO"){
        winnerAlert(secondCol);
        clearInterval(tester);
    }else if(thirdCol === 'XXX' || thirdCol === "OOO"){
        winnerAlert(thirdCol);
        clearInterval(tester);
    }else if(leftDiagonal === 'XXX' || leftDiagonal === "OOO"){
        winnerAlert(leftDiagonal);
        clearInterval(tester);
    }else if(rightDiagonal === 'XXX' || rightDiagonal === "OOO"){
        winnerAlert(rightDiagonal);
        clearInterval(tester);
    }else if (boardElements.length === 9){
        drawAlert();
        clearInterval(tester);
    }
}, 500);

//Winner Alert
function winnerAlert (winner) {
    if (winner === "XXX"){
        gameBoard.hide();
        p1Disable();
        p2Disable();
        alertBox.addClass('alert alert-success');
        alertBox.text(`You won ${player1.text()}!!!`);
    }else if(winner === "OOO"){
        gameBoard.hide();
        p1Disable();
        p2Disable();
        alertBox.addClass('alert alert-success');
        alertBox.text(`You won ${player2.text()}!!!`);
    }
};

//Draw Alert
function drawAlert() {
    gameBoard.hide();
    p1Disable();
    p2Disable();
    alertBox.addClass('alert alert-success');
    alertBox.text(`It's a draw!!!`);
}

//Conditions for a DRAW
let boardElements = '';

function postToBoardElements (element){
    boardElements += element;
};

//Restart Game
//start a new game between same players or new players

//same players would only reset the board
resetBtn.on('click', function () {
    location.reload();
})

//new players would go back to welcome.html and ask for player names
newPlayers.on('click', function() {
    location.replace('welcome.html');
})

//Welcome Page

//Submit Button
let subBtn = $('#submit-btn');

subBtn.on('click', function(event) {
    event.preventDefault();

    //Player Name Inputs
    let nameOfP1 = `${$('#p1Name').val()}`;
    let nameOfP2 = `${$('#p2Name').val()}`;

    //check for empty inputs
    if(nameOfP1 === '' || nameOfP2 === ''){
        alert(noNameEntered);
    }else{
        saveValues(nameOfP1,nameOfP2);
    
        //Load game page
        location.replace('index.html');
    }
});

//Local Storage

let saveValues = function(val1,val2){
    localStorage.setItem('firstPlayer', val1);
    localStorage.setItem('secondPlayer', val2);
}

let getValues = function(){
    let valP1 = localStorage.getItem('firstPlayer');
    let valP2 = localStorage.getItem('secondPlayer');
    changeNames(valP1, valP2)
}

//Change Player Names
function changeNames(name1,name2){
    player1.text(name1);
    player2.text(name2);
}
