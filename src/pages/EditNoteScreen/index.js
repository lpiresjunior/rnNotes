import React, {useState} from 'react';
import {Container, TitleInput, BodyInput} from './styles';

export default () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

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
