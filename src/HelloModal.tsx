import { Frame } from '@react95/core';
import ChangeFontModal from './ChangeFontModal';

export const HelloModal = () => {
  return (
    <ChangeFontModal
      position={{
        x: 10,
        y: -30,
      }}
      title="Hello world"
      renderContent={({ bold, fontFamily, fontSize, italic }) => {
        return (
          <Frame
            boxShadow="in"
            bg="white"
            p={12}
            fontFamily={`'${fontFamily}'`}
            fontSize={fontSize}
            fontStyle={italic ? 'italic' : 'normal'}
            fontWeight={bold ? 'bold' : 'normal'}
            mt={20}
          >
            Hello, from R95 Sans Serif
          </Frame>
        );
      }}
    />
  );
};
