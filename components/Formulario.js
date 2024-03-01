import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import DropdownComponent from './Dropdown';
import { RadioButton } from 'react-native-paper';
import Radio from './Radio';

export default function App() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      full_name: '',
      password: '',
      conductor: '',
      tipoCarga: '',
      tipoCarga2: '',
    }
  });

  const dataSelect = [
    { label: 'Conductor 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const dataRadio = [
    { label: 'Perecedero', value: 'perecedero' },
    { label: 'No Perecedero', value: 'no perecedero' },
    { label: 'No Comestible', value: 'no comestible' },
  ];

  const onSubmit = (data) => {

    console.log("Successful", data);
  };

  return (
    <View >
      <Text >Simple Login Form</Text>
      <Controller
        control={control}
        name={'email'}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            placeholder='email'
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name={'full_name'}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            placeholder='full name'
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name={'password'}
        render={({ field: { val, onChange, onBlur } }) => (
          <TextInput
            placeholder='password'
            secureTextEntry
            value={val}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />

      <Controller
        control={control}
        name={'conductor'}
        render={({ field: { value, onChange, onBlur } }) => (
          <DropdownComponent
            data={dataSelect}
            placeholder='Condcutor'
            secureTextEntry
            val={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />

        )}
      />


      <View>
        <Controller
          control={control}
          name={'tipoCarga'}
          render={({ field: { value, onChange, onBlur } }) => (
            <RadioButton.Group onValueChange={onChange} value={value} onBlur={onBlur}>
              <View>
                <Text>First</Text>
                <RadioButton value="first" />
              </View>
              <View>
                <Text>Second</Text>
                <RadioButton value="second" />
              </View>
            </RadioButton.Group>
          )}
        />
      </View>

      <Controller
        control={control}
        name={'tipoCarga2'}
        render={({ field: { value, onChange, onBlur } }) => (
          <Radio
          data={dataRadio}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          />
        )}
      />
      <Button
        title='Submit'
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}
