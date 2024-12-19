import React,{useContext, useState} from 'react';
import { DataContext } from '../App';


const Home = () => {
  const {data, loading} = useContext(DataContext)
  return (
    <div>
      {
        loading ? (
          <div>로딩중...</div>
        ) : (
          data.map((item) => (
            <div key={item.RCP_SEQ}>
              <span style={{color:'red'}}>{item.RCP_NM}</span>
              <span>{item.RCP_WAY2}</span>

            </div>
          ))
        )
      }
    </div>
  );
};

export default Home;