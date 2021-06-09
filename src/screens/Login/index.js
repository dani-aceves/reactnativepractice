import React from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import {Text} from 'react-native';
import CustomButton from '../../components/common/CustomButton';

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Container style={{padding: 50}}>
      <Input
        label="Username"
        onChangeText={text => onChangeText(text)}
        value={value}
        iconPosition="right"
      />
      <Input
        label="Password"
        onChangeText={text => onChangeText(text)}
        value={value}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
      <CustomButton secondary title="Submit" loading={true} disabled={true} />
      <CustomButton secondary title="Click Me" loading={true} />
      <CustomButton primary title="Submit" loading={true} disabled={true} />
      <CustomButton danger title="Submit" />
    </Container>
  );
};

export default Login;
