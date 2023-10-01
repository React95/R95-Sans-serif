import { AllFontsModal } from './AllFontsModal';
import { BasicLatin } from './BasicLatin';
import { HelloModal } from './HelloModal';
import { TaskBar } from '@react95/core';

const App = () => {
  return (
    <>
      <HelloModal />
      <AllFontsModal />
      <BasicLatin />

      <TaskBar />
    </>
  );
};

export default App;
