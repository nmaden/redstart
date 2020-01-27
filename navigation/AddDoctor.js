import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import { MonoText } from '../components/StyledText';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';
import CheckboxFormX from 'react-native-checkbox-form';


export default class  Add extends Component {
 
  constructor(props){
    super(props);
    this.state ={dataSource: '',id: '0',language: '',text: '',
    name: '',specialisation_id: '',medical_facility_name: '',medical_facility_address: '',
    medical_facility_latitude: '',medical_facility_longitude: '',reception_work_phone: '',
    work_phone: '',mobile_phone: '',email: '',
    day1 : [{label: 'ПН',value: 'ПН'}],day2 : [{label: 'ВТ',value: 'ВТ'}],
    day3 : [{label: 'СР',value: 'СР'}],day4 : [{label: 'ЧТ',value: 'ЧТ'}],
    day5 : [{label: 'ПТ',value: 'ПТ'}],day6 : [{label: 'СБ',value: 'СБ'}],
    day7 : [{label: 'ВС',value: 'ВС'}]
    }
  }

  _onSelect = ( item ) => {
    console.log(item);
  };

  showActionSheet = (index) => {
    this.setState({
      id: index
    }, function(){
      this.ActionSheet.show();
    });
  }  
  
 

  
  
  sendData = () => {
    
      fetch('https://admin.kelinda.tk/api/v1/doctors', {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json',
         'Authorization': 'Bearer ' + 'NWU0ZDlmZTIwZTgyYWY1NjU4ZGFmOGQ0YjY0YmRkMTU0ODA5YTQ5N2JmMzI1MGRjNmJhMGEyZjBjZThjM2ZkZA'
        },
        body: JSON.stringify({
          name: this.state.name, 
          specialisation_id: parseInt(this.state.specialisation_id), 
          medical_facility_name: this.state.medical_facility_name, 
          medical_facility_address: this.state.medical_facility_address, 
          medical_facility_latitude: "38.8710257", 
          medical_facility_longitude: "-77.056165", 
          reception_work_phone: this.state.reception_work_phone, 
          work_phone: this.state.work_phone, 
          mobile_phone: this.state.mobile_phone, 
          email: this.state.email
        })
      }).then((response) => response.json()).then((responseJson) => {
          alert("Добавлен")
      });
  }



  render() {
    const placeholder = {
      label: 'Выберите специализацию',
      value: null,
      color: 'gray',
    };
  
  return(
          <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
              <View  style={styles.container__header}>  
                  <TouchableOpacity  hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                      <Icons   onPress={() =>   this.props.navigation.navigate('Main')} size={30} name="ios-arrow-round-back"  name="md-arrow-round-back" color="#97c1eb" />
                  </TouchableOpacity>
                  <Text  style={styles.container__header_title}>Добавить врача</Text>  
                  <TouchableOpacity onPress={() =>this.sendData()}  hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                      <Icon   size={30} name="check" color="#97c1eb" />
                  </TouchableOpacity>                
              </View>
              
              <ScrollView >
                <View style={styles.container__inputs}>
                    <View style={styles.container__input}>
                        <Text  style={styles.container__input_text}>ФИО</Text>
                        <TextInput
                          style={styles.container__textinput}
                          onChangeText={(name) => this.setState({name})}
                          value={this.state.name}
                        />
                    </View> 
                    <View style={styles.container__input}>
                        <Text  style={styles.container__input_text}>Специализация</Text>
                        <RNPickerSelect
                                onValueChange={(specialisation_id) =>this.setState({specialisation_id})}
                                items={[
                                  
                                    { label: 'Lor', value: 1 },
                                    { label: 'Therapist', value: 2 },
                                    { label: 'Surgeon', value: 3 },
                                    { label: 'Ophthalmologist', value: 8 },
                                ]}

                                
                                placeholder={placeholder}
                                useNativeAndroidPickerStyle={true}
                                textInputProps={{ underlineColorAndroid: 'cyan' }}
                                Icon={() => {
                                  return <Icon style={{marginTop: -8}} name="chevron-small-down"  size={30} color="#97c1eb" />;
                                }}
                            />
                    </View>
                    <View style={styles.container__input}>
                        <Text  style={styles.container__input_text}>Медучреждение</Text>
                        <TextInput
                          style={styles.container__textinput}
                          onChangeText={(medical_facility_name) => this.setState({medical_facility_name})}
                          value={this.state.medical_facility_name}
                        />
                    </View> 
                    <View style={styles.container__input}>
                        <Text  style={styles.container__input_text}>Адрес</Text>
                        <TextInput
                          style={ styles.container__textinput}
                          onChangeText={(medical_facility_address) => this.setState({medical_facility_address})}
                          value={this.state.medical_facility_address}
                        />
                    </View>
                    <View style={styles.container__input}>
                        <Text  style={styles.container__input_text}>Телефон регистратуры</Text>
                        <TextInput
                          style={ styles.container__textinput}
                          onChangeText={(reception_work_phone) => this.setState({reception_work_phone})}
                          value={this.state.reception_work_phone}
                        />
                    </View>  
                    <View style={styles.container__input}>
                        <Text  style={styles.container__input_text}>Рабочий телефон</Text>
                        <TextInput
                          style={ styles.container__textinput}
                          onChangeText={(work_phone) => this.setState({work_phone})}
                          value={this.state.work_phone}
                        />
                    </View> 
                    <View style={styles.container__input}>
                        <Text  style={styles.container__input_text}>Мобильный телефон</Text>
                        <TextInput
                          style={ styles.container__textinput}
                          onChangeText={(mobile_phone) => this.setState({mobile_phone})}
                          value={this.state.mobile_phone}
                        />
                    </View> 
                    <View style={styles.container__input}>
                        <Text  style={styles.container__input_text}>Email</Text>
                        <TextInput
                          style={ styles.container__textinput}
                          onChangeText={(email) => this.setState({email})}
                          value={this.state.email}
                        />
                    </View>

                    <Text style={styles.container__inputs_title}>Дни приема</Text>
                    <View style={styles.container__workday}>
                        
                        <CheckboxFormX
                              style={{ width: 200 }}
                              dataSource={this.state.day1}
                              itemShowKey="label"
                              itemCheckedKey="RNchecked"
                              iconSize={30}
                              formHorizontal={true}
                              labelHorizontal={true}
                              onChecked={(item) => this._onSelect(item)}
                          /> 
                          <View style={styles.container__duration}>
                            <View  style={styles.container__time}><Text>08:00</Text></View>
                            <Text>-</Text>
                            <View  style={styles.container__time}><Text>17:00</Text></View>
                          </View>
                    </View>
                    <View style={styles.container__workday}>
                        <CheckboxFormX
                              style={{ width: 200 }}
                              dataSource={this.state.day2}
                              itemShowKey="label"
                              itemCheckedKey="RNchecked"
                              iconSize={30}
                              formHorizontal={true}
                              labelHorizontal={true}
                              onChecked={(item) => this._onSelect(item)}
                          /> 
                          <View style={styles.container__duration}>
                            <View  style={styles.container__time}><Text>08:00</Text></View>
                            <Text>-</Text>
                            <View  style={styles.container__time}><Text>17:00</Text></View>
                          </View>
                          
                    </View>
                    <View style={styles.container__workday}>
                        <CheckboxFormX
                              style={{ width: 200 }}
                              dataSource={this.state.day3}
                              itemShowKey="label"
                              itemCheckedKey="RNchecked"
                              iconSize={30}
                              formHorizontal={true}
                              labelHorizontal={true}
                              onChecked={(item) => this._onSelect(item)}
                          /> 
                          <View style={styles.container__duration}>
                            <View  style={styles.container__time}><Text>08:00</Text></View>
                            <Text>-</Text>
                            <View  style={styles.container__time}><Text>17:00</Text></View>
                          </View>
                    </View>
                    <View style={styles.container__workday}>
                        <CheckboxFormX
                              style={{ width: 200 }}
                              dataSource={this.state.day4}
                              itemShowKey="label"
                              itemCheckedKey="RNchecked"
                              iconSize={30}
                              formHorizontal={true}
                              labelHorizontal={true}
                              onChecked={(item) => this._onSelect(item)}
                          /> 
                          <View style={styles.container__duration}>
                            <View  style={styles.container__time}><Text>08:00</Text></View>
                            <Text>-</Text>
                            <View  style={styles.container__time}><Text>17:00</Text></View>
                          </View>
                    </View>
                    <View style={styles.container__workday}>
                        <CheckboxFormX
                              style={{ width: 200 }}
                              dataSource={this.state.day5}
                              itemShowKey="label"
                              itemCheckedKey="RNchecked"
                              iconSize={30}
                              formHorizontal={true}
                              labelHorizontal={true}
                              onChecked={(item) => this._onSelect(item)}
                          /> 
                          <View style={styles.container__duration}>
                            <View  style={styles.container__time}><Text>08:00</Text></View>
                            <Text>-</Text>
                            <View  style={styles.container__time}><Text>17:00</Text></View>
                          </View>
                    </View>
                    <View style={styles.container__workday}>
                        <CheckboxFormX
                              style={{ width: 200 }}
                              dataSource={this.state.day6}
                              itemShowKey="label"
                              itemCheckedKey="RNchecked"
                              iconSize={30}
                              formHorizontal={true}
                              labelHorizontal={true}
                              onChecked={(item) => this._onSelect(item)}
                          />
                          <View style={styles.container__duration}>
                            <View  style={styles.container__time}><Text>08:00</Text></View>
                            <Text>-</Text>
                            <View  style={styles.container__time}><Text>17:00</Text></View>
                          </View>
                    </View>

                    <View style={styles.container__workday}>
                        <CheckboxFormX
                              style={{ width: 200 }}
                              dataSource={this.state.day7}
                              itemShowKey="label"
                              itemCheckedKey="RNchecked"
                              iconSize={30}
                              formHorizontal={true}
                              labelHorizontal={true}
                              onChecked={(item) => this._onSelect(item)}
                          /> 
                          <View style={styles.container__duration}>
                            <View  style={styles.container__time}><Text>08:00</Text></View>
                            <Text>-</Text>
                            <View  style={styles.container__time}><Text>17:00</Text></View>
                          </View>
                    </View>    
                </View>
            </ScrollView>
          </KeyboardAvoidingView>
  );
}
}


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
      width: 300,
      display: 'flex',
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: 'space-between',
      padding: 20
    },
    container__header_title: {
      fontSize: 20
    },
    container__inputs: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    container__inputs_title: {
      alignSelf: 'flex-start',
      paddingLeft: 10,
      paddingTop: 30,
      color: 'gray'
    },
    container__input: {
      borderBottomColor:'#f7f7f7',
      borderBottomWidth: 1,
      width:280,
      padding: 10
    },
    container__textinput: {
        height: 40,
        fontSize: 16,
        color: 'black'
    },
    container__input_text: {
      fontSize: 17,
      color: 'gray',
      marginBottom: 5
    },
    container__workday: {
      fontSize: 17,
      color: 'gray',
      marginBottom: 5,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: 270,
      justifyContent: 'space-between',
      borderBottomColor:'#f7f7f7',
      borderBottomWidth: 1,
      padding: 10
    },
    container__workday_title: {
      fontSize: 16,
      color: 'gray'
    },
    container__duration: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    container__time: {
      backgroundColor: '#97c1eb',
      padding: 8,
      borderRadius: 10,
      width: 60
    }
});