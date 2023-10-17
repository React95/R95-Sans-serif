import { AllFontsModal } from './AllFontsModal';
import { BasicLatin, SuplementLatin } from './Latin';
import { HelloModal } from './HelloModal';
import { TaskBar } from '@react95/core';
import { useClippy } from '@react95/clippy';
import { useEffect } from 'react';

const App = () => {
  const { clippy } = useClippy();

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

      <TaskBar />
    </>
  );
};

export default App;
