import { useState, useEffect } from 'react'
import './App.css'
import PlayerCard from './components/player-card'
import NavBar from './components/nav-bar'

import { db } from '../firebase'; // Adjust path if needed
import { collection, getDocs } from 'firebase/firestore';


function App() {
  const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db, "Spillere"));
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        items.sort((a,b) => b.netto - a.netto);
        setData(items);
        };
        fetchData();
    }, []);

  return (
    <>
      <NavBar />
      {data.map((Spiller, index) => (
        <PlayerCard position={index + 1} name={Spiller.navn} netto={Spiller.netto} />
      ))}
    </>
  )
}

export default App
