import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import {LOGIN} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

const RegisterComponent = ({onSubmit, onChange, form, errors}) => {
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
        <Text style={styles.subTitle}>Create a free account!</Text>
        <View style={styles.form}>
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            onChangeText={value => {
              onChange({name: 'username', value});
            }}
            error={errors.username}
          />
          <Input
            label="First Name"
            iconPosition="right"
            placeholder="Enter First Name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last Name"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email}
          />
          <Input
            label="Password"
            icon={<Text>SHOW</Text>}
            iconPosition="right"
            secureTextEntry={true}
            placeholder="Enter Password"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password}
          />
        </View>
      </View>
      <CustomButton onPress={onSubmit} primary title="Submit" />
      <View style={styles.createSection}>
        <Text style={styles.infoText}>Already have an account?</Text>
        <TouchableOpacity
          style={styles.linkBtn}
          onPress={() => navigate(LOGIN)}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default RegisterComponent;
