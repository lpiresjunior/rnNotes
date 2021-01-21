import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  Container,
  TitleInput,
  BodyInput,
  SaveButton,
  SaveButtonImg,
  CloseButton,
  CloseButtonImg,
  DeleteButton,
  DeleteButtonText,
} from './styles';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.notes.list);

  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [status, setStatus] = useState('new');

  useEffect(() => {
    if (route.params?.NoteIndex !== undefined && list[route.params.NoteIndex]) {
      setStatus('edit');
      setTitle(list[route.params?.NoteIndex].title);
      setBody(list[route.params?.NoteIndex].body);
    }
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: status === 'new' ? 'Nova Anotação' : 'Editar Anotação',
      headerLeft: () => (
        <CloseButton onPress={handleCloseButton}>
          <CloseButtonImg source={require('../../assets/close.png')} />
        </CloseButton>
      ),
      headerRight: () => (
        <SaveButton onPress={handleSaveButton}>
          <SaveButtonImg source={require('../../assets/save.png')} />
        </SaveButton>
      ),
    });
  }, [status, title, body]);

  const handleCloseButton = () => {
    navigation.goBack();
  };

  const handleSaveButton = () => {
    if (title && body) {
      if (status === 'new') {
        dispatch({
          type: 'ADD_NOTE',
          payload: {title, body},
        });
      } else {
        dispatch({
          type: 'EDIT_NOTE',
          payload: {
            key: route.params.NoteIndex,
            title,
            body,
          },
        });
      }
      navigation.goBack();
    } else {
      alert('Você precisa preencher todos os campos');
    }
  };

  const handleDeleteButton = () => {
    dispatch({
      type: 'DELETE_NOTE',
      payload: {
        key: route.params.NoteIndex,
      },
    });
    navigation.goBack();
  };

  return (
    <Container>
      <TitleInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        placeholder="Título"
        placeholderTextColor="#CCC"
      />
      <BodyInput
        value={body}
        onChangeText={(text) => setBody(text)}
        placeholder="... "
        placeholderTextColor="#CCC"
        multiline={true}
        textAlignVertical="top"
        autoFocus={true}
      />

      {status === 'edit' && (
        <DeleteButton onPress={handleDeleteButton}>
          <DeleteButtonText>Excluir Anotação</DeleteButtonText>
        </DeleteButton>
      )}
    </Container>
  );
};
