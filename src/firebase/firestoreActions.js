import firestore from '@react-native-firebase/firestore';

export const readFirestore = async () => {
  try {
    const tripsData = await firestore().collection('viajes').get();

    console.log('Reading trips...');

    return tripsData.docs;
  } catch (err) {
    console.error('readFirestore error:', err);
  }
};

export const writeFirestore = async tripInfo => {
  try {
    await firestore()
      .collection('viajes')
      .doc(tripInfo.id)
      .set({
        ...tripInfo,
      });
    console.log('Adding new trip...');
  } catch (err) {
    console.error('writeFirestore error:', err);
  }
};

export const delFirestore = async tripId => {
  try {
    await firestore().collection('viajes').doc(tripId).delete();

    console.log('Deleting trip...');
  } catch (err) {
    console.log('delFirestore error:', err);
  }
};

export const updateFireStore = async tripInfo => {
  try {
    await firestore()
      .collection('viajes')
      .doc(tripInfo.id)
      .update(tripInfo)
      .then(() => {
        console.log('Updating user...');
      });
  } catch (err) {
    console.log('delFirestore error:', err);
  }
};
