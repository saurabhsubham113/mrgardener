import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const getOneData = async (ref, id) => {
  const dataRef = doc(db, ref, id);

  const res = await getDoc(dataRef);

  return res;
};
