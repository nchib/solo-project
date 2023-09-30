import React, { useState, useEffect } from 'react';

const newGameList =[];

const GetGames = ( {setRequestFinished} ) =>{
    // const [gameList, setGameList] = useState([]);


    useEffect(() =>{
        fetch('/api/profile')
        // .then ((res) => console.log(res))
        .then (data => data.json())
        // .then (data => {console.log(data)})
        .then (data =>{ 
          console.log(data, 'some string also');
    
         data.forEach((element) => {
          console.log(element.game);
          newGameList.push(<div>{element.game}</div>);
    
        //   setGameList([...gameList, element.game])
    
          // const newGameList = gameList.push(element.game);
          // setGameList(newGameList);
         })
        //  console.log(gameList);
         setRequestFinished(true);
        })
    
      }, [])

      return (
        newGameList
      )

}

export default GetGames;