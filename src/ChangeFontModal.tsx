import {
  Frame,
  Modal,
  Fieldset,
  Dropdown,
  Input,
  Checkbox,
} from '@react95/core';
import { ComponentProps, ReactNode, useContext, useState } from 'react';
import { families } from './shared';
import { ModalContext } from './ModalContext';

export type RenderContentProps = {
  italic: boolean;
  bold: boolean;
  fontFamily: string;
  fontSize: number;
};

const ChangeFontModal = ({
  renderContent,
  title,
  fontSize: size = 54,
  bold: weight = false,
  italic: style = false,
  position,
  icon,
}: {
  renderContent: (props: RenderContentProps) => ReactNode;
  title: string;
  position: ComponentProps<typeof Modal>['defaultPosition'];
  icon: ComponentProps<typeof Modal>['icon'];
} & Partial<Omit<RenderContentProps, 'fontFamily'>>) => {
  const [fontSize, setFontSize] = useState(size);
  const [bold, setBold] = useState(weight);
  const [italic, setItalic] = useState(style);
  const [fontFamily, setFontFamily] = useState<string>(families[0]);
  const { modal, removeModal } = useContext(ModalContext);

  return (
    modal.includes(title) && (
      <Modal
        closeModal={() => {
          removeModal(title);
        }}
        title={title}
        defaultPosition={position}
        icon={icon}
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

        {renderContent({ italic, bold, fontFamily, fontSize })}
      </Modal>
    )
  );
};

export default ChangeFontModal;
