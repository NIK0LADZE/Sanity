import { useEffect, useState } from 'react';
import sanityClient from "./client";
import './App.css';

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "pet"]{
          _id,
          name,
        }`
      )
      .then((data) => setPets(data))
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      {pets.map(({ _id, name }) => {
        return <h1 key={_id}>{name}</h1>
      })}
    </div>
  );
}

export default App;
