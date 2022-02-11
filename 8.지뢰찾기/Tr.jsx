import React, {memo, useContext} from 'react';
import { TableContext } from './MineSearch';
import Td from './Td';

const Tr = memo(({rowIndex}) => {
  const { tableData } = useContext(TableContext);
  return (
    <tr>
      {Array(tableData[0].length).fill().map((td, i) => (
        <Td key={i} rowIndex={rowIndex} cellIndex={i} ></Td>
      ))}
    </tr>
  );
});

export default Tr;