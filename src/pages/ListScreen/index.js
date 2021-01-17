import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {Container, AddButton, AddButtonImg} from './styles';

export default () => {
  const navigation = useNavigation();
  const list = useSelector((state) => state.notes.list);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Suas anotações',
      headerRight: () => (
        <AddButton onPress={() => navigation.navigate('EditNote')}>
          <AddButtonImg source={require('../../assets/more.png')} />
        </AddButton>
      ),
    });
  }, [navigation]);

  return <Container />;
};
