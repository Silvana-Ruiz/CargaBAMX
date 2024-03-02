import React from 'react';
import { useState } from "react";
import { Button, StyleSheet, Alert, Text, TextInput, View, KeyboardAvoidingView, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Controller, useForm } from 'react-hook-form';

import DropdownComponent from './Dropdown';
import Radio from './Radio';
import DateTimePicker from '@react-native-community/datetimepicker';
import Camera from './Camera';

import * as ImagePicker from "expo-image-picker";

import { uploadToFirebase } from '../firebaseConfig';



export default function App() {
  const [permission, requestPermission] = ImagePicker.useCameraPermissions();
  const [imageUri, setImageUri] = useState('');
  const [fileName, setFileName] = useState('');


  const { control, handleSubmit } = useForm({
    defaultValues: {
      fecha: new Date(),
      conductor: '',
      donante: '',
      cargaCiega: '',
      tipoCarga: '',
      donativo: '',
      cantidadCarga: '',
      hayDesperdicio: false,
      porcentajeDesperdicio: '',
      razonDesperdicio: '',
      uriFoto: ''
    }
  });

  const dataConductor = [
    { label: 'Emilio López', value: 'emilio lópez' },
    { label: 'Juan Perez', value: 'juan perez' },
    { label: 'Liliana Ruiz', value: 'liliana ruiz' },
  ];
  const dataDonante = [
    { label: 'Walmart', value: 'walmart' },
    { label: 'Costco', value: 'cotsco' },
    { label: 'Campo Agrícola Perez', value: 'campo agrícola perez' },
  ];
  const dataDonativo = [
    { label: 'Fruta', value: 'fruta' },
    { label: 'Verdura', value: 'verdura' },
    { label: 'Lácteos', value: 'lácteos' },
    { label: 'Mariscos', value: 'mariscos' },
    { label: 'Carne', value: 'carne' },
  ];
  const dataPorcentajeDesperdicio = [
    { label: '10%', value: '10' },
    { label: '20%', value: '20' },
    { label: '30%', value: '30' },
    { label: '40%', value: '40' },
    { label: '50%', value: '50' },
    { label: '60%', value: '60' },
    { label: '70%', value: '70' },
    { label: '80%', value: '80' },
    { label: '90%', value: '90' },
    { label: '100%', value: '100' },
  ];
  const dataRazonDesperdicio = [
    { label: 'Moho', value: 'moho' },
    { label: 'Empaque roto', value: 'empaque roto' },
    { label: 'Desprende odor', value: 'desprende odor' },
  ];

  const dataBooleanoRadio = [
    { label: 'Sí', value: true },
    { label: 'No', value: false },
  ];
  const dataTipoCarga = [
    { label: 'Perecedero', value: 'perecedero' },
    { label: 'No Perecedero', value: 'no perecedero' },
    { label: 'No Comestible', value: 'no comestible' },
  ];

  const onSubmit = async (data) => {
    // Indicar que el uri de la imagen en el state es el 
    // de la foto que se subirá
    data.uriFoto = imageUri;
    console.log(data);
    try {
      const uploadResp = await uploadToFirebase(imageUri, fileName, (v) =>
        console.log(v)
      );
      console.log(uploadResp);
    } catch (e) {
      Alert.alert("Error" + e.message);
    }
  };
  const allowOnlyNumber = (value) => {
    return value.replace(/[^0-9]/g, '');
  };



  // Verificar si la aplicación tiene acceso a la cámara del celular
  if (permission?.status !== ImagePicker.PermissionStatus.GRANTED) {
    return (
      <View >
        <Text>Permission Not Granted - {permission?.status}</Text>
        <StatusBar style="auto" />
        <Button title="Solicitar permiso" onPress={requestPermission}></Button>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView
          // keyboardVerticalOffset={height + 47}
          behavior="padding"
          // style={{ flex: 1 }}
          enabled
        >
          <Button
            title='Submit'
            onPress={handleSubmit(onSubmit)}
          />
          <View>
            <Text>Fecha</Text>
            <Controller
              control={control}
              name={'fecha'}
              render={({ field: { value, onChange, onBlur } }) => (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={new Date()}
                  mode={'date'}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </View>

          <View>
            <Text>Hora</Text>
            <Controller
              control={control}
              name={'hora'}
              render={({ field: { value, onChange, onBlur } }) => (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={new Date()}
                  mode={'time'}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </View>
          <View>
            <Text>Conductor</Text>
            <Controller
              control={control}
              name={'conductor'}
              render={({ field: { value, onChange, onBlur } }) => (
                <DropdownComponent
                  data={dataConductor}
                  placeholder='Conductor'
                  secureTextEntry
                  val={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </View>

          <View>
            <Text>Donante</Text>
            <Controller
              control={control}
              name={'donante'}
              render={({ field: { value, onChange, onBlur } }) => (
                <DropdownComponent
                  data={dataDonante}
                  placeholder='Donante'
                  secureTextEntry
                  val={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </View>

          <View>
            <Text>¿Carga Ciega?</Text>
            <Controller
              control={control}
              name={'cargaCiega'}
              render={({ field: { value, onChange, onBlur } }) => (
                <Radio
                  data={dataBooleanoRadio}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </View>
          <View>
            <Text>Tipo de Carga</Text>
            <Controller
              control={control}
              name={'tipoCarga'}
              render={({ field: { value, onChange, onBlur } }) => (
                <Radio
                  data={dataTipoCarga}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </View>

          <View>
            <Text>Donativo</Text>
            <Controller
              control={control}
              name={'donativo'}
              render={({ field: { value, onChange, onBlur } }) => (
                <DropdownComponent
                  data={dataDonativo}
                  placeholder='Donativo'
                  secureTextEntry
                  val={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </View>
          <View>
            <Text>Cantidad Carga</Text>
            <Controller
              control={control}
              name={'cantidadCarga'}
              render={({ field: { value, onChange, onBlur } }) => (
                <TextInput
                  placeholder='Cantidad carga'
                  value={value}
                  onChangeText={(text) => onChange(allowOnlyNumber(text))}
                  onBlur={onBlur}
                  style={{ paddingBottom: 100 }}
                />
              )}
            />
          </View>
          <View>
            <Text>¿Hay Desperdicio?</Text>
            <Controller
              control={control}
              name={'hayDesperdicio'}
              render={({ field: { value, onChange, onBlur } }) => (
                <Radio
                  data={dataBooleanoRadio}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </View>
          <View>
            <Text>Porcentaje Desperdicio</Text>
            <Controller
              control={control}
              name={'porcentajeDesperdicio'}
              render={({ field: { value, onChange, onBlur } }) => (
                <DropdownComponent
                  data={dataPorcentajeDesperdicio}
                  placeholder='Porcentaje Desperdicio'
                  secureTextEntry
                  val={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </View>

          <View>
            <Text>Razón Desperdicio</Text>
            <Controller
              control={control}
              name={'razonDesperdicio'}
              render={({ field: { value, onChange, onBlur } }) => (
                <DropdownComponent
                  data={dataRazonDesperdicio}
                  placeholder='Razón Desperdicio'
                  secureTextEntry
                  val={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                />
              )}
            />
          </View>

          <Camera
            setImageUri={setImageUri}
            setFileName={setFileName}
          />

        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView >
  );
}