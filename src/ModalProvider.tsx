import { FC, ReactNode, createContext, useContext, useState } from 'react';

export const ModalContext = createContext<{
  modal: string[];
  addModal: (title: string) => void;
  removeModal: (title: string) => void;
}>({
  modal: [],
  addModal: () => {},
  removeModal: () => {},
});

export const NAMES = {
  HELLO_WORLD: 'Hello World',
  ALL_IN_ONCE: 'All at once - 8, 10, 12, 14, 18, and 24pt',
  SUP_LATIN: 'Supplement Latin',
  BASIC_LATIN: 'Basic Latin',
};

export const ModalProvider: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  const [modal, setModal] = useState(Object.values(NAMES));

  const addModal = (title: string) => {
    if (!modal.includes(title)) setModal((m) => [...m, title]);
  };

  const removeModal = (title: string) => {
    setModal((modals) => modals.filter((m) => m !== title));
  };

  return (
    <ModalContext.Provider
      value={{
        modal,
        addModal,
        removeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
