import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts, Metrics} from '../../../Themes';

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
  gradientBackground: {
    height: Metrics.screenHeight,
    width: '100%',
    position: 'absolute',
  },
  arrowLeft: {
    transform: [{rotate: '180deg'}],
    tintColor: Colors.white,
    width: 20,
    height: 20,
    marginTop: 8,
    marginLeft: 8,
  },
  header: {
    height: 140,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcomeText: {
    fontFamily: Fonts.regular,
    fontSize: 21,
    color: Colors.white,
    paddingBottom: 20,
    marginLeft: 4,
  },
  subWelcomeText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.gray3,
    paddingRight: 10,
    marginLeft: 3,
    lineHeight: 24,
    marginBottom: 20,
  },
  doneButton: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.white,
    paddingTop: 8,
    paddingRight: 8,
  },
  hideDoneButton: {
    color: Colors.gray2,
  },
  imputTitle: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    color: Colors.gray1,
  },
  passwordAddedInput: {
    paddingBottom: 1,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  input: {
    fontFamily: Fonts.regular,
    color: Colors.white,
    fontSize: 19,
    borderBottomWidth: 1,
    borderBottomColor: Colors.main,
    paddingHorizontal: 0,
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
    position: 'absolute',
    zIndex: 1,
    top: 16,
    right: 0,
    tintColor: Colors.gray1,
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
  categoriesContainer: {
    padding: 16,
  },
  categoryButton: {
    backgroundColor: Colors.black,
    borderWidth: 0.5,
    borderColor: Colors.gray1,
    borderRadius: 10,
    width: '32%',
    height: 60,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  gradientButtonColor: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    borderRadius: 10,
  },
});
