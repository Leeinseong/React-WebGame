import React from 'react';
import { BrowserRouter, Link, Routes, Route, Switch } from 'react-router-dom';
import GameMatcher from './GameMatcher';

// react-router-dom v6로 업데이트 되면서 변경된 부분 중에 하나가 Switch가 Routes 로 바뀌었다.
const Games = () => {
  return (
    <BrowserRouter>
      {/* 공통인 부분 */}
      <div>
        <Link to="/game/rock-scissors-paper?hello=inseong&name=rock-scissors-paper">가위바위보</Link>
        &nbsp;
        <Link to="/game/lotto-generator">로또생성기</Link>
        &nbsp;
        <Link to="/game/index">게임 매쳐</Link>
      </div>
      {/* 바뀌는 부분 */}
      <div>
        <Routes>
          <Route path="/" element={<GameMatcher />} />
          <Route path="/game/*" element={<GameMatcher />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Games;