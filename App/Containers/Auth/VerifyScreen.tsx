import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import AuthActions from '../../Redux/UserRedux';
import styles from './Styles/SignInScreenStyle';
import {useDispatch} from 'react-redux';

const VerifyScreen = () => {
  const navigation = useNavigation<any>();

  const dispatch = useDispatch();

  const [restaurantName, setRestaurantName] = useState('');
  const [managerName, setManagerName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const handleChangeRestaurantName = (value: string) => {
    setRestaurantName(value);
  };
  const handleChangeCode = (value: string) => {
    setManagerName(value);
  };

  const handlePressGoBack = () => {
    navigation.goBack();
  };

  const handlePressConfirmCode = () => {
    navigation.navigate('SignInScreen');
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
            Mã code<Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChangeCode}
            value={restaurantName}
            placeholder="c o d e"
          />
        </View>
        <View style={styles.resendCodeWrap}>
          <Text>Không nhận được mã, </Text>
          <Text style={styles.resendButton} onPress={() => {}}>
            gửi lại
          </Text>
        </View>

        <TouchableOpacity
          style={styles.signUpButton}
          delayLongPress={0}
          onPress={handlePressConfirmCode}>
          <Text style={styles.signInButtonText}>Xác nhận</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default VerifyScreen;
