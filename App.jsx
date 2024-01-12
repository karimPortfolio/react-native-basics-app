import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import Users from './components/users'
import { useState } from 'react';
import fetchUsers from './services/api/fetchUsers';
import InputView from './components/input';

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
                {/* <Text style={styles.avatar.text}>MB</Text> */}
                <Image
                style={styles.avatarImg}
                source={{ uri:'https://avatars.githubusercontent.com/u/92030288?v=4' }}
                />
            </View>
        </View>
     )
  }

  return (
    <ScrollView style={styles.container}>
      <Head />
      <Text style={styles.title} > Welcome to my mobile application </Text>
      <Users users={users} />
      <InputView/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom:60,
    backgroundColor: '#fff',
    height:'100%'
  },
  title:{
    marginTop:20,
    fontSize:30,
    textAlign:'center',
    color:'#4f46e5'
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
  },
  avatarImg:{
    width:'99%',
    height:'99%',
    borderRadius:'50%'
  }

});
