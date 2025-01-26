import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function InputBox({ inputTitle, value, setValue, type, style }: any) {
  return (
    <View>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontFamily: 'Poppins-Medium',
        }}>{inputTitle}</Text>

      {/* tidak bisa menginput spasi  */}
      <TextInput
        style={[styles.textInput, style]}
        autoCorrect={false}
        value={value}
        onChangeText={(text) => setValue(text)}
        keyboardType={type}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'Poppins-Regular',
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 5,
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 10,
    padding: 8,
  },
});
