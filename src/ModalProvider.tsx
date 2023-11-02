import { FC, ReactNode, useState } from 'react';
import { ModalContext } from './ModalContext';
import { NAMES } from './constants';

const openedModals = Object.values(NAMES).map((v) => v.title);

export const ModalProvider: FC<{
  children?: ReactNode;
}> = ({ children }) => {
  const [modal, setModal] = useState(openedModals);

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
