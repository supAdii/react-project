import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";
import { doc, updateDoc } from "firebase/firestore";


// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

export async function write(data) {
  console.log("Saving..", data);

  try {
    const docRef = await addDoc(collection(db, "spending"), data);
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function update(id, data){

  const docRef = doc(db, "spending", id);
  
  await updateDoc(docRef, data);
  }
