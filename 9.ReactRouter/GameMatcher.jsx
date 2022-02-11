import React, { Component } from 'react';
import RSP from './RSP';
import Lotto from './Lotto';
import {useLocation, useNavigate, useMatch, Routes, Route} from 'react-router';

//동적 라우팅 매칭
const GameMatcher = () => {
    console.log("ASKDNAKJSDN")
    // console.log(props);
    // const location = useLocation();
    // const navigate = useNavigate();
    // const match = useMatch('/game/:name');
    // let urlSearchParams = new URLSearchParams(location.search.slice(1));
    // console.log(location);
    // console.log(navigate);
    // console.log(match?.params?.name);
    // console.log(urlSearchParams.get('hello'));
    // console.log(urlSearchParams.get('name'));
    return (
        <Routes>
          <Route path="rock-scissors-paper" element={<RSP />} />
          <Route path="lotto-generator" element={<Lotto />} />
          <Route path="aaaaa" element={<div/>} />
          <Route
            path="*"
            element={<div>
              일치하는 게임이 없습니다.
            </div>}
          />
        </Routes>
    );
}

export default GameMatcher;