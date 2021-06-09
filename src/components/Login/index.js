import React from 'react';
import {Text} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';

const LoginComponent = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Container style={{padding: 50}}>
      <Input
        label="Username"
        iconPosition="right"
        placeholder="Enter Username"
      />
      <Input
        label="Password"
        icon={<Text>SHOW</Text>}
        iconPosition="right"
        secureTextEntry={true}
        placeholder="Enter Password"
      />
      <CustomButton primary title="Submit" />
    </Container>
  );
};

export default LoginComponent;
