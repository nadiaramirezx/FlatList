import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Lista from "./componente/flatList"


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <Lista/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    padding: 8,
  },
});