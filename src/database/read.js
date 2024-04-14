import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export async function load() {
  try {
    const querySnapshot = await getDocs(collection(db, "spending"));

    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id,
      });
      return data;
    });

    return data;
  } catch (error) {
    console.warn(error);
    throw new Error("You suck");
  }
}
