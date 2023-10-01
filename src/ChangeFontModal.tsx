import {
  Frame,
  Modal,
  Fieldset,
  Dropdown,
  Input,
  Checkbox,
} from '@react95/core';
import { useState } from 'react';
import { families } from './shared';

function ChangeFontModal() {
  const [fontSize, setFontSize] = useState(54);
  const [italic, setItalic] = useState(false);
  const [bold, setBold] = useState(false);
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
          <Checkbox checked={italic} onChange={() => setItalic(!italic)}>
            Italic
          </Checkbox>
          <Checkbox checked={bold} onChange={() => setBold(!bold)}>
            Bold
          </Checkbox>
        </Frame>
      </Fieldset>

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
        Hello, from wherever you are
      </Frame>
    </Modal>
  );
}

export default ChangeFontModal;
