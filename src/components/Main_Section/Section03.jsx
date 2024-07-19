import React from 'react'
import * as S from './Section03.styled'
import Img01 from '../../assets/img/section03_1.png'
import Img02 from '../../assets/img/section03_2.png'
import Img03 from '../../assets/img/section03_3.png'

const Section03 = () => {
    return (
        <S.Section03Wrap>
        <S.Section03Content>
            <img src={Img01}></img>
            <div>
                <p className='tage'>VISION</p>
                <h2>
                    IT 교육 기회를 제공하여<br/>
                    꿈꾸던 가능성을 열어준다.
                </h2>
            </div>
        </S.Section03Content>
        <S.Section03Content className='right'>
            
            <div>
                <p className='tage'>VISION</p>
                <h2>
                    IT 기술로 IT 교육의 문제를<br/>
                    해결한다.
                </h2>
            </div>
            <img src={Img02}></img>
              {/*두번째 세션도 위와 동일하게 <p> 태그를 사용하여 'VISION' 라벨을 작성. 이때 클래스이름은 right */}
                
                    {/* 태그 라벨 및 본문 설명 추가-> <p>(클래스이름은 tage로), <h2>, 태그를 사용하여 작성하세요.*/}
                    
                
                {/* 이미지 삽입: Figma 레이아웃을 참고하여 적절한 <img> 태그를 사용하세요. 이미지 대체 텍스트 이름은 Img02 */}
        </S.Section03Content>
        <S.Section03Content>
            <img src={Img03}></img>
            <div>
                <p className='tage'>VISION</p>
                <h2>
                    지속성장이 가능한 IT<br/>
                    커뮤니티를 구축한다.
                </h2>
            </div>
             {/*Figma 레이아웃을 참고하여 <img> 태그를 사용하세요. 이미지 대체 텍스트 이름은 Img03 */}
                
                {/*위와 동일하게 <p> 태그를 사용하여 'VISION' 라벨을 작성. 클래스이름은 tage와 english 사용해야함*/}
        </S.Section03Content>
    </S.Section03Wrap>
    )
}

export default Section03