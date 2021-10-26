import React from "react";
import Page from "../components/Page"

const Cards = (props) => {
  const style = {
    img: { width: "250px", height: "180px" }
  }

  const items = props.items
  return (
    <div className="card-group">
      {
        items.map((item,i) => {
          return (
            <div className="card" style={{ width: '300px', margin: '10px', border: 'none' }} key={i.toString()}>
              <img className="card-img-top" src={item.imgSrc} style={style.img} alt="login" />
              <div className="card-body text-primary">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.text}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

const UrainTable = (props) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr className="table-info">
          <th scope="col" style={{width: '10%'}}>제품명</th>
          <th scope="col">SPUT-4 검사Test Report Details</th>
          <th scope="col">SPUT-5 Test Report Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">검사항목</th>
          <td>Glucose (포도당), Protein (단백질), pH Level (산 알칼리농도), Occult Blood (잠혈)</td>
          <td>Bilirubin (빌리루빈), Uro-bilinogen (우로빌리로겐), 
              Ketone (케톤체), Leukocytes (백혈구), Specific Gravity (비중)</td>
        </tr>
        <tr>
          <th scope="row">결과확인</th>
          <td>※ 하단 결과표를 참조하세요. <br/>SPUT-4 소변검사 TEST 결과 확인 표.doc</td>
          <td>※ 하단 결과표를 참조하세요. <br/>SPUT-5 소변검사 TEST 결과 확인 표.doc</td>
        </tr>        
      </tbody>
    </table>
  )
}

const Content = (props) => {
  const urain = [
    {
      imgSrc: "/images/guide/urain1.jpg", title: "Step 1",
      text: "소변을 묻힌 시약막대를  전용 카세트에 삽입하세요. ※소변을 묻히고 1분 이내에 검사 하시는 게 정확 합니다."
    },
    {
      imgSrc: "/images/guide/urain2.jpg", title: "Step 2",
      text: 'SOCIUM®  테스기기(SPSD101)에 카세트를 삽입하세요.'
    },
    {
      imgSrc: "/images/guide/urain3.jpg", title: "Step 3",
      text: '핸드폰에서 SOCIUM 앱을 실행하고 “Analyze” 를 눌러 분석을 시작하세요.'
    },
    {
      imgSrc: "/images/guide/urain4.jpg", title: "Step 4",
      text: '검사결과를 통해 정확하고 간편하게 반려동물의 건강을 체크하세요.'
    },
  ]

  const getUrain = [
    {
      imgSrc: "/images/guide/urain5.png",
      title: "비 흡수 패드에 묻히는 방법",
      text: '정해진 장소에서 볼일 보는 아이.'
    },
    {
      imgSrc: "/images/guide/urain6.jpg",
      title: "앉아서 볼일 보는 아이",
      text: '다리를 들고 볼일 보는 아이'
    },
    {
      imgSrc: "/images/guide/urain7.png",
      title: "고양이",
      text: '거름망 밑에 비닐을 깔아서 받으시면 됩니다.'
    },
  ]

  return (
    <section>
      <h2 className="title">
        검사를 진행하기 전 준비사항</h2>
      <ul>
        <li>소변검사 시험지(SPUT-4 & 5)를 사용하여 반려동물의 깨끗한 소변을 채취하여 주세요.</li>
        <li>SOCIUM<sup>®</sup> 테스트기기(SPSD101)의 전원을 켜고, SOCIUM APP을 실행하여 두 기기를 Bluetooth로 연결하여 주세요.</li>
        <li>아래 순서에 따라 검사준비를 하고 검사 하세요</li>
      </ul>

      <h2 className="title">검사 방법</h2>
      <Cards items={urain} />

      <h2 className="title">소변 채취 방법</h2>
      <Cards items={getUrain} />

      <h2 className="title">소변검사결과 확인</h2>
      <UrainTable />

    </section>
  )
}

export default function Guide() {
  return (
    <Page
      children={<Content color="red" />}
      title="소변 검사 방법"
      headerImage={{ backgroundImage: 'url(/image-header/dogs.jpg)' }}
    />
  );
}