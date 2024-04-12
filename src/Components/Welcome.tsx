import { MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { Props } from '../utils/types';

function Welcome(props: Props) {

    const { display } = props;

    //the below two states will be used to set the player names given by the user
    const [playerXName, setPlayerXName] = useState('');
    const [playerOName, setPlayerOName] = useState('');

    //emptyPlayer dictates if a name was given by the user of it should remain empty (false)
    const [emptyPlayer, setEmptyPlayer] = useState(false);

    const submitBtn = document.getElementById('submit-btn');

    //listens to see if the Enter key has been pressed.
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') submitBtn?.click();
    });

    //the submitPlayerNames functin will handle what happens when the Start Game button is clicked
    const submitPlayerNames = (event: MouseEvent) => {
        event.preventDefault();

        if (playerXName.match(/^\s*$/) || playerOName.match(/^\s*$/)) return setEmptyPlayer(true);

        //display function is invoked and 2 arguments are passed through
        display('Game', [playerXName, playerOName]);

        // Clear out inputs on submit
        setPlayerXName('');
        setPlayerOName('');
        if (emptyPlayer) setEmptyPlayer(false);
    }

    useEffect(() => {
        //checks that emptyPlayer is true. If it is, the alert element will be  created and displayed for 5 seconds.
        if (emptyPlayer) {
            const alert = document.createElement('span');
            alert.setAttribute('class', 'alert');
            alert.textContent = 'Please provide player names';
            submitBtn?.before(alert);
            setTimeout(() => {
                alert.remove();
                setEmptyPlayer(false);
            }, 5000)
        }

    }, [emptyPlayer])

    return (
        <>
            <div className='heading'>
                Welcome to Tic-Tac-Toe
            </div>
            <div className='body'>
                <div className='sub-heading'>
                    Choose your player names:
                </div>
                <div className='content-container'>
                    <form
                        className='form-players'
                        id='name-form'>
                        <div className='label-players'>
                            <label htmlFor='playerX'>Player X</label>
                            <input
                                type='text'
                                id='playerX'
                                maxLength={20}
                                value={playerXName}
                                onChange={(event) => setPlayerXName(event.target.value)}
                                required />
                        </div>
                        <div className='label-players'>
                            <label htmlFor='playerO'>Player O</label>
                            <input
                                type='text'
                                id='playerO'
                                maxLength={20}
                                value={playerOName}
                                onChange={(event) => setPlayerOName(event.target.value)}
                                required />
                        </div>
                        <button
                            type='button'
                            id='submit-btn'
                            onClick={submitPlayerNames}
                        >
                            Start Game
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Welcome;