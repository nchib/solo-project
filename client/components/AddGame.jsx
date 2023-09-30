import React, { useState, useEffect } from 'react';

//this component is to GET all the data and load it on the page. will probably have this as a button

const AddGame = () => {
  //setter function to add games to the database
  const [game, setGame] = useState('');
 
  const handleSubmit = (e) => {
    //on submit, should set the current state of game to whatever was input
  //then should add that game to the array of games, whose state will then be used to render the game list further down.
  e.preventDefault();

    try {
      fetch("/api/profile", {
          headers: {"Content-Type": 'application/json'},
          method: 'POST',
          body: JSON.stringify({game: game})
      })
      .then (data => data.json())
      .then (data => {
          console.log(data);
      })
      // .then (() => {navigate(data.redirect)})
        } catch(error) { console.log(error)};
        setGame('');
    }

    return (
    <form onSubmit={handleSubmit}>
        <label for="Game">Game</label>
        <input value={game} onChange={(e) => 
            setGame(e.target.value)} placeholder="Enter game here" id="game" name="game" />
        <button>Add Game</button>
        </form>
    )


 
}
export default AddGame;