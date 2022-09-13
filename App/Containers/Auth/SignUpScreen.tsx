import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import AuthActions from '../../Redux/UserRedux';
import styles from './Styles/SignInScreenStyle';
import {useDispatch} from 'react-redux';

const SignInScreen = () => {
  const navigation = useNavigation<any>();

  const dispatch = useDispatch();

  const [restaurantName, setRestaurantName] = useState('');
  const [managerName, setManagerName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  // const [restaurantName, setRestaurantName] = useState('');

  const handleChangeRestaurantName = (value: string) => {
    setRestaurantName(value);
  };
  const handleChangeManagerName = (value: string) => {
    setManagerName(value);
  };
  const handleChangeAddress = (value: string) => {
    setAddress(value);
  };
  const handleChangePhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };
  const handleChangeEmail = (value: string) => {
    setEmail(value);
  };
  const handleChangePassword = (value: string) => {
    setPassword(value);
  };
  const handleChangeRepassword = (value: string) => {
    setRepassword(value);
  };

  const handlePressSignUp = () => {
    navigation.navigate('VerifyScreen');
  };

  const handlePressGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.backButton} onPress={handlePressGoBack}>
          <Image
            style={styles.arrowLeft}
            source={require('../../Assets/Icons/right-arrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.logoTitle}>Melin</Text>
        <View style={styles.signUpItem}>
          <Text>
            Tên nhà hàng<Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeRestaurantName}
            value={restaurantName}
            placeholder="Te restaurant"
          />
        </View>
        <View style={styles.signUpItem}>
          <Text>
            Tên quản lý<Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeManagerName}
            value={managerName}
            placeholder="Te"
          />
        </View>
        <View style={styles.signUpItem}>
          <Text>
            Địa chỉ kinh doanh<Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeAddress}
            value={address}
            placeholder="Số 51 đường Abc,..."
          />
        </View>
        <View style={styles.signUpItem}>
          <Text>
            Số điện thoại<Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangePhoneNumber}
            value={phoneNumber}
            placeholder="012312312313"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.signUpItem}>
          <Text>
            Email<Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeEmail}
            value={email}
            placeholder="abc@gmail.com"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.signUpItem}>
          <Text>
            Mật khẩu<Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangePassword}
            value={password}
            placeholder="***********"
          />
        </View>
        <View style={styles.signUpItem}>
          <Text>
            Nhập lại mật khẩu<Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeRepassword}
            value={repassword}
            placeholder="***********"
          />
        </View>
        <TouchableOpacity
          style={styles.signUpButton}
          delayLongPress={0}
          onPress={handlePressSignUp}>
          <Text style={styles.signInButtonText}>Đăng ký</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
