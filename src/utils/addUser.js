import {
  collection,
  addDoc,
  where,
  query,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const addUser = async (data) => {
  let user = null;
  const userRef = collection(db, "user");

  const q = query(userRef, where("email", "==", data.user.email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((docSnap) => {
    user = { id: docSnap.id, ...docSnap.data() };
  });
  console.log(user);
  if (user?.id) {
    const oneUserRef = doc(db, "user", user.id);
    return await updateDoc(oneUserRef, {
      ...data.user,
      paymentInfo: [
        ...user.paymentInfo,
        {
          amount: data.amount,
          product: data.item,
          createdAt: new Date().toLocaleString(),
          ...data.response,
        },
      ],
    });
  }

  return await addDoc(userRef, {
    ...data.user,
    paymentInfo: [
      {
        amount: data.amount,
        product: data.item,
        createdAt: new Date().toLocaleString(),
        ...data.response,
      },
    ],
  });
};
