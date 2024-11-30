import { db } from "../configs/firebase.config.js";

const userCollection = db.collection("users");

export const createUser = async (email, hashedPassword) => {
  await userCollection.doc(email).set({ password: hashedPassword });
};

export const findByEmail = async (email) => {
  const doc = await userCollection.doc(email).get();
  return doc.exists ? { email: doc.id, ...doc.data() } : null;
};
