import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

// icons
import CustomIcon from './CustomIcon';

export default function InputPassword({ labelPassword, value, setValue, style }: any) {
  // const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          fontFamily: 'Poppins-Medium',
        }}>
        {labelPassword}
      </Text>
      <View style={styles.password}>
        <TextInput
          style={[styles.textInput, style]}
          secureTextEntry={!showPassword}
          value={value}
          onChangeText={(text) => setValue(text)}
          autoCorrect={false}
        />
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'absolute',
            right: 10,
            top: 20,
          }}>
          {showPassword ? (
            <Pressable onPress={togglePasswordVisibility}>
              <CustomIcon
                name="eye-outline"
                size={24}
                color="#000"
                type="MaterialCommunityIcons"
              />
            </Pressable>
          ) : (
            <Pressable onPress={togglePasswordVisibility}>
              <CustomIcon
                name="eye-off-outline"
                size={24}
                color="#000"
                type="MaterialCommunityIcons"
              />
            </Pressable>
          )}
        </View>
      </View>
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
  password: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});
