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
        description: 'Descrição 1',
        content: 'Content'
      },
    ],
  };

  render() {
    return (
      <ScrollView style={styles.conteiner}>
          {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
