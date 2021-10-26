import React from "react";
import { Link } from 'react-router-dom'
import Page from "../components/Page"

const Cards = (props) => {
  const style = {
    img: { width: "300px", height: "500px" }
  }

  const items = props.items
  return (
    <div className="card-group">
      {
        items.map((item, i) => {
          return (
            <div className="card" style={{ width: '300px', margin: '10px', border: 'none' }} key={i.toString()} >
              <img className="card-img-top" src={item.imgSrc} style={style.img} alt="login" />
              <div className="card-body text-primary">
                <h5 className="card-title">{item.title}</h5>                
                {
                  item.text &&
                  (
                    <p className="card-text">{item.text}</p>
                  )
                }
                {
                  item.textHTML &&
                  (
                    <p className="card-text"  dangerouslySetInnerHTML = {{__html: item.textHTML}}></p>  
                  )
                }                
                {
                  item.link &&
                  (
                    <Link to={item.link.url} style={{fontWeight:'500'}}>{item.link.text}</Link>
                  )                    
                }
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

const Content = (props) => {
  const login = [
    {
      imgSrc: "/images/guide/login.jpg", title: "1. 등록 방법",
      text: '"Manual login"을 눌러서 등록을 시작 하세요.'
    },
    {
      imgSrc: "/images/guide/login1.jpg", title: "2. 사용자 등록",
      text: '기존사용자는 정보를 입력 후 “Login” 하시고, 신규사용자는 "Sign Up"누르면 프로필 등록 화면으로 이동합니다'
    },
    {
      imgSrc: "/images/guide/login2.jpg", title: "3. 사용자 프로필 등록",
      text: '정보를 입력하고 “Submit”를 눌러 등록을 완료하세요'
    },
  ]

  const petRegister = [
    {
      imgSrc: "/images/guide/pet-register1.jpg",
      title: "1. 반려동물 등록",
      text: '“Pet Health”를 누르면 등록화면으로 이동 합니다.'
    },
    {
      imgSrc: "/images/guide/pet-register2.jpg",
      title: "2. 정보 입력",
      text: '반려동물 정보를 입력하고 “Submit”을 눌러 등록을 완료하세요.'
    },
    {
      imgSrc: "/images/guide/pet-register3.jpg",
      title: "3. 반려동물 추가등록",
      textHTML: '<span>“Add Pet”을 눌러 반려동물을 추가 하실 수 있습니다. <br/>(※ 동일기기에서 여러 동물을 동시에 추가관리 가능)</span>'
    },
  ]

  const examine = [
    {
      imgSrc: "/images/guide/examine1.jpg",
      title: "1. 검사대상 선택",
      text: '검사대상을 클릭하면 검사화면으로 이동합니다.'
    },
    {
      imgSrc: "/images/guide/examine2.jpg",
      title: "2. 검사 시작",
      text: '“Analyze Test”를 클릭하면 검사를 시작합니다.'
    },
  ]

  const result = [
    {
      imgSrc: "/images/guide/result1.jpg",
      title: "1. 검사결과 확인방법",
      text: '“Report”를 클릭하면 검사결과를 확인할 수 있습니다.'
    },
    {
      imgSrc: "/images/guide/result2.jpg",
      title: "2. 검사결과 확인",
      text: '항목별 검사결과를 확인할 수 있습니다.'
    },
    {
      imgSrc: "/images/guide/result3.jpg",
      title: "3. 검사결과 상세확인",
      // text: '해당항목을 클릭하시면 항목별 상세한 결과설명 과 권장 및 조치사항을 확인하실 수 있습니다. (※ 항목별 결과에 대한 상세 설명은 하단 결과표 참조)',
      textHTML: `<span>해당항목을 클릭하시면 항목별 상세한 결과설명 과 권장 및 조치사항을 확인하실 수 있습니다.<br/>
                    (※ 항목별 결과에 대한 상세 설명은 아래 "소변검사결과 확인"을 클릭하세요.)</span>`,      
      link: {
        url: '/guide-urine#result',
        text: '소변검사결과 확인'
      }
    },
      
  ]

  const trend = [
    {
      imgSrc: "/images/guide/trend1.jpg",
      title: "1. 검사결과 트렌드 확인방법",
      text: '“Trend”를 클릭하면 검사결과 추이를 확인할 수 있습니다.' },
    {
      imgSrc: "/images/guide/trend2.jpg",
      title: "2. 검사결과 트렌드 확인",
      textHTML: '<span>주기적인 항목별 검사결과 추이를 확인 할 수 있습니다. <br/>(※ 검사결과 추이로  체계적인 건강관리가 가능합니다)</span>'}
  ]

  return (
    <section>
      <h2 className="title">
        Step 1. <span style={{ fontWeight: '600' }}>SOCIUM<sup>®</sup></span> 앱 설치</h2>
      <p style={{marginBottom: '30px'}}>
        구글플레이 <i style={{color: 'blue', fontSize: '24px'}} className="fab fa-google-play"></i> 나 
        앱스토어 <i style={{color: 'red', fontSize: '24px'}} className="fab fa-app-store-ios"></i> 에서 
        SOCIUM 앱을 다운로드 하시고 설치해 주시길 바랍니다.
      </p>

      <h2 className="title">Step 2. Log-in 및 사용자 등록</h2>
      <Cards items={login} />

      <h2 className="title">Step 3. 반려동물 등록</h2>
      <Cards items={petRegister} />

      <h2 className="title">Step 4. 검사 방법</h2>
      <Cards items={examine} />

      <h2 className="title">Step 5. 검사결과 확인</h2>
      <Cards items={result} />

      <h2 className="title">Step 6. 검사결과 트렌드 확인</h2>
      <Cards items={trend} />

    </section>
  )
}

export default function Guide() {
  return (
    <Page
      children={<Content color="red" />}
      title="스마트폰 앱 사용 가이드"
      headerImage={{ backgroundImage: 'url(/image-header/dogs.jpg)' }}
    />
  );
}