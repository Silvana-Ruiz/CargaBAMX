import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

const Historial = () => {
  return (
    <SafeAreaView>
      <View style={viewStyle.content}>
        <SearchBar
          placeholder="Buscar..." 
          inputStyle = {{backgroundColor: 'white'}}
          containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
          inputContainerStyle={{backgroundColor: 'white'}}
          />

        
        <Button title='Fecha' color="#ff5c5c" style={viewStyle.buttonStyle}/>
        <Button title='Mejores Donadores' color="#ff5c5c" style={viewStyle.buttonStyle}/>
        <Button title='Peores Donadores' color="#ff5c5c" style={viewStyle.buttonStyle}/>
        <Button title='Carga Ciega' color="#ff5c5c" style={viewStyle.buttonStyle}/>
      </View>
    </SafeAreaView>
  );
};

const viewStyle = StyleSheet.create({
  content: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonStyle:{
    borderRadius:'10',
    padding: 'auto',
    height: 50,
    width:200
  }
})

export default Historial;
