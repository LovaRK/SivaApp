// src/screens/ForgotPassword.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';

interface ForgotPasswordProps {
    navigation: any; // Replace 'any' with a more specific type if using React Navigation
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ navigation }) => {
    const [email, setEmail] = useState<string>('');

    const handleResetPassword = () => {
        // Implement password reset logic here
        alert(`Password reset link sent to ${email}`);
        // Optionally navigate back to the login screen
        // navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content>
                    <Title style={styles.title}>Reset Password</Title>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        mode="outlined"
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Button 
                        mode="contained" 
                        onPress={handleResetPassword} 
                        style={styles.button}
                    >
                        Send Reset Link
                    </Button>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.backToLoginText}>Back to Login</Text>
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

export default ForgotPassword;
function alert(arg0: string) {
    throw new Error('Function not implemented.');
}

