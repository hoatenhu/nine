import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../Themes/Image';

import styles from './Styles/ChooseCategoriesScreenStyle';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {getAsyncStorage} from '../../Functions/AsyncStorageFunction';
import {AsyncStoreKey} from '../../Config/AppConfig';
import {useDispatch} from 'react-redux';
import UserActions from '../../Redux/UserRedux';

const fakeData = {
  categories: [
    {
      _id: '627a71c1dfcfa579ffcc5260',
      name: 'Relationships',
    },
    {
      _id: '627a7a34dfcfa579ffcc5264',
      name: 'Family',
    },
    {
      _id: '627a7a3bdfcfa579ffcc5265',
      name: 'Self Harm',
    },
    {
      _id: '627a7a43dfcfa579ffcc5266',
      name: 'Friends',
    },
    {
      _id: '627a7a48dfcfa579ffcc5267',
      name: 'Hopes',
    },
    {
      _id: '627a7a57dfcfa579ffcc5268',
      name: 'Bullying',
    },
    {
      _id: '627a7a5fdfcfa579ffcc5269',
      name: 'Health',
    },
    {
      _id: '627a7a65dfcfa579ffcc526a',
      name: 'Work',
    },
    {
      _id: '627a7a6cdfcfa579ffcc526b',
      name: 'Music',
    },
    {
      _id: '627a7a75dfcfa579ffcc526c',
      name: 'Helpful Tips',
    },
    {
      _id: '627a7a7fdfcfa579ffcc526d',
      name: 'Parenting',
    },
    {
      _id: '627a7a86dfcfa579ffcc526e',
      name: 'Education',
    },
    {
      _id: '627a7a91dfcfa579ffcc526f',
      name: 'Religion',
    },
    {
      _id: '627a7a95dfcfa579ffcc5270',
      name: 'LGBT',
    },
    {
      _id: '627a7aa0dfcfa579ffcc5271',
      name: 'Pregnancy',
    },
    {
      _id: '627a7aa7dfcfa579ffcc5272',
      name: 'Positive',
    },
    {
      _id: '627a7aafdfcfa579ffcc5273',
      name: 'Eating Disorders',
    },
    {
      _id: '627a7ab9dfcfa579ffcc5274',
      name: 'Mental Health',
    },
    {
      _id: '627a7ac3dfcfa579ffcc5275',
      name: 'Self-Care',
    },
    {
      _id: '627a7acedfcfa579ffcc5276',
      name: 'I Need Help',
    },
    {
      _id: '627a7ad7dfcfa579ffcc5277',
      name: 'New Parents',
    },
    {
      _id: '627a7adfdfcfa579ffcc5278',
      name: 'Gaming',
    },
    {
      _id: '627a7ae5dfcfa579ffcc5279',
      name: 'Grief',
    },
    {
      _id: '627a7aeedfcfa579ffcc527a',
      name: 'Anxiety',
    },
    {
      _id: '627a7af6dfcfa579ffcc527b',
      name: 'Disabilities',
    },
    {
      _id: '627a7afedfcfa579ffcc527c',
      name: 'Depression',
    },
    {
      _id: '627a7b06dfcfa579ffcc527d',
      name: 'Life Hacks',
    },
    {
      _id: '627a7b10dfcfa579ffcc527e',
      name: 'Politics',
    },
    {
      _id: '627a7b14dfcfa579ffcc527f',
      name: 'Ask Nexle',
    },
    {
      _id: '627a7b1fdfcfa579ffcc5280',
      name: 'Ask Guys',
    },
    {
      _id: '627a7b24dfcfa579ffcc5281',
      name: 'Others',
    },
  ],
  totalCount: 31,
};

const ChooseCategoriesScreen = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation<any>();

  const [selectedCats, setSelectedCats] = useState<any>([]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handlePressCat = (cat: any) => {
    if (selectedCats.includes(cat._id)) {
      setSelectedCats(selectedCats.filter((id: any) => id !== cat._id));
    } else setSelectedCats([...selectedCats, cat._id]);
  };

  useEffect(() => {
    getAsyncStorage(AsyncStoreKey.ACCESS_TOKEN).then(accessToken => {
      accessToken
        ? dispatch(UserActions.checkTokenRequest(accessToken))
        : console.log('No AccessToken');
    });
  }, []);

  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} delayPressIn={0}>
          <Image
            style={styles.arrowLeft}
            source={require('../../Assets/Icons/right-arrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity disabled={selectedCats.length === 0} delayPressIn={0}>
          <Text
            style={[
              styles.doneButton,
              selectedCats.length === 0 && styles.hideDoneButton,
            ]}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.welcomeText}>Wellcome to Nexle Entrance Test</Text>
      <Text style={styles.subWelcomeText}>
        Please select categories what you would like to see on your feed. You
        can set this later on Filter.
      </Text>
    </>
  );
  return (
    <SafeAreaView edges={['top']} style={{}}>
      <Image
        source={images.chooseImage}
        resizeMode={'stretch'}
        style={styles.backgroundImage}
      />
      <LinearGradient
        start={{x: 0, y: 0.8}}
        end={{x: 0, y: 0}}
        colors={['#000000', '#000000', 'transparent']}
        style={styles.gradientBackground}
      />
      <FlatList
        ListHeaderComponent={renderHeader}
        // scrollEnabled={false}s
        data={fakeData.categories}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.categoriesContainer}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.categoryButton}
            delayPressIn={0}
            onPress={() => handlePressCat(item)}>
            {selectedCats.includes(item._id) && (
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
                colors={['#8A32A9', '#8A00FF']}
                style={styles.gradientButtonColor}
              />
            )}
            <Text style={styles.categoriesText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default ChooseCategoriesScreen;
