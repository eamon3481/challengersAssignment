import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/routers';
import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components/native';

import ChallengersLogo from '../assets/icons/ChallengersLogo';
import ShoppingBasketIcon from '../assets/icons/ShoppingBasketIcon';
import theme from '../themes';
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
};

const MainHeader: React.FC<Props> = ({navigation}) => {
  const handlePressShoppingBasket = () => {
    navigation.navigate('Cart');
  };
  return (
    <SafeAreaView>
      <Header>
        <HeaderTextView>
          <ChallengersLogo width={32} height={32} color={theme.colors.RED} />
          <HeaderText>challengers</HeaderText>
        </HeaderTextView>
        <ShoppingBasketIcon
          onPress={handlePressShoppingBasket}
          width={28}
          height={28}
          color={'black'}
        />
      </Header>
    </SafeAreaView>
  );
};

export default MainHeader;

const HeaderTextView = styled.View`
  align-items: center;
  flex-direction: row;
`;

const HeaderText = styled.Text`
  font-size: 20px;
  margin-left: 4px;
  font-weight: bold;
  color: black;
`;

const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
`;
