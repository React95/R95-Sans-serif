import { Frame } from '@react95/core';
import ChangeFontModal from './ChangeFontModal';

const HelloModal = () => {
  return (
    <ChangeFontModal
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

export default HelloModal;
