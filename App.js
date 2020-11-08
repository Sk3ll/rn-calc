/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const App: () => React$Node = () => {
  const [result, setResult] = useState(0);
  const [operatiom, setOperation] = useState(0);
  const [symb, setSymb] = useState();
  const [memory, setMemory] = useState(0);

  const equal = () => {
    if (symb === '+'){
      setResult(+operatiom + +result);
    } else if (symb === '-') {
      setResult(+operatiom - +result);
    } else if (symb === '/') {
      setResult(+operatiom / +result);
    } else if (symb === '*') {
      setResult(+operatiom * +result);
    } else { return}
  }



  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.body}>
          <View style={styles.resultContainer}>
            <Text style={styles.textResult}>{result}</Text>
          </View>
          <View style={styles.inputsContainer}>
            <TouchableOpacity onPress={()=> {setResult(0)}}>
              <Text style={[styles.btn, styles.grey]}>AC</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {
              if ( result > 0) {
                setResult(-result);
              } else if (result < 0) {
                setResult(-result);
              } else if (result === '-0'){
                setResult(0);
              } else { 
                setResult('-' + result);
              }
            }}>
              <Text style={[styles.btn, styles.grey]}>&#8314;&#8725;&#8331;</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {setResult(result/100)}}>
              <Text style={[styles.btn, styles.grey]}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {
              setSymb('/');
              setOperation(result);
              setResult(0);
            }}>
              <Text style={styles.btn}>&#247;</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputsContainer}>
            <TouchableOpacity onPress={()=> {
              setMemory(0);
              setResult(0)
            }}>
              <Text style={[styles.btn, styles.darkGrey]}>mc</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {setResult(memory)}}>
              <Text style={[styles.btn, styles.darkGrey]}>mr</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {setMemory(memory - result)}}>
              <Text style={[styles.btn, styles.darkGrey]}>m-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {setMemory(memory + result)}}>
              <Text style={[styles.btn, styles.mplus]}>m+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputsContainer}>
            <TouchableOpacity onPress={()=> {setResult(+(result+'7'))}}>
              <Text style={[styles.btn, styles.darkGrey]}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {setResult(+(result+'8'))}}>
              <Text style={[styles.btn, styles.darkGrey]}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {setResult(+(result+'9'))}}>
              <Text style={[styles.btn, styles.darkGrey]}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {
              setSymb('*');
              setOperation(result);
              setResult(0);
            }}>
              <Text style={styles.btn}>&#215;</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputsContainer}>
            <TouchableOpacity onPress={()=> {setResult(+(result+'4'))}}>
              <Text style={[styles.btn, styles.darkGrey]}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {setResult(+(result+'5'))}}>
              <Text style={[styles.btn, styles.darkGrey]}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {setResult(+(result+'6'))}}>
              <Text style={[styles.btn, styles.darkGrey]}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {
              setSymb('-');
              setOperation(result);
              setResult(0);
            }}>
              <Text style={styles.btn}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputsContainer}>
            <TouchableOpacity onPress={()=> {setResult(+(result+'1'))}}>
              <Text style={[styles.btn, styles.darkGrey]}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {setResult(+(result+'2'))}}>
              <Text style={[styles.btn, styles.darkGrey]}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {setResult(+(result+'3'))}}>
              <Text style={[styles.btn, styles.darkGrey]}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {
              setSymb('+');
              setOperation(result);
              setResult(0);
            }}>
              <Text style={styles.btn}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputsContainer}>
            <TouchableOpacity onPress={()=> {setResult(+(result+'0'))}}>
              <Text style={[styles.btn, styles.darkGrey, styles.zero]}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {setResult(result+'.')}}>
              <Text style={[styles.btn, styles.darkGrey]}>,</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {equal()}}>
              <Text style={styles.btn}>=</Text>
            </TouchableOpacity>

          </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.black,
    flex: 1
  },
  resultContainer: {
    backgroundColor: Colors.black,
  },
  inputsContainer: {
    backgroundColor: Colors.black,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: `#ff9b0a`,
    fontSize: 45,
    width: 100,
    height: 100,
    borderWidth: 5,
    borderRadius: 50,
    textAlign: 'center',
    padding: 15,
    color: 'white',
    overflow: 'hidden'
  },
  zero: {
    width: 200
  },
  mplus: {
    fontSize: 35,
    padding: 22,
  },
  grey: {
    backgroundColor: `#a5a5a5`,
    fontSize: 35,
    padding: 22,
  },
  darkGrey: {
    backgroundColor: `#333333`,
    fontSize: 35,
    padding: 22,
  },
  textResult: {
    color: Colors.white,
    fontSize: 100,
    padding: 40,
    textAlign: 'right',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
