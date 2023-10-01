import { Frame, Modal } from '@react95/core';
import { families } from './shared';

export const AllFontsModal = () => {
  return (
    <Modal
      closeModal={() => {
        console.log('close!');
      }}
      title="All at once - 8, 10, 12, 14, 18, and 24pt"
      defaultPosition={{
        x: 10,
        y: 180,
      }}
    >
      {families.map((family) => {
        return (
          <Frame
            fontFamily={`'${family}'`}
            boxShadow="in"
            bg="white"
            p={12}
            fontSize={38}
            mt={4}
            key={family}
          >
            {family}
          </Frame>
        );
      })}
    </Modal>
  );
};
