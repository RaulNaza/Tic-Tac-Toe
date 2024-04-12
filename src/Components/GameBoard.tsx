import X from '../assets/X.png';
import O from '../assets/O.png';

import { useEffect } from 'react';
import { useState } from 'react';
import { Props, ButtonsType } from '../utils/types';

function GameBoard(props: Props) {
    const { display, names } = props;

    const gameboard = document.getElementById('gameboard');

    //this variable accesses all the elements with class icon - which would be the children of any button that has been clicked.
    const iconsOnBoard = document.getElementsByClassName('icon');

    //these variables have been assigned the existing player buttons
    const playerXBtn = document.getElementById('PlayerX');
    const playerOBtn = document.getElementById('PlayerO');

    //states that 
    const [playerXName, setPlayerXName] = useState('');
    const [playerOName, setPlayerOName] = useState('');

    const [currentPlayer, setCurrentPlayer] = useState('');

    //startOptions will be used to set the gamePhase states
    const startOptions = {
        yes: 'Start game',
        no: `Can't start game`,
        empty: 'Empty board',
        end: 'Game Over'
    };

    //this states checks to see what stage in the game we are in.
    const [gamePhase, setGamePhase] = useState(startOptions.empty);

    //the counter state will serve as a way to tell if a draw has happened
    const [counter, setCounter] = useState(0);

    const [result, setResult] = useState('');

    //the buttons object will be used to record the moves already played
    const buttons: ButtonsType = {
        'top-left': '',
        'top-middle': '',
        'top-right': '',
        'center-left': '',
        'center-middle': '',
        'center-right': '',
        'bottom-left': '',
        'bottom-middle': '',
        'bottom-right': ''
    };

    //States which are set as game progresses. These states are used to check winner or if its a draw.
    const [topRow, setTopRow] = useState('');
    const [middleRow, setMiddleRow] = useState('');
    const [bottomRow, setBottomRow] = useState('');
    const [firstCol, setFirstCol] = useState('');
    const [secondCol, setSeconCol] = useState('');
    const [thirdCol, setThirdCol] = useState('');
    const [diagonalOne, setDiagonalOne] = useState('');
    const [diagonalTwo, setDiagonalTwo] = useState('');

    //gets all the buttons within the gameboard that have not been clicked.
    const listOfNotClicked = document.getElementsByClassName('not-clicked');

    //This function will be used to check for the winner or a draw.
    const checkResults = () => {
        //Condtions for a win
        if (topRow.length === 3) {
            switch (topRow) {
                case 'XXX':
                    setResult(`${playerXName}: You Won!`);
                    setGamePhase(startOptions.end);
                    break;
                case 'OOO':
                    setResult(`${playerOName}: You Won!`);
                    setGamePhase(startOptions.end)
                    break;
                default:
                    break;
            }
        };

        if (middleRow.length === 3) {
            switch (middleRow) {
                case 'XXX':
                    setResult(`${playerXName}: You Won!`)
                    setGamePhase(startOptions.end);
                    break;
                case 'OOO':
                    setResult(`${playerOName}: You Won!`)
                    setGamePhase(startOptions.end);
                    break;
                default:
                    break;
            }
        };

        if (bottomRow.length === 3) {
            switch (bottomRow) {
                case 'XXX':
                    setResult(`${playerXName}: You Won!`)
                    setGamePhase(startOptions.end);
                    break;
                case 'OOO':
                    setResult(`${playerOName}: You Won!`)
                    setGamePhase(startOptions.end);
                    break;
                default:
                    break;
            }
        };

        if (firstCol.length === 3) {
            switch (firstCol) {
                case 'XXX':
                    setResult(`${playerXName}: You Won!`)
                    setGamePhase(startOptions.end);
                    break;
                case 'OOO':
                    setResult(`${playerOName}: You Won!`)
                    setGamePhase(startOptions.end);
                    break;
                default:
                    break;
            }
        };

        if (secondCol.length === 3) {
            switch (secondCol) {
                case 'XXX':
                    setResult(`${playerXName}: You Won!`)
                    setGamePhase(startOptions.end);
                    break;
                case 'OOO':
                    setResult(`${playerOName}: You Won!`)
                    setGamePhase(startOptions.end);
                    break;
                default:
                    break;
            }
        };

        if (thirdCol.length === 3) {
            switch (thirdCol) {
                case 'XXX':
                    setResult(`${playerXName}: You Won!`)
                    setGamePhase(startOptions.end);
                    break;
                case 'OOO':
                    setResult(`${playerOName}: You Won!`)
                    setGamePhase(startOptions.end);
                    break;
                default:
                    break;
            }
        };

        if (diagonalOne.length === 3) {
            switch (diagonalOne) {
                case 'XXX':
                    setResult(`${playerXName}: You Won!`)
                    setGamePhase(startOptions.end);
                    break;
                case 'OOO':
                    setResult(`${playerOName}: You Won!`)
                    setGamePhase(startOptions.end);
                    break;
                default:
                    break;
            }
        };

        if (diagonalTwo.length === 3) {
            switch (diagonalTwo) {
                case 'XXX':
                    setResult(`${playerXName}: You Won!`)
                    setGamePhase(startOptions.end);
                    break;
                case 'OOO':
                    setResult(`${playerOName}: You Won!`)
                    setGamePhase(startOptions.end);
                    break;
                default:
                    break;
            }
        };

        //if no winners, its a draw after 9 turns.
        if (counter === 9) {
            setResult(`Draw!`);
            setGamePhase(startOptions.end);
        };

    };

    //this gameOver function will handles what happens when a result has been reached and gamePhase has been set to end ('Game Over')
    const gameOver = () => {
        //converts the HTMLcollection to an array 
        let notClickedBtns = Array.from(listOfNotClicked);

        //maps through the array and sets a disabled attribute so that no addtional moves can be made
        notClickedBtns.map((button): void => {
            button.setAttribute('disabled', '');
        });

        playerXBtn?.setAttribute('disabled', '');
        playerOBtn?.setAttribute('disabled', '');
    };

    useEffect(() => {
        //set player names on start. 
        //Check to see if was passed in from props. If true, access, otherwise pass through default names.
        const pX = names ? names[0] : 'PlayerX';
        const pO = names ? names[1] : 'PlayerO';
        setPlayerXName(pX);
        setPlayerOName(pO);

        //The below if stmnts check if the player buttons exist and set their innerText values to the state of the player names passed through.
        if (playerXBtn && playerOBtn) {
            playerXBtn.innerText = playerXName;
            playerOBtn.innerText = playerOName;
        }

        //set up the alert
        const choosePlayerAlert = document.createElement('span');
        choosePlayerAlert.setAttribute('class', 'alert');
        choosePlayerAlert.setAttribute('id', 'alert-gameboard');
        choosePlayerAlert.textContent = 'Please choose a player first.';
        const getAlert = document.getElementById('alert-gameboard');

        //if gamePhase is set to empty ('Empty board') we must remove the alert. This is needed after the game has been started.
        if (gamePhase === startOptions.empty) {
            getAlert?.remove();
        }

        //if gamePhase is set to no ('Can't start game') we add the choosePlayer alert right before the gameboard.
        if (gamePhase === startOptions.no) {
            gameboard?.before(choosePlayerAlert);
        }

        //if gamePhase is set to yes ('Start game') we can go ahead and remove the alert.
        if (gamePhase === startOptions.yes) {
            getAlert?.remove();
        }

        //the below checks for the value of the currentPlayer state. As long as the value of the state is not empty, it will remove the alert and invoke the checkResults function
        if (currentPlayer !== '') {
            getAlert?.remove();
            checkResults();
        }

        //Test for the current state of gamePhase if it matches end ('Game Over') we need to run the gameOver function.
        if (gamePhase === startOptions.end) {
            gameOver();
        }
    }, [
        buttons,
        checkResults,
        counter,
        currentPlayer,
        gamePhase,
        result,

        topRow,
        middleRow,
        bottomRow,
        firstCol,
        secondCol,
        thirdCol,
        diagonalOne,
        diagonalTwo
    ]);

    //this function will handle what happenes when a player is selected.
    const handlePlayerSelected = (id: string) => {
        switch (id) {
            case 'PlayerX':
                setCurrentPlayer(id);
                playerOBtn?.setAttribute('class', 'btn look-disabled')
                playerXBtn?.setAttribute('class', 'btn');
                break;
            case 'PlayerO':
                setCurrentPlayer(id);
                playerXBtn?.setAttribute('class', 'btn look-disabled')
                playerOBtn?.setAttribute('class', 'btn');
                break;
            default:
                break;
        }
    };

    //handlePlayerMove will take care of what happens when a player makes a move by clicking on a square (button)
    const handlePlayerMove = (id: string, position: string) => {
        if (currentPlayer === '') return setGamePhase(startOptions.no);

        setGamePhase(startOptions.yes);

        setCounter(counter + 1);

        const positionNum = parseInt(position);

        const boxBtn = document.getElementById(id);
        const imageElem = document.createElement('img');

        switch (currentPlayer) {
            case 'PlayerX':
                buttons[id] = 'Clicked';

                imageElem.setAttribute('src', X);
                imageElem.setAttribute('alt', `letter x`);
                imageElem.setAttribute('class', 'icon');
                boxBtn?.appendChild(imageElem)
                boxBtn?.setAttribute('class', 'clicked');
                boxBtn?.setAttribute('disabled', '');

                stateToSet(positionNum, 'X');

                //switch disabled attributes on player buttons
                playerXBtn?.setAttribute('disabled', '');
                playerOBtn?.removeAttribute('disabled');

                //simulate button click
                playerOBtn?.click();
                playerOBtn?.focus();
                break;
            case 'PlayerO':
                buttons[id] = 'Clicked';

                imageElem.setAttribute('src', O);
                imageElem.setAttribute('alt', `letter o`);
                imageElem.setAttribute('class', 'icon');
                boxBtn?.appendChild(imageElem)
                boxBtn?.setAttribute('class', 'clicked');
                boxBtn?.setAttribute('disabled', '');

                stateToSet(positionNum, 'O');

                //switch disabled attributes on player buttons
                playerOBtn?.setAttribute('disabled', '');
                playerXBtn?.removeAttribute('disabled');

                //simulate button click
                playerXBtn?.click();
                playerXBtn?.focus();
                break;
            default:
                break;
        }

    };

    //this function will check to see which states should be set and set them. This will be used to test if anyone has won or if its a draw
    const stateToSet = (position: number, value: string) => {
        switch (position) {
            case 1:
                setTopRow(topRow.concat(value));
                setFirstCol(firstCol.concat(value));
                setDiagonalOne(diagonalOne.concat(value));
                break;
            case 2:
                setTopRow(topRow.concat(value));
                setSeconCol(secondCol.concat(value));
                break;
            case 3:
                setTopRow(topRow.concat(value));
                setThirdCol(thirdCol.concat(value));
                setDiagonalTwo(diagonalTwo.concat(value));
                break;
            case 4:
                setMiddleRow(middleRow.concat(value));
                setFirstCol(firstCol.concat(value));
                break;
            case 5:
                setMiddleRow(middleRow.concat(value));
                setSeconCol(secondCol.concat(value));
                setDiagonalOne(diagonalOne.concat(value));
                setDiagonalTwo(diagonalTwo.concat(value));
                break;
            case 6:
                setMiddleRow(middleRow.concat(value));
                setThirdCol(thirdCol.concat(value));
                break;
            case 7:
                setBottomRow(bottomRow.concat(value));
                setFirstCol(firstCol.concat(value));
                setDiagonalTwo(diagonalTwo.concat(value));
                break;
            case 8:
                setBottomRow(bottomRow.concat(value));
                setSeconCol(secondCol.concat(value));
                break;
            case 9:
                setBottomRow(bottomRow.concat(value));
                setThirdCol(thirdCol.concat(value));
                setDiagonalOne(diagonalOne.concat(value));
                break;
            default:
                break
        }
    };

    //the below function handles the Reset Board button
    const handleReset = () => {
        const buttonsPlayed = Array.from(iconsOnBoard);
        buttonsPlayed.map((button) => {
            button.remove();
        });

        //re-enable all buttons again
        const listOfClickedBtns = document.getElementsByClassName('clicked');
        const clickedBtns = Array.from(listOfClickedBtns);
        clickedBtns.map((button) => {
            button.removeAttribute('disabled');
            button.setAttribute('class', 'not-clicked')
        });

        resetAllStates();

        playerXBtn?.removeAttribute('disabled');
        playerXBtn?.setAttribute('class', 'btn');
        playerOBtn?.removeAttribute('disabled');
        playerOBtn?.setAttribute('class', 'btn');

        const listOfNotClicked = document.getElementsByClassName('not-clicked');
        const notClickedBtns = Array.from(listOfNotClicked);
        notClickedBtns.map((button): void => {
            button.removeAttribute('disabled')
        })
    };

    //the below fuction handles the reset of all states which change as the game progresses
    const resetAllStates = () => {
        setCounter(0);
        setCurrentPlayer('');
        setGamePhase(startOptions.empty);

        setResult('');
        setTopRow('');
        setMiddleRow('');
        setBottomRow('');
        setFirstCol('');
        setSeconCol('');
        setThirdCol('');
        setDiagonalOne('');
        setDiagonalTwo('');
    };

    //handles the New Players button by sending the user back to the Welcome screen
    const handleNewPlayers = () => {
        //need to envoke handleReset and gameOver in order to reset all states and change
        handleReset();
        setGamePhase(startOptions.empty);
        display('Welcome');
    };

    return (
        <>
            <div className='heading'>
                Let's Play!
            </div>
            <div className='body'>
                <div
                    className='sub-heading gameboard'>
                    <button
                        className='btn'
                        id='PlayerX'
                        type='button'
                        onClick={(event) => { handlePlayerSelected(event.currentTarget.id) }}>
                        {playerXName}
                    </button>
                    <button
                        className='btn'
                        id='PlayerO'
                        type='button'
                        onClick={(event) => { handlePlayerSelected(event.currentTarget.id) }}>
                        {playerOName}
                    </button>

                </div>
                <div
                    className='content-container'
                    id='gameboard'>
                    <div
                        className='gameboard-container'
                        id='inner-container-gameboard'>
                        <div className='box'>
                            <button
                                id='top-left'
                                className='not-clicked'
                                value={1}
                                onClick={(event) => handlePlayerMove(event.currentTarget.id, event.currentTarget.value)}
                            >
                            </button>
                        </div>
                        <div className='box'>
                            <button
                                id='top-middle'
                                className='not-clicked'
                                value={2}
                                onClick={(event) => handlePlayerMove(event.currentTarget.id, event.currentTarget.value)}
                            >
                            </button>
                        </div>
                        <div className='box'>
                            <button
                                id='top-right'
                                className='not-clicked'
                                value={3}
                                onClick={(event) => handlePlayerMove(event.currentTarget.id, event.currentTarget.value)}
                            >
                            </button>
                        </div>
                        <div className='box'>
                            <button
                                id='center-left'
                                className='not-clicked'
                                value={4}
                                onClick={(event) => handlePlayerMove(event.currentTarget.id, event.currentTarget.value)}
                            >
                            </button>
                        </div>
                        <div className='box'>
                            <button
                                id='center-middle'
                                className='not-clicked'
                                value={5}
                                onClick={(event) => handlePlayerMove(event.currentTarget.id, event.currentTarget.value)}
                            >
                            </button>
                        </div>
                        <div className='box'>
                            <button
                                id='center-right'
                                className='not-clicked'
                                value={6}
                                onClick={(event) => handlePlayerMove(event.currentTarget.id, event.currentTarget.value)}
                            >
                            </button>
                        </div>
                        <div className='box'>
                            <button
                                id='bottom-left'
                                className='not-clicked'
                                value={7}
                                onClick={(event) => handlePlayerMove(event.currentTarget.id, event.currentTarget.value)}
                            >
                            </button>
                        </div>
                        <div className='box'>
                            <button
                                id='bottom-middle'
                                className='not-clicked'
                                value={8}
                                onClick={(event) => handlePlayerMove(event.currentTarget.id, event.currentTarget.value)}
                            >
                            </button>
                        </div>
                        <div className='box'>
                            <button
                                id='bottom-right'
                                className='not-clicked'
                                value={9}
                                onClick={(event) => handlePlayerMove(event.currentTarget.id, event.currentTarget.value)}
                            >
                            </button>
                        </div>
                    </div>
                    <div
                        className='result-container'
                        id='alert-box'>
                        {result}
                    </div>

                    <div className='decision-buttons-container'>
                        <button
                            className='btn'
                            id='reset-board'
                            type='button'
                            onClick={handleReset}>
                            Reset Board
                        </button>
                        <button
                            className='btn'
                            id='new-players'
                            type='button'
                            onClick={handleNewPlayers}>
                            New Players
                        </button>
                    </div>
                </div>

            </div >

        </>
    )
}

export default GameBoard;