import React from "react";
import Page from "../components/Page"

const SPSD101 = () => {
  return (
    <section>
      <h2 className="title">
        <span style={{fontWeight: '900'}}>SOCIUM<sup>®</sup></span> 휴대용 시험지 검출기 (SPSD101)</h2>
      <div className="row">
        <div className="col-sm-6">
          <img src="./images/products/product.png" alt="product" width="100%" />
        </div>
        <div className="col-sm-6">
          <h5><span style={{ fontWeight: '500' }}>SOCIUM<sup>®</sup></span> 휴대용 시험지 검출기</h5>
          <p>
            는 별도의 SOCIUM 전용 검사지 를 사용하여 반려동물로부터 채취한 소변의 농도를 분석할 수 있도록
            설계된 기기입니다. 특허 받은 휴대용 시험지 검출기에 SOCIUM 전용 검사지 를 삽입하여 검출기 내부에
            탑재된 LED광원에서 반사되는 색도의 심연영상을 이용하여 체외 검지를 하고, 자체 이미지 인식 알고리
            즘 및 Cloud Big data를 이용한 AI 계산을 통해 검사지 의 농도를 정밀 분석하여 이를 무선전송기술
            (Bluetooth)을 이용하여 스마트 폰 APP에 전송하여, 의료 진의 빠른 선행 조치를 할 수 있도록 결과물
            을 제공하는 반려동물의 자가진단을 신속하고 정확하게  검사 가능한 가능한  공식인증 동물용 의료기기
            입니다.
          </p>

          <div style={{backgroundColor: 'skyblue', color: 'white', padding:'10px'}}>
            <h5><span style={{ fontWeight: '500' }}>SOCIUM<sup>®</sup></span> 휴대용 시험지 검출기(SPSD101)
            제품 구성</h5>
            <ul>
              <li>검출기 본체</li>
              <li>사용 설명서</li>
              <li>배터리(AAA x 3개)</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

const SPUT4 = () => {
  return (
    <section>
      <h2 className="title">
        <span style={{fontWeight: '900'}}>SOCIUM<sup>®</sup></span> 소변검사 시험지 (SPUT-4)</h2>      
      <div className="row">
        <div className="col-sm-6">
          <img src="./images/products/product2.png" alt="product2" width="100%" />
        </div>
        <div className="col-sm-6">
          <h5><span style={{ fontWeight: '500' }}>SOCIUM<sup>®</sup></span> 소변검사 시험지(SPUT-4)</h5>
          <p>
            는 SOCIUM 휴대용 검사기에 반려동물로부터 채취한 소변을 시험지(SPUT-4)에 충분히 묻히고, 전용 Cassette를 
            이용하여 SOCIUM 휴대용 시험지 검출기(SPSD101)에 삽입하여 4가지 항목(Glucose, Protein, pH, Occult Blood)에 
            대한 검출을 할 수 있도록 만들어진 시험지로 측정된 4가지 항목별 결과를 토대로 애완동물의 탄수화물 대사, 신장 
            질환, 생식기 질환, 요로질환 등 반려동물의 신체균형 정보를 Check 할 수 있도록 도와 줍니다. 측정 결과를 바탕으로 
            필요 시 의료 진의 빠른 선행 조치를 할 수 있도록 결과물을 제공하여 반려동물용의 삶의 질을 향상 시켜주기 위해 
            개발된 공식인증 동물용 의료기기입니다.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <table className="table table-striped" style={{textAlign:'center'}}>
            <thead>
              <tr>
                <th style={{width: '40%'}}>검사항목</th><th>위험질환</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Glucose<br/>(포도당)</td>
                <td>당뇨병, 부신 피질 기능이상, 갑상선기능 항진 증, 췌장염</td>
              </tr>
              <tr>
                <td>Protein<br/>(단백질)</td>
                <td>당뇨병, 요로감염, 방광염, 신장염</td>
              </tr>
              <tr>
                <td>pH Level<br/>(산알칼리농도)</td>
                <td>만성신부전, 요로감염, 당뇨병</td>
              </tr>
              <tr>
                <td>Occult Blood<br/>(잠혈)</td>
                <td>요로 계 손상, 신장 및 요로결석, 방광염, 전립선염</td>
              </tr>
            </tbody>
          </table>
          <p>※ 본 검사 지의 측정결과는 동물병원의 진료를 대체할 수 없습니다. 
          측정결과에 의문이 있으면 전문 의료인과 상담하세요.</p>        
        </div>
        <div className="col-sm-6">
          <div style={{backgroundColor: 'skyblue', color: 'white', padding:'10px'}}>
            <h5><span style={{ fontWeight: '500' }}>SOCIUM<sup>®</sup></span> 
              소변검사 검사지 제품 구성 (SPUT-4E5)</h5>
            <ul>
              <li>검사지 5개 (낱개 포장)</li>
              <li>휴대용 검사기 전용 카세트</li>
              <li>사용설명서</li>
            </ul>
          </div>
          <br/><br/>
          <div style={{backgroundColor: 'skyblue', color: 'white', padding:'10px'}}>
            <h5><span style={{ fontWeight: '500' }}>SOCIUM<sup>®</sup></span> 
              소변검사 검사지 제품 구성 (SPUT-4E10)</h5>
            <ul>
              <li>검사지 10개 (낱개 포장)</li>              
              <li>사용설명서</li>
              <li>휴대용 검사기 전용 카세트 없음</li>
            </ul>
            <p>※ 본 제품은 추가 검사 필요 시 재 구매 상품임.</p>
          </div>

        </div>          
      </div>
    </section>
  )
}

const SPUT5 = () => {
  return (
    <section>
      <h2 className="title">
        <span style={{fontWeight: '900'}}>SOCIUM<sup>®</sup></span> 소변검사 시험지 (SPUT-5)</h2>      
      <div className="row">
        <div className="col-sm-6">
          <img src="./images/products/product3.png" alt="product3" width="100%" />
        </div>
        <div className="col-sm-6">
          <h5><span style={{ fontWeight: '500' }}>SOCIUM<sup>®</sup></span> 소변겸사 시험지(SPUT-5)</h5>
          <p>
            SOCIUM 휴대용 검사기에 반려동물로부터 채취한 소변을 시험지(SPUT-5)에 충분히 묻히고, 전용 Cassette를 
            이용하여 SOCIUM 휴대용 시험지 검출기(SPSD101)에 삽입하여 5가지 항목 (Bilirubin, Uro-bilinogen, 
            Ketone, Leukocytes, Specific Gravity)에 대한    검출을 할 수 있도록 만들어진 시험지로 측정된 5가지 
            항목별 결과를      토대로 애완동물의 간질환, 내장질환, 당뇨병 및 요로감염 등에 대한 측정자료를 
            제공하여 반려동물의 건강상태를 Check 할 수 있도록   도와 줍니다. 측정 결과를 바탕으로 필요 시 의료진의 
            빠른 선행 조치를 할 수 있도록 결과물을 제공하여 반려동물용의 삶의 질을 향상 시켜주기 위해 개발된 공식인증 
            동물용 의료기기입니다.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <table className="table table-striped" style={{textAlign:'center'}}>
            <thead>
              <tr>
                <th style={{width: '40%'}}>검사항목</th><th>위험질환</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bilirubin<br/>(빌리루빈)</td>
                <td>간염, 간 경변</td>
              </tr>
              <tr>
                <td>Uro-bilinogen<br/>(우로빌리로겐)</td>
                <td>간 기능 장애, 간염, 울혈 성 심부전, 용혈성 빈혈, 학성 빈혈</td>
              </tr>
              <tr>
                <td>Ketone<br/>(케톤체)</td>
                <td>당뇨 성 케톤 산증. 갑상선기능 저하 증, 갑상선기능 항진 증</td>
              </tr>
              <tr>
                <td>Leukocytes<br/>(백혈구)</td>
                <td>요로감염, 만성신부전, 전립선염, 방광염, 요도염</td>
              </tr>
              <tr>
                <td>Specific Gravity<br/>(비중)</td>
                <td>방광염, 부신 기능 저하 증, 당뇨병</td>
              </tr>
            </tbody>
          </table>
          <p>※ 본 검사 지의 측정결과는 동물병원의 진료를 대체할 수 없습니다. 
          측정결과에 의문이 있으면 전문 의료인과 상담하세요.</p>        
        </div>
        <div className="col-sm-6">
          <div style={{backgroundColor: 'skyblue', color: 'white', padding:'10px'}}>
            <h5><span style={{ fontWeight: '500' }}>SOCIUM<sup>®</sup></span> 
              소변검사 검사지 제품 구성 (SPUT-5E5)</h5>
            <ul>
              <li>검사지 5개 (낱개 포장)</li>
              <li>휴대용 검사기 전용 카세트</li>
              <li>사용설명서</li>
            </ul>
          </div>
          <br/><br/>
          <div style={{backgroundColor: 'skyblue', color: 'white', padding:'10px'}}>
            <h5><span style={{ fontWeight: '500' }}>SOCIUM<sup>®</sup></span> 
              소변검사 검사지 제품 구성 (SPUT-5E10)</h5>
            <ul>
              <li>검사지 10개 (낱개 포장)</li>              
              <li>사용설명서</li>
              <li>휴대용 검사기 전용 카세트 없음</li>
            </ul>
            <p>※ 본 제품은 추가 검사 필요 시 재 구매 상품임.</p>
          </div>

        </div>          
      </div>
    </section>
  )
}

const Contents = (props) => {
  return (
    <>      
      <SPSD101 />
      <SPUT4 />
      <SPUT5 />
    </>
  )
}

export default class Products extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  componentDidMount() {
  }
  render() {
    const style = {
      headerImage: { backgroundImage: 'url(/image-header/dogs.jpg)' }
    }
    return (
      <Page
        headerImage={style.headerImage}
        title="제품 소개"
        children={<Contents />}
      />
    );
  }
}
