import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Fonts, Metrics} from '../../Themes';
import images from '../../Themes/Image';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useNavigation} from '@react-navigation/native';
import AuthActions from '../../Redux/UserRedux';
import styles from './Styles/SignUpScreenStyle';
import {useDispatch} from 'react-redux';
import {trim} from 'ramda';

const SignInScreen = () => {
  const navigation = useNavigation<any>();

  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [hidePass, setHidePass] = useState(true);

  const signUpDataRequest = {
    email: 'nhuhoa6@gmail.com',
    password: '123123123',
  };

  const handleChangeEmail = (value: string) => {
    setEmail(trim(value));
  };

  const handleChangePassword = (value: string) => {
    setPassword(trim(value));
  };

  const handlePressEyeButton = () => {
    setHidePass(!hidePass);
  };
  const handlePressContinue = () => {
    Keyboard.dismiss();
    dispatch(AuthActions.signUpRequest({email, password}));
    navigation.navigate('ChooseCategoriesScreen');
  };
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <Image
        source={images.logo}
        resizeMode={'stretch'}
        style={{
          position: 'absolute',
          top: 0,
          // zIndex: 1,
          height: Metrics.screenWidth * 1.25,
          width: '100%',
        }}
      />

      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          start={{x: 0, y: 1.3}}
          end={{x: 0, y: 0}}
          colors={['#000000', '#000000', 'transparent']}
          style={{height: Metrics.screenHeight, width: '100%'}}>
          <View style={styles.content}>
            <View style={styles.header}>
              <Image
                style={styles.arrowLeft}
                source={require('../../Assets/Icons/right-arrow.png')}
                resizeMode="contain"
              />
              <Text style={styles.tittle}>Let's get you started</Text>
            </View>
            <View style={styles.form}>
              <View style={styles.inputWrapper}>
                <Text style={styles.imputTitle}>Your email</Text>
                <TextInput
                  placeholder="Ex: abc@gmail.com"
                  placeholderTextColor={Colors.gray1}
                  textContentType="emailAddress"
                  value={email}
                  style={styles.input}
                  onChangeText={handleChangeEmail}
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.imputTitle}>Your password</Text>
                <View style={styles.passwordWrapper}>
                  <TouchableOpacity
                    style={styles.eyeButton}
                    delayPressIn={0}
                    onPress={handlePressEyeButton}>
                    <Image
                      style={styles.eyeIcon}
                      source={require('../../Assets/Icons/eye.png')}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <TextInput
                    placeholder="********"
                    placeholderTextColor={Colors.gray1}
                    textContentType="password"
                    value={password}
                    onChangeText={handleChangePassword}
                    style={[
                      styles.input,
                      styles.passwordAddedInput,
                      styles.inputPasswordFlex,
                    ]}
                    secureTextEntry={hidePass}
                  />
                </View>
              </View>

              <BouncyCheckbox
                size={25}
                fillColor={Colors.transparent}
                unfillColor={Colors.transparent}
                text="I am over 16 years of age"
                textStyle={{fontFamily: Fonts.regular, color: Colors.white}}
                iconStyle={{
                  borderColor: Colors.main,
                  borderRadius: 4,
                }}
                style={{paddingVertical: 20}}
                iconImageStyle={{height: 20, width: 20}}
                onPress={(isChecked: boolean) => {}}
              />
              <Text style={styles.policy}>
                By clicking Sign Up, you are indicating that you have read and
                agree to the
                <Text style={styles.policyBlue}>{` Terms of Service `}</Text>
                and
                <Text style={styles.policyBlue}>{` Privacy Policy `}</Text>
              </Text>

              <View style={styles.footerWrapper}>
                <Text style={styles.tittle}>Sign Up</Text>
                <TouchableOpacity
                  style={styles.signInButton}
                  onPress={handlePressContinue}>
                  <Image
                    style={styles.arrowSignIn}
                    source={require('../../Assets/Icons/arrow.png')}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
