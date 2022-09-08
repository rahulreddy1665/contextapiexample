import {View, Text, Button, Switch} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {PratciseContext} from '../global/Context';
import I18n from '../Il8n/il8n';
import {light} from '../global/Data';
import {Dark} from '../global/Data';
import Il8n from '../Il8n/il8n';

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

  const handleLanguage = () => {
    console.log(I18n.currentLocale());
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
      <Text
        style={{
          color: mode === true ? light.color : Dark.color,
          marginTop: 10,
          marginBottom: 10,
        }}>
        IL8N Language translation
      </Text>
      <Text style={{color: mode === true ? light.color : Dark.color}}>
        {I18n.t('Hello')}
      </Text>
      <Text style={{color: mode === true ? light.color : Dark.color}}>
        {I18n.t('Switch')}
      </Text>
      <Text style={{color: mode === true ? light.color : Dark.color}}>
        {I18n.t('Text')}
      </Text>

      <Button
        onPress={handleNavigation1}
        title={I18n.t('Increase')}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={handleNavigation}
        title={I18n.t('Next screen')}
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
// @flow
