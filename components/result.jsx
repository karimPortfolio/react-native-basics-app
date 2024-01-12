import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Result = ({name}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Your name is:</Text>
            <Text style={styles.nameText}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:25
    },
    text:{
        textAlign:'left'
    },
    nameText:{
        textAlign:'left',
        fontWeight:'700',
        marginTop:10,
        color:'#4f46e5'
    }
})

export default Result;
