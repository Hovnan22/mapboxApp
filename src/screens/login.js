import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Dimensions } from "react-native";
import { useDispatch } from "react-redux";
import { setAuth } from "../actions/app";


import { AppInput } from '../components/ui';

import { checkEmail } from '../utils/validate'


const { height } = Dimensions.get('window').height
const Login = () => {
    const [email, onChangeemail] = useState('');
    const [password, onChangePassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const dispatch = useDispatch();

    const onPress = () => {

        let isValid = checkEmail(email);
        if (!isValid && password) {
            dispatch(setAuth(true))
        } else if (isValid) {
            setShowErrorMessage(true);
        }
    }

    return (
        <View style={styles.container}>
            <AppInput
                value={email}
                onChange={onChangeemail}
                placeholder="email"

            />
            <AppInput
                value={password}
                onChange={onChangePassword}
                placeholder="password"
                secureTextEntry
            />
            {showErrorMessage && <Text style={styles.error}>Wrong email</Text>}
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "#0002ff",
        padding: 10,
        margin: 12,
    },
    container: {
        flex: 1,
        height: height,
        justifyContent: "center",
        backgroundColor: '#cfcfcf',

    },
    error: {
        color: 'red',
        margin: 12,
    }
});


export default Login;