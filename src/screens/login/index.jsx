import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.png';


export const Login = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.topWrapper}>
                <Image source={logo} style={styles.logo} />
            </View>

            <TouchableOpacity style={styles.button}>
                <Image source={facebook} style={styles.imageFacebook} />
                <Text style={styles.buttonText}>  Continuar com o Facebook</Text>
            </TouchableOpacity>

            <Text style={styles.text}>ou</Text>

            <TextInput
                style={styles.input}
                placeholder="Email ou número de telefone"
                placeholderTextColor={'#aaa'}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={'#aaa'}
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.text2}>Esqueceu a senha??</Text>
        </View>
    )
}