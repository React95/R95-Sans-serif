import { Frame, Modal, Fieldset, Dropdown, Input } from '@react95/core';
import { useState } from 'react';
import { families, VariableFrame } from './shared';

function ChangeFontModal() {
  const [fontSize, setFontSize] = useState(54);
  const [fontFamily, setFontFamily] = useState<string>(families[0]);

  return (
    <Modal
      closeModal={() => {
        console.log('close!');
      }}
      title="Change me"
      defaultPosition={{
        x: 20,
        y: 0,
      }}
    >
      <Fieldset legend="Config">
        <Frame boxShadow="none" display="flex" gap={8}>
          <Dropdown
            onChange={({ target }) => {
              setFontFamily((target as HTMLSelectElement).value);
            }}
            defaultValue={fontFamily}
            options={families}
          />

          <Input
            type="number"
            style={{ height: 20 }}
            onChange={({ target }: { target: HTMLInputElement }) => {
              setFontSize(parseInt(target.value));
            }}
            defaultValue={fontSize}
          />
        </Frame>
      </Fieldset>

      <VariableFrame
        family={fontFamily}
        boxShadow="in"
        bg="white"
        p={12}
        fontFamily={fontFamily}
        fontSize={fontSize}
        mt={20}
      >
        Hello, from wherever you are
      </VariableFrame>
    </Modal>
  );
}

export default ChangeFontModal;
