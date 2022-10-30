import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const useData = async (data) => {
  const collectionRef = collection(db, data);
  const collectionSnapshot = await getDocs(collectionRef);
  return collectionSnapshot.docs.map((doc) => {
    return { data: doc.data(), id: doc.id };
  });
};

export default useData;
