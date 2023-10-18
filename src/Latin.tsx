import { NAMES } from './ModalProvider';
import { TableModal } from './TableModal';
import { basic, supplement } from './shared';

export const SuplementLatin = () => {
  return (
    <TableModal
      position={{
        x: 160,
        y: 80,
      }}
      charset={supplement}
      title={NAMES.SUP_LATIN}
    />
  );
};

export const BasicLatin = () => {
  return (
    <TableModal
      charset={basic}
      title={NAMES.BASIC_LATIN}
      position={{
        x: 360,
        y: 180,
      }}
    />
  );
};
