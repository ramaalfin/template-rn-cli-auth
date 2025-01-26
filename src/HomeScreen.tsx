import React, { useState } from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    Modal,
    Platform,
    StyleSheet,
    Text,
    View,
    Pressable,
} from 'react-native';

// context
import { useAuth } from '../context/AuthContext';

// icon
import CustomIcon from '../components/CustomIcon';

const HomeScreen = (): JSX.Element => {
    const { logout } = useAuth();
    const [modalVisible, setModalVisible] = useState(false);

    const handleLogout = async () => {
        setModalVisible(true);
    };

    return (
        <>
            <View style={Platform.OS === 'web' ? styles.webContainer : styles.container}>
                <ImageBackground
                    source={require('../assets/bg_home.png')}
                    style={styles.bio}
                >
                    <View style={styles.topBar}>
                        <View style={styles.logoContainer}>
                            <Image
                                source={require('../assets/logo.png')}
                                resizeMode="contain"
                                style={styles.logo}
                            />
                            <Text
                                style={styles.logoText}
                            >
                                Islamic School
                            </Text>
                        </View>

                        <Pressable
                            onPress={handleLogout}
                        >
                            <CustomIcon
                                name="logout"
                                size={24}
                                color="#125694"
                                type="MaterialCommunityIcons"
                            />
                        </Pressable>
                    </View>
                </ImageBackground>

                {/* Modal */}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text>
                                Apakah Anda yakin ingin keluar?
                            </Text>
                            <View
                                style={styles.btnModalContainer}
                            >
                                <Pressable
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    style={[styles.btnModal, { backgroundColor: '#125694' }]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text
                                        style={[styles.btnModalText,
                                        // eslint-disable-next-line react-native/no-inline-styles
                                        { color: 'white' }]}>
                                        Batal
                                    </Text>
                                </Pressable>
                                <Pressable
                                    // eslint-disable-next-line react-native/no-inline-styles
                                    style={[styles.btnModal, { backgroundColor: '#f5f5f5' }]}
                                    onPress={() => {
                                        logout();
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <Text
                                        style={[styles.btnModalText,
                                        // eslint-disable-next-line react-native/no-inline-styles
                                        { color: '#125694' }]}>
                                        Ya
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    webContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#fff',
        width: '100%',
        maxWidth: 400,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    logo: {
        width: 45,
    },
    logoText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        width: 50,
        lineHeight: 15,
    },

    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 5,
        height: Dimensions.get('window').height / 15,
    },
    bio: { height: '100%', width: '100%' },
    bioContainer: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    bioImgBackground: {
        height: 'auto',
        padding: 15,
    },

    // Modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: Platform.OS === 'web' ? 400 : '100%',
        alignSelf: 'center',
        zIndex: 1,
    },
    modalView: {
        margin: 30,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    btnModal: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '50%',
    },
    btnModalText: {
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center',
    },
    btnModalContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        gap: 10,
    },
});
