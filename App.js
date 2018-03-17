import React from 'react';
// import Login from './Login';
// import Register from './Register';
import { View, TextInput, Alert, Text, TouchableOpacity, Image, KeyboardAvoidingView, StyleSheet, Button } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';

class Login extends React.Component {
  static navigationOptions = {
    headerTitle: 'Login',
    headerRight: <Image
      style={{ width: 45, height: 50, paddingRight: 50 }}
      source={{ uri: 'https://www.shareicon.net/download/2016/11/09/851834_security_512x512.png' }}
    />,
    headerStyle: {
      backgroundColor: '#512DA8',
    },
  };

    constructor(props) {
      super(props);
      this.state = {
        UserName: '',
        Password: '',
        TempArray: [],
        UsersArray: [],
        Uflag: false,
        Pflag: false,
      };
    }

    ShowAlert = () => {
      Alert.alert(
        this.state.UserName
      )
    }

    ShowAlert2 = () => {
      Alert.alert(
        this.state.Password
      )
    }

    ShowOnFocus = () => {
      console.log("OnFocus is working")
    }

    handleLogin = () => {
      var tempX = this.state.UsersArray
      var login = { UserName: this.state.UserName, Password: this.state.Password }
      tempX.push(login)
      this.setState({
        UsersArray: tempX
      })
    }

    ValidationUserName = (nameval) => {
      r1 = /^[a-z A-Z]/
      tems = r1.test(nameval)
      if (!tems) {
        this.setState({ Uflag: true, UserName: nameval })
      } else {
        this.setState({ Uflag: false, UserName: nameval })
      }
    }

    ValidationPassword = (passval) => {
      r1 = /^[0-9]*$/
      //r2 = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
      tems = r1.test(passval)
      if (!tems) {
        this.setState({ Pflag: true, Password: passval })
      } else {
        this.setState({ Pflag: false, Password: passval })
      }
    }
  render() {
    return (
      <View style={styles.container}>

        <View style={{ paddingTop: 10 }}>
          {this.state.UsersArray.map((item, index) => (
            <Text style={{ color: 'white' }} key={index}> Result: [{item.UserName}, {item.Password}]. </Text>
          )
          )
          }
        </View>

        <KeyboardAvoidingView
          style={styles.container}
          behavior='padding'
        >
          {/* --------------------------UserName-------------------------- */}
          <View style={{ margin: 10 }}>
            <View style={[styles.UserNameValid, this.state.Uflag && styles.UserNameUnvalid]}>
              <TextInput
                style={{ fontSize: 20, fontFamily: 'Roboto', paddingLeft: 10, color: 'white' }}
                placeholder='Username'
                underlineColorAndroid={'transparent'}
                multiline={true}
                onChangeText={(UserName) => this.ValidationUserName(UserName)}
                value={this.state.UserName}
                onSubmitEditing={this.ShowAlert}
                //autoFocus={true}
                onFocus={this.ShowOnFocus}
                editable={true}
                autoCapitalize='characters'
              />
            </View>
          </View>

          {/* --------------------------Password-------------------------- */}
          <View style={{ margin: 10 }}>
            <View style={[styles.PasswordValid, this.state.Pflag && styles.PasswordUnvalid]}>
              <TextInput
                style={{ fontSize: 20, fontFamily: 'Roboto', paddingLeft: 10, color: 'white' }}
                placeholder='Password'
                multiline={true}
                underlineColorAndroid={'transparent'}
                onChangeText={(Password) => this.ValidationPassword(Password)}
                value={this.state.Password}
                onSubmitEditing={this.ShowAlert2}
                onFocus={this.ShowOnFocus}
                editable={true}
                autoCapitalize='characters'
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 25 }}>
            <TouchableOpacity onPress={this.handleLogin} style={{ height: 60, width: 140, backgroundColor: '#40C4FF', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
              <Text style={{ fontSize: 25 }}> Login </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

      </View>
    );
  }
}

class Register extends React.Component {
  static navigationOptions = {
    headerTitle: 'Register',
    headerRight: <Image
      style={{ width: 45, height: 50, paddingRight: 50 }}
      source={{ uri: 'https://cdn1.iconfinder.com/data/icons/social-messaging-productivity-4/128/add-user2-256.png' }}
    />,
    headerStyle: {
      backgroundColor: '#512DA8',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      UserName: '',
      Password: '',
      RePassword: '',
      TempArray: [],
      UsersArray: [],
      Uflag: false,
      Pflag: false,
    };
  }

  ShowAlert = () => {
    Alert.alert(
      this.state.UserName
    )
  }

  ShowAlert2 = () => {
    Alert.alert(
      this.state.Password
    )
  }

  ShowAlert3 = () => {
    Alert.alert(
      this.state.RePassword
    )
  }

  ShowOnFocus = () => {
    console.log("OnFocus is working")
  }

