import React from 'react';
import { ScrollView, StyleSheet,Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { withNavigation } from 'react-navigation';

class LinksScreen extends React.Component {
  render(){
    return(
    <ScrollView style={styles.container}>
      
          <Text  style={styles.container__text}>Архив данных</Text>
    </ScrollView>
    )
  }
}
LinksScreen.navigationOptions = {
  header: null
};
export default withNavigation(LinksScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  container__text: {
    fontSize: 17,
    alignSelf: 'center'
  }
  
});
