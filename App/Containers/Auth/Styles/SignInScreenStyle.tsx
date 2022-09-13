import {StyleSheet} from 'react-native';
import {
  ApplicationStyles,
  Colors,
  Fonts,
  TypographyStyles,
} from '../../../Themes';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.mainContainer,
    ...ApplicationStyles.screen.content,
  },
  arrowSignIn: {
    tintColor: Colors.white,
    width: 20,
    height: 20,
  },
  backButton: {
    margin: 10,
    width: 24,
  },
  resendCodeWrap: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginVertical: 10,
    marginRight: 20,
  },
  resendButton: {
    color: Colors.lightBlue,
  },
  arrowLeft: {
    transform: [{rotate: '180deg'}],
    tintColor: Colors.black,
    width: 20,
    height: 20,
  },
  logoTitle: {
    fontSize: 24,
    alignSelf: 'center',
  },
  tittle: {
    fontFamily: Fonts.regular,
    fontSize: 22,
    color: Colors.white,
  },
  content: {
    height: '100%',
    padding: 24,
  },
  header: {
    height: '35%',
    justifyContent: 'space-between',
  },
  imputTitle: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.gray1,
  },
  signUpItem: {
    marginLeft: 10,
    marginVertical: 6,
  },
  passwordAddedInput: {
    paddingBottom: 2,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  input: {
    fontFamily: Fonts.regular,
    color: Colors.gray,
    fontSize: 14,
    borderWidth: 1,
    borderColor: Colors.black,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginTop: 8,
    marginLeft: 2,
    marginRight: 20,
    borderRadius: 5,
  },
  passwordInput: {
    fontFamily: Fonts.regular,
    color: Colors.white,
    fontSize: 19,
  },
  passwordWrapper: {
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  inputPasswordFlex: {
    flex: 1,
  },
  eyeIcon: {
    tintColor: Colors.gray1,
  },
  eyeButton: {
    position: 'absolute',
    zIndex: 1,
    top: 10,
    right: 0,
    padding: 10,
    paddingRight: 2,
  },
  form: {
    marginTop: 20,
  },
  policyWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  policy: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.gray1,
  },
  policyBlue: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.main,
  },
  footerWrapper: {
    paddingTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signInButton: {
    borderWidth: 1,
    borderColor: Colors.main,
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpButton: {
    marginTop: 10,
    backgroundColor: Colors.main,
    width: 120,
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  signInButtonText: {
    color: Colors.white,
  },
});
