import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Users from './components/users'
import { useState } from 'react';
import fetchUsers from './api/fetchUsers';

export default function App() {

  const users = fetchUsers();

  const Head = () => {
     return (
        <View style={styles.head}>
            <View>
              <Text style={styles.logoText}>KARIM 
                <Text style={styles.logoText.medText}>APP</Text>
              </Text>
            </View>
            <View style={styles.avatar}>
                <Text style={styles.avatar.text}>MB</Text>
            </View>
        </View>
     )
  }

  return (
    <View style={styles.container}>
      <Head />
      <Text style={styles.title} > Welcome to my mobile application </Text>
      <Users users={users} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:'100%'
  },
  title:{
    marginTop:20,
    fontSize:30,
    textAlign:'center',
    color:'#0000FF'
  },
  logoText:{
    color:'#4f46e5',
    fontSize:17,
    fontWeight:'700',
    medText:{
      color:'#a78bfa'
    }
  },
  head:{
    paddingTop:40,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:'#ede9fe',
    width:'100%',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  avatar: {
    backgroundColor:'#4f46e5',
    borderRadius:'50%',
    width:40,
    height:40,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    text:{
      color:'white'
    }
  }

});
