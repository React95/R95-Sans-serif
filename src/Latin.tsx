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
      title="Supplement Latin"
    />
  );
};

export const BasicLatin = () => {
  return (
    <TableModal
      charset={basic}
      title="Basic Latin"
      position={{
        x: 360,
        y: 180,
      }}
    />
  );
};
