import { createContext, useContext } from 'react';

export const ModalContext = createContext<{
  modal: string[];
  addModal: (title: string) => void;
  removeModal: (title: string) => void;
}>({
  modal: [],
  addModal: () => {},
  removeModal: () => {},
});

export const useModal = () => useContext(ModalContext);
