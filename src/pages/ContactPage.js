import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Alert, Linking,  Pressable } from 'react-native';

function ContactPage({ navigation }) {
    const validStates = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
        'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
        'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];
   
    const [formData, setFormData] = useState({
        company: '',
        fname: '',
        lname: '',
        city: 'Mosinee',
        state: 'WI',
        zip: '',
        pnumber: '',
        email: '',
        comment: ''
    });
    const [errors, setErrors] = useState({});
    
    const validateField = (name, value) => {
        switch (name) {
            case 'company':
            case 'fname':
            case 'lname':
            case 'email':
                return value.trim() === '';
            case 'state':
                return !validStates.includes(value.trim());
            case 'zip':
                return !/^\d{5}(-\d{4})?$/.test(value);
            case 'pnumber':
                return !/^\d{10}$/.test(value);
            case 'comment':
                return value.length > 500;
            default:
                return false;
        }
    };

    const handleChange = (name, value) => {
        const error = validateField(name, value);
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = () => {
        let isValid = true;
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            newErrors[key] = error;
            isValid = isValid && !error;
        });
    
        setErrors(newErrors);
        if (isValid) {
            console.log('Form is valid, submitting:', formData);
            submitForm();
            // Optionally clear form here after submission
            setFormData({
                company: '',
                fname: '',
                lname: '',
                city: '',
                state: '',
                zip: '',
                pnumber: '',
                email: '',
                comment: ''
            });
        } else {
            console.log('Form is invalid:', newErrors);
        }
    };

    const submitForm = () => {
        const formToSubmit = {
            Company: formData.company,
            FirstName: formData.fname,
            LastName: formData.lname,
            Email: formData.email,
            Comment: formData.comment
        };
        console.log('Form Submitted:', formToSubmit);
    
        Alert.alert("Success", "Form submitted successfully!");
    }  

    return (
        <ScrollView style={styles.container}>

            <View style={styles.form}>
                {Object.keys(formData).map(key => (
                    <View key={key} style={styles.inputContainer}>
                        <Text style={styles.label}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(value) => handleChange(key, value)}
                            value={formData[key]}
                            placeholder={key}
                            keyboardType={key === 'email' ? 'email-address' : 'default'}
                        />
                        {errors[key] && <Text style={styles.errorText}>{key} is invalid or required.</Text>}
                    </View>
                ))}
                <Pressable onPress={handleSubmit}>
                    <Text style={styles.submitButton}>Submit</Text>
                </Pressable>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text style={styles.address}>202720 Alicia Lane, Mosinee WI 54455</Text>
                <Text>©KrisRheinschmidt.com, Inc. All rights reserved.</Text>
                <Text style={styles.emailLink} onPress={() => Linking.openURL('mailto:krisrhino680@yahoo.com')}>krisrhino680@yahoo.com</Text>
                <Pressable style={styles.topButton} onPress={() => {}}>
                    <Text>To Top</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    form: {
        marginTop: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    errorText: {
        color: 'red',
    },
    footer: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
    },
    topButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#0077B5',
        borderRadius: 5,
    },
    submitButton: {
        padding: 10,
        backgroundColor: '#0077B5',
        color: '#fff',
        textAlign: 'center',
        borderRadius: 5,
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
});

export default ContactPage;
