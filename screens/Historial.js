import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

const Historial = () => {
  return (
    <SafeAreaView>
      <View  style={[ styles.container]}>
        <Text 
          style={styles.textoTitulo}>Ver Historial</Text>
          <SearchBar
            placeholder="Buscar..." 
            inputStyle = {{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderRadius: 5}}
            inputContainerStyle={{backgroundColor: 'white'}}
            />
        
        <Button title='Fecha' color="#ff5c5c" style={{}}/>
        <Button title='Mejores Donadores' color="#ff5c5c" className=""/>
        <Button title='Peores Donadores' color="#ff5c5c"className=""/>
        <Button title='Carga Ciega' color="#ff5c5c" className=""/>
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:"column",
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  textoTitulo: {
    fontWeight:'bold', 
    fontSize: 20,
    textAlign:"left",
    padding:10,

  }
});

export default Historial;
