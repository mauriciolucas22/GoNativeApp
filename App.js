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
  ScrollView,
  View,
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
        content: 'Content',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        autor: 'Mauricio Lucas',
        content: 'Content',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        autor: 'Mauricio Lucas',
        content: 'Content',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>GoNative App</Text>
        </View>
        <ScrollView style={styles.container}>
            {this.state.posts.map(post => <Post key={post.id} post={post} />)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },

  header: {
    height: Platform.OS === 'ios' ? 60 : 40,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#FFFFFF',
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { x: 0, y: 2 },
    shadowOpacity: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerText: {
    fontWeight: 'bold'
  },
});
