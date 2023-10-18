import { Frame, Modal } from '@react95/core';
import { families } from './shared';
import { ModalContext, NAMES } from './ModalProvider';
import { useContext } from 'react';

export const AllFontsModal = () => {
  const { modal, removeModal } = useContext(ModalContext);

  return (
    modal.includes(NAMES.ALL_IN_ONCE) && (
      <Modal
        closeModal={() => {
          removeModal(NAMES.ALL_IN_ONCE);
        }}
        title={NAMES.ALL_IN_ONCE}
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
    )
  );
};
