import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";
import { doc, updateDoc } from "firebase/firestore";

export async function write(data) {
  console.log("Saving..", data);

  try {
    const docRef = await addDoc(collection(db, "spending"), data);
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function update(id, data) {
  try {
    const docRef = doc(db, "spending", id);

    await updateDoc(docRef, data);
    console.log("This is the id that should be updated:", id);
    console.log("This is what should be updated", data);
  } catch {
    throw new Error("Something went wrong.");
  }
}
