import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {SafeAreaView} from 'react-native-safe-area-context';
import Modal from 'react-native-modal';

import images from '../../Themes/Image';

import styles from './Styles/ChooseCategoriesScreenStyle';
import {useNavigation} from '@react-navigation/native';

import {useDispatch} from 'react-redux';

const fakeData = {
  categories: [
    {
      _id: '627a71c1dfcfa579ffcc5260',
      name: 'Phở Hà Nội',
      category: 'dish',
      type: 'Phở',
      rate: 4,
      ordered: 1201,
    },
    {
      _id: '627a7a34dfcfa579ffcc5264',
      name: 'Sinh tố bơ',
      category: 'drink',
      type: 'Sinh tố',
    },

    {
      _id: '627a7b24dfcfa579ffcc5281',
      name: 'Others',
      category: 'drink',
      type: 'Sinh tố',
    },
  ],
  totalCount: 31,
};

const ChooseCategoriesScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation<any>();

  const [selectedCats, setSelectedCats] = useState<any>([]);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [items, setItems] = useState<any>(fakeData.categories);

  const [newItem, setNewItem] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    rate: 4,
    ordered: 1201,
  });

  const toggleModal = () => {
    setModalVisible(prevIsModalVisible => !prevIsModalVisible);
  };

  const handleChangeAddNewItem = (value: any) => {
    setNewItem({...newItem, category: value});
  };

  const handleCloseAddCategoryModal = () => {};

  const handleGoBack = () => {
    navigation.goBack();
  };

  const renderCategories = ({item, index}: {item: any; index: any}) => (
    <View key={`category_key_${index}`} style={styles.categoryItemWrap}>
      <Image source={images.dish} style={{height: 50, width: 50}} />
      <Text>{item.name}</Text>
      <View style={styles.editWrap}>
        <TouchableOpacity delayLongPress={0}>
          <Text style={styles.editText}>Chỉnh sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity delayLongPress={0}>
          <Text style={styles.deleteText}>Xoá</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  console.log({newItem});
  return (
    <SafeAreaView edges={['top']} style={{flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} delayPressIn={0}>
          <Image
            style={styles.arrowLeft}
            source={require('../../Assets/Icons/right-arrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal style={styles.categoriesWrap}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Tất cả</Text>
          <View style={{height: 1, backgroundColor: 'black'}} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Món ăn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Đồ uống</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Khác</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={{flex: 1}}>
        <FlatList
          data={items}
          renderItem={renderCategories}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity
        style={styles.addButton}
        delayLongPress={0}
        onPress={toggleModal}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        useNativeDriver
        hideModalContentWhileAnimating
        animationOutTiming={10}
        backdropTransitionInTiming={0}
        backdropTransitionOutTiming={0}
        animationIn={'fadeIn'}
        animationOut={'fadeOut'}>
        <View style={styles.viewInModal}>
          <TouchableOpacity
            delayLongPress={0}
            style={styles.closeModalButton}
            onPress={toggleModal}>
            <Text>X</Text>
          </TouchableOpacity>

          <Text>Danh mục</Text>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 10,
              padding: 8,
            }}>
            <RNPickerSelect
              onValueChange={handleChangeAddNewItem}
              items={[
                {label: 'Món ăn', value: 'dishes'},
                {label: 'Đồ uống', value: 'drinks'},
                {label: 'Khác', value: 'other'},
              ]}
            />
          </View>

          <Text style={{marginTop: 10}}>Tên món</Text>
          <TextInput style={styles.categoryInput} placeholder="Phở bò" />
          <View>
            <Text>Giá</Text>
            <TextInput
              style={styles.categoryInput}
              keyboardType="numeric"
              placeholder="30000"
            />
            <Text style={{position: 'absolute', top: 27, right: 10}}>VNĐ</Text>
          </View>

          <Text>Mô tả</Text>
          <TextInput
            style={styles.categoryInput}
            placeholder="Món ăn siêu ngon và bổ dưỡng..."
          />
          <TouchableOpacity style={styles.confirmAddButton}>
            <Text>Thêm</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ChooseCategoriesScreen;
