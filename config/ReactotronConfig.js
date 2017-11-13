import Reactotron from 'reactotron-react-native';

const tron = Reactotron.configure().useReactNative().connect();


Reactotron.display({
  name: 'GoNavite App',
  preview: 'Aprendendo ReactNative',
  value: 'Jesus te ama!',
  important: true
});

console.tron = tron;
