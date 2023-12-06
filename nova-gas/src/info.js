import React, {useState, useEffect} from "react";
import firebase from "./firebase";

  function GasStations() {
  const [gasStations, setGasStations] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("gasStations");

  function getGasStations() {
    setLoading(true)
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({id: doc.id, ...doc.data() });
      });
      setGasStations(items);
      setLoading(false);
    }
    )
  }

  useEffect(() => {
    getGasStations();
  }, []);

  if (loading) {
    return <h1>Loading/...</h1>
  }
  return (
    <div>
      <h1>Gas Stations</h1>
        {gasStations.map((gasStation) =>  (
          <div key={gasStation.id}>
            <h2>{gasStation.name}</h2>
            <p>{gasStation.address}</p>
            <p>{gasStation.distance}</p>
            <p>{gasStation.price}</p>
          </div>
        )
        )}
    </div>
  );
}

export default GasStations;