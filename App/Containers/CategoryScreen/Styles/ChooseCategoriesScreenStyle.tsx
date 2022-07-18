import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts, Metrics} from '../../../Themes';

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.mainContainer,
    ...ApplicationStyles.screen.content,
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
    backgroundColor: Colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoriesWrap: {
    paddingTop: 10,
    flexGrow: 0,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  content: {
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  categoryName: {
    color: Colors.black,
  },
  require: {
    color: Colors.red,
  },
  categoryNameInput: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 10,
  },
});