  handleRegister = () => {
    var tempX = this.state.UsersArray
    var register = { UserName: this.state.UserName, Password: this.state.Password, RePassword: this.state.RePassword }
    tempX.push(register)
    this.setState({
      UsersArray: tempX
    })
  }

  ValidationUserName = (nameval) => {
    r1 = /^[a-z A-Z]/
    tems = r1.test(nameval)
    if (!tems) {
      this.setState({ Uflag: true, UserName: nameval })
    } else {
      this.setState({ Uflag: false, UserName: nameval })
    }
  }

  ValidationPassword = (passval) => {
    r1 = /^[0-9]*$/
    //r2 = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    tems = r1.test(passval)
    if (!tems) {
      this.setState({ Pflag: true, Password: passval })
    } else {
      this.setState({ Pflag: false, Password: passval })
    }
  }

  ValidationRePassword = (passval) => {
    r1 = /^[0-9]*$/
    //r2 = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    tems = r1.test(passval)
    if (!tems) {
      this.setState({ Pflag: true, RePassword: passval })
    } else {
      this.setState({ Pflag: false, RePassword: passval })
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{ paddingTop: 10 }}>
          {this.state.UsersArray.map((item, index) => (
            <Text style={{ color: 'white' }} key={index}> Result: [{item.UserName}, {item.Password}, {item.RePassword}]. </Text>
          )
          )
          }
        </View>

        <KeyboardAvoidingView
          style={styles.container}
          behavior='padding'
        >
          {/* --------------------------UserName-------------------------- */}
          <View style={{ margin: 10 }}>
            <View style={[styles.UserNameValid, this.state.Uflag && styles.UserNameUnvalid]}>
              <TextInput
                style={{ fontSize: 20, fontFamily: 'Roboto', paddingLeft: 10, color: 'white' }}
                placeholder='Username'
                underlineColorAndroid={'transparent'}
                multiline={true}
                onChangeText={(UserName) => this.ValidationUserName(UserName)}
                value={this.state.UserName}
                onSubmitEditing={this.ShowAlert}
                //autoFocus={true}
                onFocus={this.ShowOnFocus}
                editable={true}
                autoCapitalize='characters'
              />
            </View>
          </View>

          {/* --------------------------Password-------------------------- */}
          <View style={{ margin: 10 }}>
            <View style={[styles.PasswordValid, this.state.Pflag && styles.PasswordUnvalid]}>
              <TextInput
                style={{ fontSize: 20, fontFamily: 'Roboto', paddingLeft: 10, color: 'white' }}
                placeholder='Password'
                multiline={true}
                underlineColorAndroid={'transparent'}
                onChangeText={(Password) => this.ValidationPassword(Password)}
                value={this.state.Password}
                onSubmitEditing={this.ShowAlert2}
                onFocus={this.ShowOnFocus}
                editable={true}
                autoCapitalize='characters'
                secureTextEntry={true}
              />
            </View>
          </View>

          {/* --------------------------RePassword-------------------------- */}
          <View style={{ margin: 10 }}>
            <View style={[styles.PasswordValid, this.state.Pflag && styles.PasswordUnvalid]}>
              <TextInput
                style={{ fontSize: 20, fontFamily: 'Roboto', paddingLeft: 10, color: 'white' }}
                placeholder='Re-Password'
                multiline={true}
                underlineColorAndroid={'transparent'}
                onChangeText={(RePassword) => this.ValidationRePassword(RePassword)}
                value={this.state.RePassword}
                onSubmitEditing={this.ShowAlert3}
                onFocus={this.ShowOnFocus}
                editable={true}
                autoCapitalize='characters'
                secureTextEntry={true}
              />
            </View>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 25 }}>
            <TouchableOpacity onPress={this.handleRegister} style={{ height: 60, width: 140, backgroundColor: '#40C4FF', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
              <Text style={{ fontSize: 25 }}> Register </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',//#E6EE9C
    justifyContent: 'center',
  },
  countContainer: {
    alignItems: 'center',
    padding: 25,
  },
  UserNameValid: {
      padding: 10, 
      borderColor: '#512DA8',
      borderWidth: 2,
      borderRadius: 10
  },
  PasswordValid: {
      padding: 10, 
      borderColor: '#512DA8',
      borderWidth: 2,
      borderRadius: 10
  },
  UserNameUnvalid: {
      padding: 10,
      borderColor: 'red',
      borderWidth: 2,
      borderRadius: 10
  },
  PasswordUnvalid: {
      padding: 10,
      borderColor: 'red',
      borderWidth: 2,
      borderRadius: 10
  },
});

const LoginStack = StackNavigator({
  Login: { screen: Login },
});

const RegisterStack = StackNavigator({
  Register: { screen: Register },
});

export default TabNavigator(
  {
    Login: { screen: LoginStack },
    Register: { screen: RegisterStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      activeBackgroundColor: '#512DA8',
      inactiveBackgroundColor: '#a89bc9',
      labelStyle: {
        fontSize: 22
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  }
);