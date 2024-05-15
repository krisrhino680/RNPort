import React from 'react';
import { View, Text, ScrollView, StyleSheet,  Pressable } from 'react-native';

function ResumePage({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Kris Rheinschmidt</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Profile</Text>
                <Text style={styles.paragraph}>
                    Highly skilled Hess Press Operator.
                    18 Years’ experience in concrete manufacturing.
                    Have been a team lead for 3 years.
                    Excellent problem solving skills.
                </Text>
                <Text style={styles.sectionTitle}>Experience</Text>
                <View style={styles.listItem}>
                    <Text style={styles.jobTitle}>Wausau Homes</Text>
                    <Text style={styles.jobDescription}>
                        1997-1998
                        I was a drywall hanger for 1 year.
                    </Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.jobTitle}>Oldcastle Glass</Text>
                    <Text style={styles.jobDescription}>
                        1997-2002
                        Did numerous jobs in the plant but mostly was
                        a forklift driver and worked in shipping.
                    </Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.jobTitle}>Wausau Tile</Text>
                    <Text style={styles.jobDescription}>
                        2003-Current
                        Have been working at Wausau Tile for the last
                        18 years. I have worked on the floor for 12
                        years before becoming a Machine operator.
                        First a CNC operator and then a Hess Press
                        Operator and finally a lead man.
                    </Text>
                </View>
            </View>
            <View style={styles.aside}>
                <View style={styles.jobs}>
                    <Text style={styles.jobsTitle}>Jobs</Text>
                    <Text>Hess Press Operator</Text>
                    <Text>Team Lead</Text>
                    <Text>Developer</Text>
                </View>
                <View style={styles.contact}>
                    <Text style={styles.contactTitle}>Contact</Text>
                    <Pressable onPress={() => Linking.openURL('tel:17155746772')}>
                        <Text>Call: (715) 574-6772</Text>
                    </Pressable>
                    <Pressable onPress={() => Linking.openURL('mailto:krisrhino680@yahoo.com')}>
                        <Text>Email: krisrhino680@yahoo.com</Text>
                    </Pressable>
                </View>
                <View style={styles.skills}>
                    <Text style={styles.skillsTitle}>Skills</Text>
                    <Text>C# Programmer</Text>
                    <Text>Web Design</Text>
                    <Text>Problem Solver</Text>
                    <Text>Microsoft Office</Text>
                    <Text>Concrete Mix Design Specialist</Text>
                    <Text>Hess Press Operator</Text>
                    <Text>First Responder Training</Text>
                    <Text>Leadership Training</Text>
                </View>
                <View style={styles.education}>
                    <Text style={styles.educationTitle}>Education</Text>
                    <Text>Mosinee High School, 1993-1996</Text>
                    <Text>Northcentral Technical College, 2021-Current</Text>
                    <Text>I am currently studying to become a
                    Software engineer specialist.</Text>
                </View>
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
    section: {
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraph: {
        fontSize: 16,
    },
    listItem: {
        marginBottom: 10,
    },
    jobTitle: {
        fontWeight: 'bold',
    },
    jobDescription: {
        fontSize: 16,
    },
    aside: {
        marginTop: 20,
    },
    jobs: {
        marginBottom: 10,
    },
    jobsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    contact: {
        marginBottom: 10,
    },
    contactTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    skills: {
        marginBottom: 10,
    },
    skillsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    education: {
        marginBottom: 10,
    },
    educationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    toTopButton: {
        marginTop: 10,
        backgroundColor: '#6699CC',
        padding: 10,
        borderRadius: 5,
    },
    footer: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
    }
});

export default ResumePage;

