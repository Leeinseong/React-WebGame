import React, { useState, useRef, useCallback, useMemo } from 'react';

//React.memo, useMemo, useCallback의 차이점을 한번더 생각해보기

const ResponseCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요.');
  const [result, setResult] = useState([]);

  //Hooks로 변환할때는 this의 속성들을 Ref로 표현한다.  Ref에는 current가 들어있다.
  //state와 ref의 차이 useRef의 값이 바뀌어도 return 부분이 다시 실행되지않는다. -> 불필요한 rendering 최소화
  const timeout = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = useCallback(() => {
    if (state === 'waiting') {
      timeout.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭');
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');
    } else if (state === 'ready') { // 성급하게 클릭
      clearTimeout(timeout.current);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
    } else if (state === 'now') { // 반응속도 체크
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작하세요.');
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  }, [state]);

  const onReset = useCallback(() => {
    setResult([]);
  }, []);

  //result.reduce((a, c) => a + c) : 합계를 구하는 reduce
  const renderAverage = () => {
    return (
      result.length === 0
      ? null
      : <>
          <div>평균 시간: {result?.reduce((a, c) => a + c) / result.length}ms</div>
          <button onClick={onReset}>리셋</button>
        </>
    )
  };

  return (
    <>
      <div
        id="screen"
        className={state}
        onClick={onClickScreen}
      >
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;