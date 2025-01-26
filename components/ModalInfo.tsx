import React from 'react';
import { View, Text, Modal, Pressable, StyleSheet, Platform } from 'react-native';

export default function ModalInfo({ visible, message, onClose, setLoading, navigation }: any) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text
                        style={styles.modalText}
                    >
                        {message}
                    </Text>
                    <View
                        // eslint-disable-next-line react-native/no-inline-styles
                        style={{ flexDirection: 'row', width: '100%' }}>
                        <Pressable
                            style={styles.btnCloseModal}
                            onPress={() => {
                                onClose();
                                setLoading(false);
                                if (navigation) {
                                    navigation.goBack();
                                }
                            }}
                        >
                            <Text style={styles.btnCloseModalText}>Tutup</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        width: '100%',
        maxWidth: Platform.OS === 'web' ? 400 : '100%',
        alignSelf: 'center',
        zIndex: 9999,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
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
    btnCloseModal: {
        backgroundColor: '#125694',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: '100%',
    },
    btnCloseModalText: {
        fontFamily: 'Poppins_600SemiBold',
        textAlign: 'center',
        color: 'white',
    },
    modalText: {
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        marginBottom: 20,
    },
});
