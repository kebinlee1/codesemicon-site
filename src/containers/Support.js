import React from "react";
import { Link } from 'react-router-dom'
import Page from "../components/Page"

const Download = () => {
  return (
    <section>
      <h2 className="title">자료 다운로드</h2>
      <ul>
        <li>
          <Link to="/downloads/SPSD-QuickStartGuide(Korean).pdf" target="_blank" download>
            다운로드 - Quick Start Guide</Link>
        </li>
        <li>
          <Link to="/downloads/SPSD101-IFU-KOR-App_v1.0.pdf" target="_blank" download>
            다운로드 - SPSD101-IFU-KOR-App_v1.0.pdf</Link>
        </li>
        <li>
          <Link to="/downloads/SPUT-4-소변검사-TEST결과확인표.pdf" target="_blank" download>
            다운로드 - SPUT-4-소변검사-TEST결과확인표.pdf</Link>
        </li>
        <li>
          <Link to="/downloads/SPUT-5-소변검사-TEST결과확인표.pdf" target="_blank" download>
            다운로드 - SPUT-5-소변검사-TEST결과확인표.pdf</Link>
        </li>
      </ul>     
      
    </section>
  )
}

const FAQ = () => {
  return (
    <section className="faq">

      <h2 className="title">자주하는 질문 (FAQ)</h2>

      <div className="faq-item">
        <p className="faq-q">
          Q. 소변검사는 왜 해야 하나요?
        </p>
        <p className="faq-a">
          A. 반려동물은 의사소통이 불가능하고 아프다는 사실을 숨기는 습성이 있기 때문에 질병이 외부로 드러나
          보이면 치명적인 상태일 가능성이 높습니다. 따라서, 반려동물의 내과질환은 조기 검진이 매우 중요합니다.
          소변은 생체의 기능을 항상 일정하게 유지할 수 있도록 체내에서 이물질 등을 포함하여 배출하고 몸의 상태
          에 따라 다양한 변화를 나타내기 때문에 소변 검사를 통해  아직 발견되지 못한 질병의 초기 징후나 합병증
          유무를 알 수 있습니다.</p>
      </div>

      <div className="faq-item">
        <p className="faq-q">
          Q. SOCIUM은 반려 견과 반려 묘에 함께 사용하여도 되나요?
        </p>
        <p className="faq-a">
          A. 네, 함께 사용하도록 만들어진 제품 입니다.
        </p>
      </div>

      <div className="faq-item">
        <p className="faq-q">
          Q. SOCIUM  검사결과는 믿을 수 있나요?
        </p>
        <p className="faq-a">
          A. SOCIUM 제품은 농림축산검역본부의 동물용 의료기기 수입품목허가를  획득한  동물용 의료기기 입니다.
          (수입 업 허가 제 214호, 수업품목허가 (214-001,002,003) / 농림축산검역본부장) SOCIUM 사용 설명서에
          따라 테스트를 진행하면 평균 99%의 신뢰도가 검증된 제품입니다. 하지만, 소변검사방법은 간이 진단이므로
          질환의 확진 여부는 전문 수의사와 상담이 필요합니다.  SOCIUM은  검사결과 위험 항목이 발생할 경우
          모바일 앱에서 바로 확인이 가능하고 주기적인 검사를 통해 반려동물의 건강상태 변화추이를 확인 할 수
          있습니다. 이를 토대로 동물병원을 방문하여 전문 수의사와 상담 및 후속 조치를  받으시면 됩니다.
        </p>
      </div>

      <div className="faq-item">
        <p className="faq-q">
          Q. 어떤 항목을 검사하나요 ? 그리고 각 항목별 관련 질환은 무엇인가요?
        </p>
        <p className="faq-a">
          A. SOCIUM 검사항목은  “포도당, 단백질, pH, 잠혈, 빌리루빈, 우로빌리로겐, 케톤체, 백혈구, 비중”의 9-가지
          항목이며, 검사결과를 통해 반려동물의 중요한 6가지 관련질환에 대하여 요 화학 검사로 추정 가능한
          “신장,   비뇨기 질환, 생식기 질환,  내분비 질환, 간 질환, 혈관 질환, 소화기 질환 “ 등  약 15가지
          관련 질환의 위험성 여부 확인이 가능합니다. <br />
          관련 질환 정보는 <Link to="/products">제품 소개 페이지</Link>를 참조하세요.
        </p>
      </div>

      <div className="faq-item">
        <p className="faq-q">
          Q. SOCIUM 휴대용 시험지 검출기 사용시 주의 사항이 있나요 ?
        </p>
        <p className="faq-a">
          A. SOCIUM (SPSD) 제품을 이용한 검사는 누구나 손쉽게 사용하도록 설계되어 있습니다.
          제품을 사용하여 검사하려면 다음과 같이 사용 전 준비를 하여 주시고, 사용설명서에 따라
          테스트를 진행하시면 됩니다.
        </p>
        <ul>
          <li>본 제품 사용 전 SOCIUM 전용 앱을 설치하여야 분석 결과를 볼 수 있습니다.
            (<Link to="/guide-app">App 가이드 참조</Link>)</li>
          <li>설치된 SOCIUM 앱에서 Log-In 정보 및 측정하실 동물에 대한 정보를 입력하여 주세요.</li>
          <li>SOCIUM 전용 시험지와 Cassette를 사용하여 사용설명서에 따라 테스트 준비를 완료합니다.</li>
          <li>제품을 떨어뜨리거나 외부충격 및 물에 젖지 않게 주의 하세요.</li>
          <li>장시간 미 사용할 경우, 반드시 건전지를 빼 주세요.</li>
          <li>사용 상 아래와 같은 증상이 있는 경우 초치해 주시면 됩니다.</li>
        </ul>

        <table className="table table-striped" style={{margin: '1rem 2rem', width:'90%'}}>
          <thead>
            <tr className="table-info">
              <th>증상</th>
              <th style={{textAlign:'center'}}>조치 및 해결방법</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>스마트폰 앱과 Bluetooth<br/> 연결이 안될 경우</td>
              <td><ul>
                  <li>스마트폰 Bluetooth 기능이 켜져 있는지 확인 바랍니다.</li>
                  <li>전원이 켜져 있는지 확인 하세요 (LED가 켜지지 않으면 건전지를 교체하여 주세요)</li>
                  <li>제품 전원 및 스마트폰에서 앱을 실행하고 Bluetooth 기능을 켜주세요.</li>
                  <li>사용설명서에 따라 다시 시작 하세요.</li>
                </ul></td>
            </tr>
            <tr>
              <td>전원이 안 켜질 경우</td>
              <td><ul>
                  <li>건전지를 교체하고, 전원버튼을 길게 눌러 전원이 켜져 있는지 확인 하십시오.</li>
                  <li>건전지를 교제 후에도 여전히 전원이 안 켜지면, 고객센터에 문의 하십시오.</li>                  
                </ul></td>
            </tr>
            <tr>
              <td>측정 데이터가 이상할 경우</td>
              <td><ul>
                  <li>TEST절차를 설명서에 따라 제대로 수행하였는지 확인 하십시오. 
                    (테스트시간,샘플소스 및 테스트스트립 반응시간 등)</li>
                  <li>테스트스트립의 유효기간이 유효한지 확인 하십시오.</li>                  
                  <li>전문의와 감당하거나 추가 검사를 실시하십시오.</li>
                </ul></td>
            </tr>
            
          </tbody>
        </table>
      </div>

      <div className="faq-item">
        <p className="faq-q">
          Q. SOCIUM 소변검사지 사용시 주의 사항이 있나요?
        </p>
        <p className="faq-a">
          A. SOCIUM (SPUT-4 & 5) 제품을 이용한 검사는 누구나 손쉽게 사용하도록 설계되어 있습니다.
          정확한 측정결과를 얻기 위해서 다음과 같은 점을 주의해 주시길 바랍니다.</p>
        <ul>
          <li>검사지는 밀봉된 상태에서 24개월 동안 성능을 유지 합니다.</li>
          <li>검사지는 검사 직전에 개별포장지에서 꺼내서 사용하고, 이물질이 묻지 않도록 해야 합니다.</li>
          <li>반려동물의 아침 첫 소변을 채취하여 검사할 때 보다 정확한 검사를 하실 수 있습니다.</li>
          <li>시험지가 5분 이상 공기(습도, 질소산화물 등)에 노출되면 주변환경으로 인해 시험지 반응영역의 색이
             변하고 특성이 변할 수 있습니다. (시험지 색이 변한경우 사용하지 마십시오)</li>
          <li>제품 포장이 심하게 손상되었거나, 검사 지의 테스트 용지 층이 올바르게 정렬되지 않았거나, 비정상적
             인 색상이 표시되면 사용하지 마십시오</li>
          <li>최소 1cc의 깨끗하고 신선한 소변을 채취하고, 검사 전 소변을 흔들어 사용하고 30분내에  검사를 마침
             니다.</li>
          <li>30분내에 시험을 완료할 수 없는 경우, 검사지는 가능한 빨리 2~8℃에서 냉장보관 하고, 냉장보관 된 
             시험지는 시험 전에 실온상태에서 보관 후 4시간 이내에 시험을 해야 합니다.
             (냉장되지 않은 시험지를 실온에서 오랫동안 보관하면 세균분열 및 증식으로 인해 측정오류를 발생할
              수 있습니다)</li>
          <li>식후 바로 검사를 하는 경우 당뇨관련 항목이 평소보다 높게 나올 위험이 있습니다.</li>
          <li>검사지는 1회용으로 재 사용이 불가 합니다.</li>
        </ul>

      </div>

      <div className="faq-item">
        <p className="faq-q">
          Q. 검사주기는 얼마나 되나요?
        </p>
        <p className="faq-a">
          A. 반려동물이 특별한 질환  또는 위험이 없는 경우 월 1~2회의 검사를 권장하여 드립니다.
          반려동물의 건강상태에 따라 전문 수의사와 상담하시고 조치를 받으시면 됩니다.
          (테스트 결과 항목별 조치사항 참조).</p>
      </div>

      <div className="faq-item">
        <p className="faq-q">
          Q. SOCIUM 소변검사 결과를  어떻게 확인하고, 조치를 하나요?
        </p>
        <p className="faq-a">
          A. 모바일 앱에서 검사 항목별 결과를 확인할 수 있습니다.
       또한, 각 해당항목에 대한 자세한 사항은 “해당항목”을 클릭하면 상세하게 설명되어 있습니다.
       (자세한 사항은 사용방법, 자료실 및 User Guide에서 확인할 수 있습니다).</p>
      </div>

      <div className="faq-item">
        <p className="faq-q">
          Q. SOCIUM 앱 사용료는 얼마인가요?
        </p>
        <p className="faq-a">
          A. 모바일 앱은 구글플레이와 앱스토어에서 무료로 다운로드 받으실 수 있고, 사용료는 없습니다.</p>
      </div>

      <div className="faq-item">
        <p className="faq-q">
          Q. 제품구성은 어떻게 되나요?
        </p>
        <p className="faq-a">
          A. SOCIUM 제품은 휴대용 시험지 검출기(SPSD101) 와 소변검사 시험지(SPUT4 & 5)로 구성되어 있습니다.
          자세한 사항은 <Link to="/products">제품 소개 페이지</Link>를 참조하세요.
        </p>
      </div>

      <div className="faq-item">
        <p className="faq-q">
          Q. 제품구매는 어떻게 하나요?
        </p>
        <p className="faq-a">
          A. 처음 사용하시는 분은 SPSD101 + SPUT-4 & SPUT-5 제품을  같이 구매하셔서 사용 하시면 됩니다.
          재 구매하시는 분은 SPUT-4E10, SPUT-5E10 제품을 구매하셔서 사용 하시면 됩니다.
        </p>
      </div>

      <div className="faq-item">
        <p className="faq-q">
          Q. 제품관련 문의는 어디로 해야 하나요?
        </p>
        <p className="faq-a">
          A. 반려동물의 질환관련 문의는 주치수의사나 전문 수의사에게 문의 바랍니다.
          제품 관련 문의는 저희 홈페이지(문의사항)나 판매자 에게 문의하시면 됩니다.
        </p>
      </div>

    </section>
  )
}

const Contents = (props) => {
  return (
    <>
      <Download />
      <FAQ />
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
        title="Download and QnA"
        children={<Contents />}
      />
    );
  }
}
