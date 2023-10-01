import { ReactNode, FC, ComponentProps } from 'react';
import ChangeFontModal, { RenderContentProps } from './ChangeFontModal';
import { Frame } from '@react95/core';

const chunkSize = 8;

const Rows: FC<RenderContentProps & { charset: string[] }> = ({
  fontSize,
  bold,
  fontFamily,
  italic,
  charset,
}) => {
  const allRows: ReactNode[] = [];

  for (let i = 0; i < charset.length; i += chunkSize) {
    const row = charset.slice(i, i + chunkSize);

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

export const TableModal = ({
  charset,
  title,
  position,
}: { charset: string[] } & Pick<
  ComponentProps<typeof ChangeFontModal>,
  'title' | 'position'
>) => {
  return (
    <ChangeFontModal
      position={position}
      title={title}
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
                charset={charset}
              />
            </tbody>
          </table>
        );
      }}
    />
  );
};
