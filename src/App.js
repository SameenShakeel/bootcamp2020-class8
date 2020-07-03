import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [repos, setRepos] = useState([{}]);

  useEffect( () => {

    async function getRepos() {
      const response = await fetch("https://api.github.com/users/sameenshakeel/repos")
      const data = await response.json();
      console.log(data);
      setRepos(data)
    }
    getRepos();

  },[])

  return (
    <div className="App">
      <h1>You are seeing all repositories</h1>
      <ul>
        {repos.map((repoObj, ind) => {
          return (<li key={ind}>{repoObj.name}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
