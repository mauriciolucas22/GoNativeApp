import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const Post = ({ post }) => (
  <View style={styles.container}>
    <View style={styles.postHeader}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.autor}>{post.autor}</Text>
    </View>
    <Text>{post.content}</Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    autor: PropTypes.string,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: { x: 0, y: 2 },
    shadowOpacity: 100,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5,
  },

  postHeader: {
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },

  title: {
    color: '#333333',
    fontSize: 16,
    fontWeight: 'bold',
  },

  autor: {
    color: '#999999',
    fontSize: 12,
  },

  content: {
    color: '#666666',
  },

});

export default Post;
