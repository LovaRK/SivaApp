// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';

interface LoginScreenProps {
    navigation: any; // Replace 'any' with a more specific type if using React Navigation
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        // Dummy login logic
        if (username === 'user' && password === 'pass') {
            navigation.navigate('Home');
        } else {
            alert('Incorrect username or password');
        }
    };

    const handleSocialLogin = (social: string) => {
        // Placeholder for social login logic
        alert(`Login with ${social}`);
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <ImageBackground 
                source={{ uri: 'https://example.com/background-image.jpg' }} 
                style={styles.backgroundImage}
            >
                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.title}>Login</Title>
                        <TextInput
                            label="Username"
                            value={username}
                            onChangeText={setUsername}
                            mode="outlined"
                            style={styles.input}
                        />
                        <TextInput
                            label="Password"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            mode="outlined"
                            style={styles.input}
                        />
                        <Button 
                            mode="contained" 
                            onPress={handleLogin} 
                            style={styles.button}
                        >
                            Login
                        </Button>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <Button 
                            icon="google"
                            mode="contained" 
                            onPress={() => handleSocialLogin('Google')} 
                            style={styles.socialButton}
                        >
                            Login with Google
                        </Button>
                        <Button 
                            icon="facebook"
                            mode="contained" 
                            onPress={() => handleSocialLogin('Facebook')} 
                            style={[styles.socialButton, styles.facebookButton]}
                        >
                            Login with Facebook
                        </Button>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
                        </TouchableOpacity>
                    </Card.Content>
                </Card>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '90%',
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#f8f9fa', // Light background color for the card
    },
    title: {
        textAlign: 'center',
        marginBottom: 16,
        color: '#6200ee', // Example title color
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 8,
        backgroundColor: '#6200ee', // Example button color
    },
    forgotPasswordText: {
        color: '#0056b3', // Example link color
        marginTop: 15,
        textAlign: 'center',
    },
    socialButton: {
        marginTop: 10,
    },
    facebookButton: {
        backgroundColor: '#3b5998', // Facebook button color
    },
    signUpText: {
        color: '#0056b3',
        marginTop: 15,
        textAlign: 'center',
    },
});

export default LoginScreen;

