import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {
  Container,
  AddButton,
  AddButtonImg,
  NotesList,
  NoNotes,
  NoNotesImg,
  NoNotesText,
} from './styles';
import NoteItem from '../../components/NoteItem';

export default () => {
  const navigation = useNavigation();
  const list = useSelector((state) => state.notes.list);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Suas Anotações',
      headerRight: () => (
        <AddButton onPress={() => navigation.navigate('EditNote')}>
          <AddButtonImg source={require('../../assets/more.png')} />
        </AddButton>
      ),
    });
  }, [navigation]);

  const handleNotePress = (index) => {
    navigation.navigate('EditNote', {
      NoteIndex: index,
    });
  };

  return (
    <Container>
      {list.length > 0 ? (
        <NotesList
          data={list}
          renderItem={({item, index}) => (
            <NoteItem data={item} index={index} onPress={handleNotePress} />
          )}
          keyExtractor={({item, index}) => String(index)}
        />
      ) : (
        <NoNotes>
          <NoNotesImg source={require('../../assets/note.png')} />
          <NoNotesText>Nenhuma anotação</NoNotesText>
        </NoNotes>
      )}
    </Container>
  );
};
