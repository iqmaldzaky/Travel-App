// firebaseActions.js

import { getDatabase, ref, get } from 'firebase/database';

export const fetchBeritaDataFromFirebase = async () => {
  try {
    const db = getDatabase();
    const dataRef = ref(db, 'berita');
    const snapshot = await get(dataRef);

    const data = snapshot.val();

    console.log('Fetched Data:', data); // Log fetched data

    const dataArray = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));

    return dataArray;
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
    throw error;
  }
};
