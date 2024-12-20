import React, {useContext} from 'react';  //상위 컴포넌트에서 프롭스 내려받기
import {DataContext} from './../App';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const {data, loading} = useContext(DataContext);

  if(loading){  //loading이 존재하면 코드 실행
    return <h1 className='loading'>데이터 로딩중 입니다.</h1>
  }
  //카테고리 배열 생성
  const categories = [...new Set(data.map((item) => item.RCP_PAT2) )];  //중복된 제목은 제거하고 고유한 값을 set객체로 생성하고 새로운 배열을 만들어 categories변수에 반환

  //색상을 구분하는 함수 생성
  const activeStyle = {
    color: '#f00',
    textShadow: '2px 2px 5px #000'
  }

  return (
    <div className='nav'>
      <div className="inner">
          <ul className="menu">
            <li>
            <NavLink to='/' style={({isActive})=> (isActive? activeStyle: undefined)}>All</NavLink>
            </li>
           {
              categories.map((category) => (
                <li key={category.RCP_SEQ}>
                    <NavLink to={`category/${category}`} style={({isActive})=> (isActive? activeStyle: undefined)}>{category}</NavLink>
                </li>
              ))
            }
          </ul>
      </div>
    </div>
  );
};

export default Nav;