import React from 'react';

import {TextInput, View, TextInputProps} from 'react-native';

import styles from './styles';

interface InputProps extends TextInputProps {
  placeholder: string;
  password?: boolean;
  last?: boolean;
}

const CustomInput: React.ForwardRefRenderFunction<TextInput, InputProps> = ({
  placeholder,
  last,
  ...rest
}) => {
  return (
    <View style={[styles.inputContainer, last ? styles.lastInput : {}]}>
      <TextInput
        placeholder={placeholder}
        keyboardAppearance="dark"
        placeholderTextColor="#535353"
        style={styles.input}
        {...rest}
      />
    </View>
  );
};

export default CustomInput;
