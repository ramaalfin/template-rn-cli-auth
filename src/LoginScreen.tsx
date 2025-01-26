import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// services
import { loginUser } from '../services/auth/login';

// context
import { useAuth } from '../context/AuthContext';

// components
import InputBox from '../components/InputBox';
import InputPassword from '../components/InputPassword';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalInfo from '../components/ModalInfo';
import CustomIcon from '../components/CustomIcon';

const LoginScreen = (): JSX.Element => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const { setUser, setAuthenticated } = useAuth();

    useEffect(() => {
        const loadRememberedUsername = async () => {
            const rememberedUsername = await AsyncStorage.getItem(
                'rememberedUsername'
            );
            if (rememberedUsername) {
                setUsername(rememberedUsername);
                setIsChecked(true);
            }
        };

        loadRememberedUsername();
    }, []);

    const handleCheckboxToggle = async () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);

        if (newCheckedState) {
            await AsyncStorage.setItem('rememberedUsername', username);
        } else {
            await AsyncStorage.removeItem('rememberedUsername');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            if (!username || !password) {
                setLoading(false);
                setModalMessage('NIS/NISN/EMAIL dan Password tidak boleh kosong');
                setModalVisible(true);
                return;
            }

            if (isChecked) {
                await AsyncStorage.setItem('rememberedUsername', username);
            }

            const response = await loginUser(username, password);

            if (response.data.status === '00') {
                await AsyncStorage.setItem('user', JSON.stringify(response.data.data));
                setUser(response.data.data);
                setAuthenticated(true);
            } else {
                setModalMessage(response.data.message);
                setModalVisible(true);
                setAuthenticated(false);
            }
        } catch (error) {
            setLoading(false);
            setModalMessage('Terjadi kesalahan, silahkan coba lagi');
            setModalVisible(true);
            setAuthenticated(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <View style={Platform.OS === 'web' ? styles.webContainer : styles.container}>
                <Image
                    style={styles.logo}
                    resizeMode="contain"
                    source={require('../assets/logo.png')}
                />

                <Text
                    style={styles.logoText}
                >
                    Islamic School
                </Text>

                <View style={styles.formContainer}>
                    <InputBox
                        inputTitle="Username"
                        value={username}
                        setValue={(value: string) => {
                            setUsername(value);
                            if (isChecked) {
                                AsyncStorage.setItem('rememberedUsername', value); // Update stored username when typing
                            }
                        }}
                        style={styles.textInput}
                    />

                    <InputPassword
                        labelPassword="Password"
                        togglePasswordVisibility={togglePasswordVisibility}
                        value={password}
                        setValue={setPassword}
                        style={styles.textInput}
                    />

                    <View
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{ flexDirection: 'row', justifyContent: 'space-between' }}
                    >
                        <View
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Pressable onPress={handleCheckboxToggle}>
                                <CustomIcon
                                    name={isChecked ? 'checkbox-outline' : 'checkbox-blank-outline'}
                                    size={20}
                                    color="#000"
                                    type="MaterialCommunityIcons"
                                />
                            </Pressable>
                            <Text
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{
                                    marginLeft: 5,
                                    fontFamily: 'Poppins-Regular',
                                }}>
                                Ingat Saya
                            </Text>
                        </View>

                        {/* lupa kata sandi */}
                        <Pressable
                            // onPress={() => navigation.navigate('ForgotPassword')}
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{ padding: 10 }}
                        >
                            <Text
                                // eslint-disable-next-line react-native/no-inline-styles
                                style={{
                                    fontFamily: 'Poppins-Regular',
                                }}>
                                Lupa Kata Sandi?
                            </Text>
                        </Pressable>
                    </View>

                    <View
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{
                            marginTop: 50,
                        }}>
                        <TouchableOpacity
                            style={Platform.OS === 'web' ? styles.webBtnSubmit : styles.btnSubmit}
                            onPress={handleSubmit}
                            disabled={loading}
                        >
                            <Text style={styles.btnTextSubmit}>
                                {loading ? <ActivityIndicator size="small" color="#fff" /> : 'Masuk'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ModalInfo
                    message={modalMessage}
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    setLoading={setLoading}
                />
            </View>
        </>
    );
};

export default LoginScreen;

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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    logo: {
        width: 120,
        height: 120,
    },
    logoText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        marginBottom: 20,
    },

    formContainer: {
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 30,
        gap: 20,
    },
    textInput: {
        backgroundColor: '#f1f9fe',
        borderColor: '#f1f9fe',
    },
    password: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    checkbox: {
        borderColor: '#979797',
    },

    webBtnSubmit: {
        backgroundColor: '#125694',
        padding: 10,
        height: 40,
        borderRadius: 30,
    },
    btnSubmit: {
        backgroundColor: '#125694',
        padding: 15,
        borderRadius: 30,
    },
    btnTextSubmit: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular',
    },

    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
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
});
