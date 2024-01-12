import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Result from "./result";


const InputView = () => {

    const [name, setName] = useState('');
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleNameChange = (text) => {
        setName(text);
    }

    const handleSubmit = () => {
        setLoading(true);
        setTimeout( () => {
            setShow(true);
            setLoading(false);
        },6000)
    }

    const LoadingUI = () => (
        <View style={styles.loadingContainer}>
            <ActivityIndicator
            color="#4f46e5"
            />
        </View>
    )

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter your name</Text>
            <TextInput
            style={styles.input}
            value={name}
            onChangeText={handleNameChange}
            placeholder="Enter your name"
            clearButtonMode="while-editing"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            {
                loading ? (
                    <LoadingUI />
                ) : (
                    show ? (<Result name={name} />) : null
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:30,
        padding:20,
        paddingBottom:50,
    },
    text:{
        textAlign:'left'
    },
    input: {
        marginTop:12,
        width:'90%',
        height:40,
        borderWidth:1,
        borderColor:'#e2e8f0',
        borderRadius:5,
        paddingLeft:10
    },
    button:{
        marginTop:30,
        backgroundColor:'#0f172a',
        width:130,
        height:50,
        borderRadius:6,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#fff',
        fontSize:16
    },
    loadingContainer:{
        paddingTop:30,
        width:'100%',
        display:'flex',
        justifyContent:'left',
        alignItems:'flex-start',
    }
})

export default InputView;
