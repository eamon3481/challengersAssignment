import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigationType} from '../navigation/StackNavigation';

type Props = {
  navigation: NativeStackNavigationProp<StackNavigationType, 'Home'>;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

export default HomeScreen;
