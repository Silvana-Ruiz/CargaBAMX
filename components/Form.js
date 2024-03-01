import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import SelectDropdown from 'react-native-select-dropdown';
import { RadioButton } from 'react-native-paper';
import DropdownComponent from './Dropdown';

const Form = () => {
  const [value, setValue] = React.useState('first');
  const [carga, setCarga] = useState({
    id: 0, // Cómo tener un id único siempre ????
    fechaCarga: new Date(),
    conductor: '',
    donante: '',
    cargaCiega: false,
    tipoCarga: 'Perecedero',
    donativo: '',
    cantidad: '',
    hayDeperdicio: false,
    porcentajeDesperdicio: 0,
    img: '',
  });

  const conductores = ['Conductor 1', 'Conductor 2'];

  const onChangeConductor = (selectedItem, index) => {
    setCarga(carga.conductor = selectedItem);
    console.log(carga);
    console.log(selectedItem, index);
  };

  const onChangeTipoCarga = (selectedItem) => {
    setCarga(carga.tipoCarga = selectedItem);
    console.log(carga);
  };


  return (
    <View>
      <DateTimePicker
        name='fechaCarga'
        value={new Date()}
        mode={'date'}
        disabled={true}
      />

      <SelectDropdown
        data={conductores}
        onSelect={onChangeConductor}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
      {/* 
      <RadioButton
        value="Perecedero"

        onPress={() => setCarga(carga.conductor = 'Perecedero')}
      />
      <RadioButton
        value="No Perecedero"
        status={carga.tipoCarga === 'No Perecedero' ? 'checked' : 'unchecked'}
        onPress={() => setCarga(carga.conductor = 'No Percedero')}
      /> */}


      {/* <RadioButton.Group
        value={''}>
        <RadioButton.Item
          label="First item"
          value="first"
          // status={carga.tipoCarga === 'Perecedero' ? 'checked' : 'unchecked'}
          onPress={() => setCarga(carga.conductor = 'No Percedero')}
          color={'red'}
          uncheckedColor={'pink'}
        />
        <RadioButton.Item
          label="Second item"
          value="second"
          // status={carga.tipoCarga === 'No Perecedero' ? 'checked' : 'unchecked'}
          onPress={() => setCarga(carga.conductor = 'No Percedero')}
        />
      </RadioButton.Group> */}

      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={styles.radioGroup}>
          <Text>First</Text>
          <RadioButton value="first" />
        </View>
        <View style={styles.radioGroup}>
          <Text>Second</Text>
          <RadioButton value="second" />
        </View>
      </RadioButton.Group>

      <DropdownComponent />


    </View>
  );
};

const styles = StyleSheet.create({
  radioGroup: {
    display: 'flex',
    flexDirection: 'row'
  }
});

export default Form;
