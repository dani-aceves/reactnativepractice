import React from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';

const Login = () => {
  const [value, onChangeText] = React.useState('useless placeholder');
  return (
    <Container style={{padding: 50}}>
      <Input
        label="Username"
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </Container>
  );
};

export default Login;
