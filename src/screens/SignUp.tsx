// src/screens/SignUp.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';

interface SignUpProps {
    navigation: any; // Replace 'any' with a more specific type if using React Navigation
}

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleSignUp = () => {
        // Implement sign-up logic here
        // Validate inputs, passwords match, etc.
        alert(`Sign up for ${email}`);
        // Optionally navigate to the login screen or directly to the app
        // navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.title}>Sign Up</Title>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        mode="outlined"
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        mode="outlined"
                        style={styles.input}
                    />
                    <TextInput
                        label="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry
                        mode="outlined"
                        style={styles.input}
                    />
                    <Button 
                        mode="contained" 
                        onPress={handleSignUp} 
                        style={styles.button}
                    >
                        Sign Up
                    </Button>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.backToLoginText}>Already have an account? Login</Text>
                    </TouchableOpacity>
                </Card.Content>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        width: '100%',
        maxWidth: 400, // Adjust the max width as needed
        padding: 16,
        borderRadius: 8,
    },
    title: {
        textAlign: 'center',
        marginBottom: 16,
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 8,
    },
    backToLoginText: {
        color: '#0056b3',
        marginTop: 15,
        textAlign: 'center',
    },
});

export default SignUp;
function alert(arg0: string) {
    throw new Error('Function not implemented.');
}

