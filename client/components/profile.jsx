import React, { useState, useEffect } from 'react';
//AddGame component will handle the entry form for adding games to the database
import AddGame from './AddGame.jsx';


const Profile = () => {
  //setter function to update the list on the page
  const [gameList, setGameList] = useState([]);
  // const [requestFinished, setRequestFinished] = useState(false);
  
  //drill this down?
  //now I need to make it so that I can retrieve the games from the database and lay them out in the state
  // const newGameList = [];

  useEffect(() =>{
    fetch('/api/profile')
    // .then ((res) => console.log(res))
    .then (data => data.json())
    // .then (data => {console.log(data)})
    .then (data =>{ 
      console.log(data, 'some string also');

     data.forEach((element) => {
      console.log(element.game);
      // newGameList.push(<div>{element.game}</div>);

      setGameList([...gameList, element.game])

      // const newGameList = gameList.push(element.game);
      // setGameList(newGameList);
     })
     console.log(gameList);
    //  setRequestFinished(true);
    })

  }, [])

  // console.log(newGameList);

  // setGameList(newGameList);

  return (
    <>
    <header>
      <h1>
       Nassim, welcome to your profile!
      </h1>
      <h2>
        Game List
      </h2>
      </header>
    <body>
      <AddGame/>
      {
        gameList.length === 0 ? <h3>No Games Yet</h3> : <div>{gameList}</div>
      }


    </body>
    </>
  )
}
  export default Profile;