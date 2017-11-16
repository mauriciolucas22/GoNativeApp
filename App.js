/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import './config/ReactotronConfig'; // Reactotron
import Post from './components/Post';


console.tron.log('Jesus te ama');

export default class App extends Component<{}> {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        autor: 'Mauricio Lucas',
        content: 'Content'
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        autor: 'Mauricio Lucas',
        content: 'Content'
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        autor: 'Mauricio Lucas',
        content: 'Content'
      },
    ],
  };

  render() {
    return (
      <ScrollView style={styles.container}>
          <Text style={styles.header}>GoNative App</Text>
          {this.state.posts.map(post => <Post key={post.id} post={post} />)}
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
    padding: 40,


  },

  header: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    color: '#333333',
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: {x: 0, y: 2},
    shadowOpacity: 100
  }
});
