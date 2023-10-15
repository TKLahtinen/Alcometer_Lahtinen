import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { brightStyle, darkStyle } from './styles/style.js';
import React, { useState } from 'react';
import NumericInput from 'react-native-numeric-input'
import { RadioButton } from 'react-native-paper';

export default function App() {

  const [isDark, setIsDark] = useState(false);
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0);
  

  const selectedStyle = isDark ? darkStyle : brightStyle;

  function calculate() {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = Number(weight.replace(',', '.')) / 10;
    const gramsLeft = grams - (burning * time);
    let result = 0;

    if(weight <= 0) {
      setResult("Please enter positive weight!");
    }
    else if(gender === 'male') {
      result = gramsLeft / (Number(weight.replace(',', '.')) * 0.7);
      setResult(result.toFixed(2));
    }
    else {
      result = gramsLeft / (Number(weight.replace(',', '.')) * 0.6);
      setResult(result.toFixed(2));
    }
    
  }

  function warningText() {
    if(result > 0 && result <= 0.2) {
      return (
        <Text style={{color:'yellow', textAlign:'center'}}>
          You are good to drive, but this is not recommended.
        </Text>
      )
    }
    else if(result > 0.2) {
      return (
        <Text style={{color:'red', textAlign:'center'}}>
          You are not good to drive.
        </Text>
      )
    }
    else {
      return (
        <Text style={{color:'green', textAlign:'center'}}>
          You are sober.
        </Text>
      )
    }

  }

  return (
    <ScrollView style={selectedStyle.container}>
      <View style={selectedStyle.switchContainer}>
        <Switch value={isDark} 
                onChange={() => setIsDark(!isDark)}
                trackColor={ {false : '#5F4A8C', true : '#976DF2'} }
                thumbColor={ isDark ? '#B294F2' : '#B294F2' }
        />
      </View>
      <Text style={selectedStyle.header}>
        Alcometer
      </Text>
      <Text style={selectedStyle.label}>
        Weight
      </Text>
      <TextInput style={selectedStyle.input} 
                  keyboardType="numeric"
                  value={weight}
                  onChangeText={text => setWeight(text)}
      />
      <Text style={selectedStyle.label}>
        Bottles
      </Text>
      <View style={selectedStyle.numInputContainer}>
        <NumericInput 
          value={bottles}
          onChange={value => setBottles(value)}
          minValue={0}
          step={1}
          {...selectedStyle.numInput}
          
        />
      </View>
      <Text style={selectedStyle.label}>
        Time
      </Text>
      <View style={selectedStyle.numInputContainer}>
        <NumericInput
          value={time}
          onChange={value => setTime(value)}
          minValue={0}
          step={1}
          {...selectedStyle.numInput}
        />
      </View>
      <View style={selectedStyle.radioContainer}>
        <RadioButton
        value='male'
        status={ gender === 'male' ? 'checked' : 'unchecked' }
        onPress={() => setGender('male')}
        color={selectedStyle.radioLabel.color}
        />
        <Text style={selectedStyle.radioLabel}>Male</Text>
        <RadioButton
        value='female'
        status={ gender === 'female' ? 'checked' : 'unchecked' }
        onPress={() => setGender('female')}
        color={selectedStyle.radioLabel.color}
        />
        <Text style={selectedStyle.radioLabel}>Female</Text>
      </View>
      <Text style={selectedStyle.result}>
        {result}
      </Text>
      {warningText()}
      <TouchableOpacity 
        style={selectedStyle.button}
        onPress={calculate}
        >
        <Text style={selectedStyle.buttonText}>
          Calculate
        </Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </ScrollView>
    
  );
}

