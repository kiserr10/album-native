 // Import a library to help create a Component
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
 //Create Component
const App = () => (
	<View>
		<Header headerText={'Albums!'} />
		<AlbumList />
	</View>
);


//Render it to the device
// AppRegistry.registerComponent('albums', () => App);
export default App;

//Export App component to index.js
