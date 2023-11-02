import { Frame, Modal } from '@react95/core';
import { families } from './shared';
import { NAMES } from './constants';
import { ModalContext } from './ModalContext';
import { useContext } from 'react';

export const AllFontsModal = () => {
  const { modal, removeModal } = useContext(ModalContext);

  return (
    modal.includes(NAMES.ALL_IN_ONCE.title) && (
      <Modal
        closeModal={() => {
          removeModal(NAMES.ALL_IN_ONCE.title);
        }}
        title={NAMES.ALL_IN_ONCE.title}
        defaultPosition={{
          x: 10,
          y: 180,
        }}
        icon={NAMES.ALL_IN_ONCE.icon}
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
