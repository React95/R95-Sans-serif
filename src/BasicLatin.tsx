import { ReactNode, FC } from 'react';
import ChangeFontModal, { RenderContentProps } from './ChangeFontModal';
import { Frame } from '@react95/core';

const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'.split(
    '',
  );

const chunkSize = 8;

const Rows: FC<RenderContentProps> = ({
  fontSize,
  bold,
  fontFamily,
  italic,
}) => {
  const allRows: ReactNode[] = [];

  for (let i = 0; i < characters.length; i += chunkSize) {
    const row = characters.slice(i, i + chunkSize);

    allRows.push(
      <tr key={`row-${i}`}>
        {row.map((char) => {
          return (
            <Frame
              as="td"
              key={`row-${i}-char-${char}`}
              boxShadow="none"
              fontSize={fontSize}
              textAlign="center"
              fontFamily={`'${fontFamily}'`}
              fontStyle={italic ? 'italic' : 'normal'}
              fontWeight={bold ? 'bold' : 'normal'}
            >
              {char}
            </Frame>
          );
        })}
      </tr>,
    );
  }

  return allRows;
};

export const BasicLatin = () => {
  return (
    <ChangeFontModal
      position={{
        x: 360,
        y: 180,
      }}
      title="Basic Latin"
      fontSize={30}
      renderContent={({ fontSize, italic, bold, fontFamily }) => {
        return (
          <table>
            <tbody>
              <Rows
                fontSize={fontSize}
                italic={italic}
                bold={bold}
                fontFamily={fontFamily}
              />
            </tbody>
          </table>
        );
      }}
    />
  );
};
