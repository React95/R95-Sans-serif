import { NAMES } from './constants';
import { TableModal } from './TableModal';
import { basic, supplement } from './shared';

export const SuplementLatin = () => {
  return (
    <TableModal
      position={{
        x: 360,
        y: 180,
      }}
      charset={supplement}
      title={NAMES.SUP_LATIN.title}
      icon={NAMES.SUP_LATIN.icon}
    />
  );
};

export const BasicLatin = () => {
  return (
    <TableModal
      charset={basic}
      title={NAMES.BASIC_LATIN.title}
      icon={NAMES.SUP_LATIN.icon}
      position={{
        x: 160,
        y: 80,
      }}
    />
  );
};
