import {View, Text, Button, Switch} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {PratciseContext} from '../global/Context';
import {light} from '../global/Data';
import {Dark} from '../global/Data';

const Home = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Blank');
  };

  const {val, setVal1, val2, setVal2, val1, setVal, mode, toggleSwitch} =
    useContext(PratciseContext);

  const handleNavigation1 = () => {
    setVal1(val1 + 1);
    setVal2(val2 + 2);
    setVal(val + 1);
  };

  return (
    <View
      style={{
        backgroundColor:
          mode === false ? Dark.backgroundColour : light.backgroundColour,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: mode === true ? light.color : Dark.color}}>
        blank
      </Text>
      <Text style={{color: mode === true ? light.color : Dark.color}}>
        {val}
      </Text>
      <Text style={{color: mode === true ? light.color : Dark.color}}>
        {val1}
      </Text>
      <Text style={{color: mode === true ? light.color : Dark.color}}>
        {val2}
      </Text>
      <Button
        onPress={handleNavigation1}
        title="INCREASE"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={handleNavigation}
        title="Next Screen"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={light ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={mode}
      />
    </View>
  );
};

export default Home;
