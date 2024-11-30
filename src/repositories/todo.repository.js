import { db } from "../configs/firebase.config.js";

const todoCollection = db.collection("todos");

export const getAll = async () => {
  const snapshot = await todoCollection.get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getById = async (id) => {
  const doc = await todoCollection.doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
};

export const create = async (data) => {
  const ref = await todoCollection.add(data);
  return { id: ref.id, ...data };
};

export const update = async (id, data) => {
  await todoCollection.doc(id).update(data);
};

export const remove = async (id) => {
  await todoCollection.doc(id).delete();
};
