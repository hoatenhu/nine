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
  addButton: {
    position: 'absolute',
    bottom: 70,
    right: 40,
    backgroundColor: Colors.lightBlue,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  addText: {
    color: Colors.white,
    fontSize: 32,
    textAlign: 'center',
    lineHeight: 35,
  },
  categoryItemWrap: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    width: '94%',
    alignSelf: 'center',
  },
  editWrap: {
    marginLeft: 'auto',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  editText: {
    color: Colors.lightBlue,
  },
  deleteText: {
    color: Colors.red,
  },
  selectCatButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    height: 40,
    width: 130,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewInModal: {
    height: 500,
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  showSelectListIcon: {
    transform: [{rotate: '90deg'}],
    height: 20,
    width: 20,
    alignSelf: 'flex-end',
  },
  categoryInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  closeModalButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  confirmAddButton: {
    alignSelf: 'center',
    marginTop: 100,
    borderRadius: 10,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
