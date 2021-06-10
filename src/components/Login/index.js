import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import CustomButton from '../../components/common/CustomButton';
import styles from './styles';
import {REGISTER} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

const LoginComponent = () => {
  const {navigate} = useNavigation();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Container style={{padding: 50}}>
      <Image
        source={require('../../assets/images/pizza.jpg')}
        style={styles.logoImage}
      />
      <View>
        <Text style={styles.title}>Welcome to my Practice App</Text>
        <Text style={styles.subTitle}>Please Log In here!</Text>
        <View style={styles.form}>
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
        </View>
      </View>
      <CustomButton primary title="Submit" />
      <View style={styles.createSection}>
        <Text style={styles.infoText}>Need a new account?</Text>
        <TouchableOpacity
          style={styles.linkBtn}
          onPress={() => navigate(REGISTER)}>
          <Text>Register</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default LoginComponent;
