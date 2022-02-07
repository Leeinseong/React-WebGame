import React, { memo, useState} from 'react';

//props 구조분해
//props의 값은 수정하면 안된다. - 정 필요하다면 useState 사용
const Try = memo(({tryInfo}) => {
  const [result, setResult] = useState(tryInfo.result);
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div onClick={() => setResult(0)}>{result}</div>
    </li>
  );
});

export default Try;