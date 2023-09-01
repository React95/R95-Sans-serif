import styled from 'styled-components';
import { Frame } from '@react95/core';

export const families = [
  'R95 Sans Serif 8pt',
  'R95 Sans Serif 10pt',
  'R95 Sans Serif 12pt',
  'R95 Sans Serif 14pt',
  'R95 Sans Serif 18pt',
  'R95 Sans Serif 24pt',
];

export const VariableFrame = styled(Frame)<{ family: string }>`
  font-family: '${({ family }) => family}';
`;
