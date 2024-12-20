import React from 'react';
import { Link } from 'react-router-dom';
//리액트 아이콘
import { PiCookingPotFill } from "react-icons/pi";
import { MdCookie } from "react-icons/md";

const List = ({data}) => {
  
  return (
    <div className='list'>
      
      {
        data.map(({ATT_FILE_NO_MAIN, INFO_ENG, RCP_SEQ, RCP_WAY2, RCP_NM}) => ( //이미지경로, 열량, 조리방법, 메뉴명
          <div key={RCP_SEQ} className='item'>
            <Link to={`/recipe/${RCP_SEQ}`}>
              <div className="item-img">
                <img src={ATT_FILE_NO_MAIN} alt={RCP_NM} /> {/*이미지 */}
              </div>
              <div className="list-text-wrap">
                <div className="list-txt-title">{RCP_NM}</div>  {/*메뉴명 */}
                <div className="list-sub-txt-wrap">
                  <div className="list-txt-kal"><MdCookie className="kalIcon"/>{INFO_ENG} Kal</div>  {/*열량(칼로리) */}
                  <div className="list-txt-way"><PiCookingPotFill className="cookIcon"/>{RCP_WAY2}</div>  {/*조리방법 */}
                </div>
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  );
};

export default List;