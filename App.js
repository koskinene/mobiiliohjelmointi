import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [result, setResult] = useState();

  const plus = () => {
    const plusResult = parseInt(number1) + parseInt(number2);
    setResult(plusResult)
  }

  const minus = () => {
    const minusResult = parseInt(number1) - parseInt(number2);
    setResult(minusResult)
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput style={styles.input} inputMode='numeric' onChangeText={number1 => setNumber1(number1)} value={number1} />
      <TextInput style={styles.input} inputMode='numeric' onChangeText={number2 => setNumber2(number2)} value={number2} />
        <View style={styles.buttons}>
          <Button onPress={plus} title="+" />
          <Button onPress={minus} title="-" />
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 100,
    borderColor: 'black',
    borderWidth: 1
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

});
