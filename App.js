import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './components/Tabs';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer style={styles.container}>
      <Tabs />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
