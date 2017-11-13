import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';

const Post = ({post}) => (
  <View>
  <Text>{post.title}</Text>
  <Text>{post.description}</Text>
  <Text>{post.content}</Text>
  </View>
);

const styles = StyleSheet.create({

});


export default Post;
