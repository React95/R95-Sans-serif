import { AllFontsModal } from './AllFontsModal';
import { BasicLatin, SuplementLatin } from './Latin';
import { HelloModal } from './HelloModal';
import { TaskBar } from '@react95/core';

const App = () => {
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
