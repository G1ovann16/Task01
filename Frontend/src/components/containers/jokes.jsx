import React, { useState } from "react";

const Jokes = () => {
//   const [index, setIndex] = useState(0);
//   let min = 1;
//   let max = 410;
//   setIndex(random(min, max));
const [showJoke, setShowJoke] = useState(false)
  const jokeList = [
    {
      id: 389,
      type: "general",
      setup: "What do you call a bee that can't make up its mind?",
      punchline: "A maybe.",
    },
    {
      id: 390,
      type: "general",
      setup: "Why was Cinderalla thrown out of the football team?",
      punchline: "Because she ran away from the ball.",
    },
  ];
//   function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
  console.log(jokeList,showJoke);
  // function makeGetRequest(path) {
  //     axios.get(path).then(
  //         (response) => {
  //             var result = response.data;
  //             console.log(result);
  //         },
  //         (error) => {
  //             console.log(error);
  //         }
  //     );
  // }
  // makeGetRequest('https://github.com/15Dkatz/official_joke_api/blob/master/jokes/index.json');

  function onVisible(){
     setShowJoke(!showJoke)
  }
const show = {
    visibility:'visible'
}
const hide ={
    visibility:'hidden'
}

  return (
    <div>
      <h2>{jokeList[0].id}</h2>
      <h3>{jokeList[0].type}</h3>
      <h4 onClick={onVisible}>{jokeList[0].setup}</h4>
      <h4 style={showJoke ? show : hide }>{jokeList[0].punchline}</h4>
    </div>
  );
};

export default Jokes;
