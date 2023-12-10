import React, {useState, useEffect} from "react";
import './App.css';
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
    <div className="gas-stations-container">
      <h1>Gas Stations</h1>
      {gasStations.map((gasStation) => (
        <div className="gas-station-card" key={gasStation.id}>
          <h2>{gasStation.Name}</h2>
          <p>{gasStation.Address}</p>
          <p>{gasStation.Distance}</p>
          <p className="price">{gasStation.Price}</p>
        </div>
      ))}
    </div>
  );
}

// const styles = StyleSheet.create({
//   container: {
//    paddingTop: 50
//   },
//   itemName: {
//     padding: 10,
//     fontSize: 20,
//     height: 40,
//   },
//   item: {
//     padding: 10,
//     fontSize: 24,
//     height: 40,
//   },
//   border: {
//     borderWidth: 1,
//     borderColor: "gray",
//   }
// }); 

