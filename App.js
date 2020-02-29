/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from '@apollo/react-hooks';
import {Navigation} from './App/Navigation/Navigation';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://your.graphql.url/graphql',
  }),
});
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import Combine from './App/Redux/Reducers/Combine';


const App = () => {
  const store=createStore(Combine)
  return (
    <Provider store={store}>
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
    </Provider>
  );
};
export default App;
