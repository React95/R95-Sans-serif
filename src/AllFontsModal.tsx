import { Modal } from '@react95/core';
import { families, VariableFrame } from './shared';

function AllFontsModal() {
  return (
    <Modal
      closeModal={() => {
        console.log('close!');
      }}
      title="All at once"
      defaultPosition={{
        x: 20,
        y: 240,
      }}
    >
      {families.map((family) => {
        return (
          <VariableFrame
            family={family}
            boxShadow="in"
            bg="white"
            p={12}
            fontSize={38}
            mt={4}
            key={family}
          >
            {family}
          </VariableFrame>
        );
      })}
    </Modal>
  );
}

export default AllFontsModal;
