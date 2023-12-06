import React, {useState, useEffect} from "react";
import { firestore } from "./firebase";
import "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore";

  export default function GasStations() {
    const [gasStations, setGasStations] = useState([]);
   
    async function getGasStations() {
      const ref = query(collection(firestore, "gasStations"));
      const querySnapshot = await getDocs(ref);
      const r =[]

      querySnapshot.forEach((doc) => {
        r.push(doc.data().content);
      });

      setGasStations(gasStations.concat(r));
    }
    

  useEffect(() => {
    getGasStations();
  }, []);

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

