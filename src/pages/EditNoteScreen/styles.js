import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #333;
`;

export const TitleInput = styled.TextInput`
  font-size: 20px;
  font-weight: bold;
  padding: 15px;
  color: #fff;
  border-style: solid;
  border-bottom-color: #222;
  border-bottom-width: 1px;
`;

export const BodyInput = styled.TextInput`
  flex: 1;
  padding: 15px;
  font-size: 15px;
  color: #fff;
`;

export const SaveButton = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const SaveButtonImg = styled.Image`
  width: 24px;
  height: 24px;
`;

export const CloseButton = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const CloseButtonImg = styled.Image`
  width: 20px;
  height: 20px;
`;
