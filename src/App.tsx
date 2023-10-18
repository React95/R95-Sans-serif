import { AllFontsModal } from './AllFontsModal';
import { BasicLatin, SuplementLatin } from './Latin';
import { HelloModal } from './HelloModal';
import { TaskBar, List } from '@react95/core';
import { useClippy } from '@react95/clippy';
import { useContext, useEffect } from 'react';
import { ModalContext, NAMES } from './ModalProvider';
import { WindowsExplorer } from '@react95/icons';

const App = () => {
  const { clippy } = useClippy();
  const { addModal } = useContext(ModalContext);

  useEffect(() => {
    if (clippy) {
      clippy.play('Wave');
    }

    const speak = setTimeout(() => {
      clippy.speak("Don't forget to star the project ⭐");
    }, 3000);

    const animate = setTimeout(() => {
      const animations = clippy.animations() as string[];
      const pos = Math.abs(Math.random() * animations.length);

      clippy.Play(animations[pos]);
    }, 8000);

    return () => {
      clearTimeout(speak);
      clearTimeout(animate);
    };
  }, [clippy]);

  return (
    <>
      <HelloModal />
      <AllFontsModal />
      <SuplementLatin />
      <BasicLatin />

      <TaskBar
        list={
          <List>
            <List.Item
              icon={<WindowsExplorer variant="32x32_4" />}
              onClick={() => addModal(NAMES.HELLO_WORLD)}
            >
              Hello World
            </List.Item>
            <List.Item
              icon={<WindowsExplorer variant="32x32_4" />}
              onClick={() => addModal(NAMES.BASIC_LATIN)}
            >
              Basic Latin
            </List.Item>
            <List.Item
              icon={<WindowsExplorer variant="32x32_4" />}
              onClick={() => addModal(NAMES.SUP_LATIN)}
            >
              Supplement Latin
            </List.Item>
            <List.Item
              icon={<WindowsExplorer variant="32x32_4" />}
              onClick={() => addModal(NAMES.ALL_IN_ONCE)}
            >
              All at once
            </List.Item>
          </List>
        }
      />
    </>
  );
};

export default App;
