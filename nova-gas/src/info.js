import React, {useState, useEffect} from "react";
import { firestore } from "./firebase";
import "firebase/firestore";
import { collection, getDocs, query } from "firebase/firestore";

  export default function GasStations() {
    const [gasStations, setGasStations] = useState([]);
   
    async function getGasStations() {
      const ref = query(collection(firestore, "gasStations"));
      const querySnapshot = await getDocs(ref);
      const r =[]

      querySnapshot.forEach((doc) => {
        r.push({ id: doc.id, ...doc.data() });
      });

      setGasStations(gasStations.concat(r));
    }
    

  useEffect(() => {
    getGasStations();
  }, []);

  return (
    <div>
      <h1>Gas Stations</h1>
        {gasStations.map((gasStations) =>  (
          <div key={gasStations.id}>
            <h2>{gasStations.Name}</h2>
            <p>{gasStations.Address}</p>
            <p>{gasStations.Distance}</p>
            <p>{gasStations.Price}</p>
          </div>
        )
        )}
    </div>
  );
}

