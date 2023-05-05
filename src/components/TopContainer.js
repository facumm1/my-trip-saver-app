import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AddTripButton} from './Buttons/AddTripButton';
import InputTripModal from './Modals/InputTripModal';

export const TopContainer = ({userName}) => {
  const [addTripModal, setAddTripModal] = useState(false);

  return (
    <>
      <View style={{borderWidth: 1}}>
        <Text style={topContainerStyles.appTitle}>Trip Saver</Text>
      </View>

      <View style={{borderWidth: 1, paddingLeft: 20}}>
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          Hola {userName}!
        </Text>
      </View>

      <InputTripModal
        tripModal={addTripModal}
        setTripModal={setAddTripModal}
        title="Añadir un viaje nuevo"
        addTripFirestore
      />

      <AddTripButton setTripModal={setAddTripModal} />
    </>
  );
};

const topContainerStyles = StyleSheet.create({
  appTitle: {
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    color: '#000',
  },
});
