import { db } from "./config";
import { doc, deleteDoc, addDoc, collection } from "firebase/firestore";

export async function write(data) {
  console.log("Saving..", data);

  try {
    const docRef = await addDoc(collection(db, "spending"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function deleteFromDb(id) {
  console.log("The id to delete is:", id);

  await deleteDoc(doc(db, "spending", id));
}
