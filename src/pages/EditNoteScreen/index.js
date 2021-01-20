import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import {Container, TitleInput, BodyInput} from './styles';

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
    </Container>
  );
};
