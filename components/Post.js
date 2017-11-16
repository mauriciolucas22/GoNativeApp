import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Post = ({post}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{post.title}</Text>
    <Text style={styles.autor}>{post.autor}</Text>
    <Text>{post.content}</Text>

  </View>
);

Post.defaultProps = {
  post:
    {
      id: 0,
      title: 'Aprendendo React Native',
      autor: 'Mauricio Lucas',
      content: 'Content Content Content Content Content Content Content Content Content Content Content'
    },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: {x: 0, y: 2},
    shadowOpacity: 100,
    marginTop: 20,
  },
  title: {
    color: '#333333',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE'
  },

  autor: {
    color: '#999999',
  },

  content: {
    color: '#666666',
  }

});


export default Post;
