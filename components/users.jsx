import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';

const Users = ({users}) => {

    const List = () => {

        const handlePress = (name) => {
            const msg = `You clicked ${name} card.`
            alert(msg);
        }

        return(
            <ScrollView style={styles.scrollView}>
                {users.map( (user) => (
                    <View key={user.id} style={styles.card}>
                        <View style={styles.cardGrid}>
                            <Text style={styles.nameText}>{user.name}</Text>
                            <Text>{user.username}</Text>
                        </View>
                        <Text style={styles.text}>{user.email}</Text>
                        <Text style={styles.text}>Website link: {user.website} </Text>
                        <View style={styles.buttonContainer}>
                            <Button
                            onPress={ () => handlePress(user.name) }
                            title='Click me!'
                            color='#4f46e5'
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.usersTitle}>Our users</Text>
            <List />
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        height:500
    },
    container: {
        marginTop:50,
        width:'100%',
        paddingLeft:20, 
        paddingRight:20 
    },
    card:{
        marginTop:20,
        padding:10,
        backgroundColor: '#eeee',
        borderRadius:6
    },
    cardGrid:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        marginBottom:4
    },
    usersTitle: {
        fontSize: 25
    },
    nameText:{
        fontSize:17,
        fontWeight:500
    },
    text:{
        marginTop:7
    },
    buttonContainer: {
        marginTop:10
    }
})

export default Users;
