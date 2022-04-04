import React, {
  useState,
  useEffect
} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function GitHubUser({ login }) {
  const [ data, setData ] = useState(null);
  useEffect(()=> {
    fetch(`https://api.github.com/users/${login}`)
      .then(res => res.json())
      .then(setData)
      .catch(console.log.error);
  }, []);

  if(data) {
    return (
      <div>
        <h1>
          { data.login }
        </h1>
        <img src = { data.avatar_url } alt = "user avatar" width = { 100 } />
      </div>
    )
  }
  return null;
}

function App() {
  return <GitHubUser login="yq4103"/>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
