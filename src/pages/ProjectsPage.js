import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet,  Pressable } from 'react-native';

function ProjectsPage({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Projects</Text>
            <Text style={styles.paragraph}>
                Over the course of my 18 years as a machine operator
                and supervisor I have helped make many different styles
                of block for streetscapes around the world. I can help
                your machine make wonderful block like this with my
                knowledge and programming skills!
            </Text>
            <View style={styles.project}>
                <Text style={styles.projectTitle}>Building a Facility</Text>
                <Image style={styles.image} source={{ uri: '../assets/mixer.jpg' }} />
                <Image style={styles.image} source={{ uri: '../assets/press.png' }} />
                <Text style={styles.paragraph}>
                    I started working in my first major concrete plant by helping build it. I spent 6 months installing
                    the many components that make the plant run. These first couple pictures are the machine block press on
                    the left and the main mixer on the right. While installing the machine personally, I learned all about the parts
                    that make this very computerized machine run. After 6 months our facility was the fastest a plant was ever set up.
                </Text>
            </View>
            <View style={styles.project}>
                <Text style={styles.projectTitle}>Making block for beautiful landscapes.</Text>
                <Image style={styles.image} source={{ uri: '../assets/landscape.jpg' }} />
                <Text style={styles.paragraph}>
                    After months of training I learned how to operate this paving machine. We had to go Germany many times
                    to become more efficient at operating it. Now 5 years later I can make blocks of any color, shape, or size
                    and make custom mix designs for your streetscapes. This streetscape consists of multiple colors and sizes
                    put in randomly to make this unique look.
                </Text>
            </View>
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
    header: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    paragraph: {
        fontSize: 16,
        marginVertical: 10,
    },
    project: {
        marginVertical: 20,
    },
    projectTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        marginVertical: 10,
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
});

export default ProjectsPage;
