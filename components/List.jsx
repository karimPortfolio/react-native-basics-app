import React from "react";
import { FlatList, SafeAreaView, Button, StyleSheet, Text, View } from "react-native";


const List = ({users}) => {

    const handlePress = (name) => {
        const msg = `You clicked ${name} card.`
        alert(msg);
    }

    const Item = ({user}) => (
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
    )

    return (
        <SafeAreaView>
            <FlatList
            data={users}
            renderItem={ ({item}) => (
                <Item user={item} />
            )}
            keyExtractor={ item => item.id}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
})

export default List;
