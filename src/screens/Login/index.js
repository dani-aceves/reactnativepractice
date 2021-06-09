import React from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import {Text} from 'react-native';

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return (
    <Container style={{padding: 50}}>
      <Input
        label="Username"
        onChangeText={text => onChangeText(text)}
        value={value}
        iconPosition="right"
        // icon={<Text>HELLO</Text>}
        error={'This field is required'}
      />
      <Input
        label="Password"
        onChangeText={text => onChangeText(text)}
        value={value}
        icon={<Text>HELLO</Text>}
        iconPosition="right"
      />
    </Container>
  );
};

export default Login;
