import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, ScrollView, StyleSheet, Linking } from 'react-native';
import personalData from '../data/personal.json';

function HomePage({ navigation }) {
    const [person, setPerson] = useState(null);
    const [portfolio, setPortfolio] = useState(null);
    const [references, setReferences] = useState([]);

    useEffect(() => {
        if (personalData) {
          setPerson(personalData.personalDetails);
          setPortfolio(new Portfolio(personalData.skills));
          setReferences(personalData.references);
        } else {
          console.error('Error fetching personal data: Data not found');
        }
    }, []);

    if (!person || !portfolio) {
        return <Text>Loading...</Text>;
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const HomePage = ({ navigation }) => {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{person.name}</Text>
                    <View style={styles.nav}>
                        <Pressable onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.navText}>Home</Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Projects')}>
                            <Text style={styles.navText}>Projects</Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Resume')}>
                            <Text style={styles.navText}>Resume</Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('Contact')}>
                            <Text style={styles.navText}>Contact</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.profileContainer}>
                    <Image style={styles.profileImage} source={{ uri: '../assets/kr_picture1.jpg' }} />
                    <View style={styles.skillsContainer}>
                        <Text style={styles.skillsHeader}>Skills</Text>
                        {portfolio && portfolio.renderSkills()}
                    </View>
                </View>
                <View style={styles.articleContainer}>
                    <Text style={styles.articleTitle}>Who am I?</Text>
                    <Text style={styles.articleText}>
                        Hello everyone I am Kris! I am 46 years old, married, and a father of two. I live in Mosinee, WI and I am looking to be your next programmer. I have always done well with anything done on a computer starting as a CNC operator to helping problem solve the newest machine in my company. I am looking for a great opportunity to work on making programs for other company’s and help make things run better. You will find not only a leader, but someone is also very organized and is good at following instruction. We can make your company better together. I look forward to working with you in the future.
                    </Text>
                    <Pressable style={styles.linkedinButton} onPress={() => Linking.openURL('https://www.linkedin.com/in/kris-rheinschmidt-6a487a91')}>
                        <Text>LinkedIn Profile</Text>
                    </Pressable>
                </View>

                {/* References Table */}
                <View style={styles.referencesContainer}>
                    <Text style={styles.referencesTitle}>Names Of References</Text>
                    {references.map((reference, index) => (
                        <View key={index} style={styles.referenceRow}>
                            <Text>{reference.firstName}</Text>
                            <Text>{reference.lastName}</Text>
                            <Text>{reference.relationship}</Text>
                        </View>
                    ))}
                </View>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.address}>202720 Alicia Lane, Mosinee WI 54455</Text>
                    <Text>©KrisRheinschmidt.com, Inc. All rights reserved.</Text>
                    <Text style={styles.emailLink} onPress={() => Linking.openURL('mailto:krisrhino680@yahoo.com')}>krisrhino680@yahoo.com</Text>
                    <Pressable style={styles.topButton} onPress={scrollToTop}>
                        <Text style={styles.topButtonText}>To Top</Text>
                    </Pressable>
                </View>
            </ScrollView>
        );
    };
}

class Portfolio {
    constructor(skills) {
        this.skills = skills;
    }

    renderSkills() {
        return this.skills.map((skill, index) => <Text key={index}>{skill}</Text>);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    navText: {
        fontSize: 16,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    skillsContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    skillsHeader: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    articleContainer: {
        padding: 20,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    articleTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    articleText: {
        fontSize: 16,
        marginTop: 10,
    },
    linkedinButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#0077B5',
        borderRadius: 5,
        alignItems: 'center',
    },
    referencesContainer: {
        padding: 20,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    referencesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    referenceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    footer: {
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    address: {
        fontSize: 12,
    },
    emailLink: {
        color: '#0077B5',
        marginTop: 5,
    },
    topButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#0077B5',
        borderRadius: 5,
        alignItems: 'center',
    },
    topButtonText: {
        color: '#fff',
    },
});

export default HomePage;
