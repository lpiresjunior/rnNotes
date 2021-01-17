import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, SimpleText, Button} from './styles';

export default () => {
  const navigation = useNavigation();
  return (
    <Container>
      <SimpleText>List</SimpleText>
      <Button title="Editar" onPress={() => navigation.navigate('EditNote')} />
    </Container>
  );
};
