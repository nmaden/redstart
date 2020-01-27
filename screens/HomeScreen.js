import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet'
 
import { MonoText } from '../components/StyledText';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';


 
class  HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true,dataSource: '',id: ''}
  }

  showActionSheet = (index) => {
    this.setState({
      id: index
    }, function(){
      this.ActionSheet.show();
    });
  
  }

  remove = (index) => {
      this.ActionSheet.hide();
      fetch('https://admin.kelinda.tk/api/v1/doctors/'+ index, {
        method: 'DELETE',
        headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + 'NWU0ZDlmZTIwZTgyYWY1NjU4ZGFmOGQ0YjY0YmRkMTU0ODA5YTQ5N2JmMzI1MGRjNmJhMGEyZjBjZThjM2ZkZA'
        }
      }).then((response) => response.json()).then((responseJson) => {
            this.componentDidMount();
      });
  }


  componentDidMount(){ 
    return fetch('https://admin.kelinda.tk/api/v1/doctors?access_token=NWU0ZDlmZTIwZTgyYWY1NjU4ZGFmOGQ0YjY0YmRkMTU0ODA5YTQ5N2JmMzI1MGRjNmJhMGEyZjBjZThjM2ZkZA')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  

  render() {
    if(this.state.isLoading){
        return(
        <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
        </View>
        )
    }

    return(
   
          <View style={styles.container}>
              <FlatList
                  data={this.state.dataSource}
                  extraData={this.state.dataSource}
                  renderItem={({item}) => 
                  (<View  style={styles.container__section}>
                      <View style={styles.container__info}>
                          <Text  style={styles.container__name}>{item.name}</Text>
                          <Text  style={styles.container__spec}>{item.specialisation_title}</Text>
                      </View>
                      <View>
                          <Icon onPress={() =>this.showActionSheet(item.id)}  size={30} name="dots-three-vertical" color="#ccc" />
                      </View>
                  
                  </View>)
                  
                  
                  }
                  keyExtractor={({id}, index) => id.toString()}
              />
              <ActionSheet
                  ref={o => this.ActionSheet = o}
                  title={  <Icons onPress={this.showActionSheet}  size={50} name="ios-remove" name="md-remove" color="#ccc" />}
                  options={
                    [
                      'Cancel', 
                      <View style={styles.row}>
                            
                            <Icon  size={25} name="remove-user" color="#ce9c91" />
                            <TouchableOpacity style={styles.row__child} onPress={() =>this.remove(this.state.id)}>
                                <Text  style={styles.row__text}>Удалить</Text>
                            </TouchableOpacity>
                      </View>, 
                      <View style={styles.row}>
                         <Icon  size={25} name="edit" color="#588bc4" />
                         <View style={styles.row__child}>
                              <Text style={styles.row__text}>Редактировать</Text>
                         </View>
                      </View>,
                      <View  style={styles.row}>
                        <Icons  size={25} name="ios-call"  name="md-call"  color="#588bc4" />
                        <View style={styles.row__child}>
                              <Text style={styles.row__text}>Позвонить</Text>
                        </View>
                     </View>, 
                      <View  style={styles.row}>
                        <Icon  size={25} name="archive" color="#ce9c91" />
                        <View style={styles.row__child}>
                              <Text style={styles.row__text}>Убрать в архив</Text>
                        </View>
                     </View>
                    ]
                  }
                  cancelButtonIndex={0}
                  destructiveButtonIndex={4}
                  onPress={(index) => {console.log(index) }}
              />
          </View>
    );}}

HomeScreen.navigationOptions = {
  header: null
};
export default withNavigation(HomeScreen);


const styles = StyleSheet.create({
  container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: 20
  },

  container__header: {
      width: 280,
      display: 'flex',
      flexDirection: 'row',
      alignItems: "flex-start",
      justifyContent: 'center',
      marginBottom: 20
  },
  container__title: {
      color: "black",
      fontWeight: 'bold',
      fontSize: 25,
      alignSelf: 'center'
  },
  container__icon: {
      width: 30,
      height: 30,
      color: "blue",
      alignSelf: "flex-end"
  },  
  text: {
     textAlign: 'center',
     fontSize: 10,
     fontWeight: 'bold',
     color: "white",
     marginBottom: 5
  },
  container__section: {
      
      width: 280,
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    
      paddingTop: 10,
      paddingBottom: 10,
  
   
  },
  container__text: {
      display: 'flex',
      flexDirection: 'column',
  },
  container__name: {
      fontSize: 18
  },
  container__spec: {
      fontSize: 15,
      color: '#ccc'
  },
  row: {
    width: 160,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: 80,

  },
  row__child: {
    display: 'flex',
    width: 140,
    marginLeft: 2
  },
  row__text: {
    alignSelf: 'flex-start',
    paddingLeft: 10
  }
});