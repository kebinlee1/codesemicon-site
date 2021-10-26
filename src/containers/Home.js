import React from "react";
// import { Link, } from 'react-router-dom'
import { Helmet } from "react-helmet"
// import ReactPlayer from "react-player"
// import Carousel from "react-bootstrap/Carousel"
import "./Home.css";

const SectionWrapper = (props) => {
  const { child, bgColor } = props;
  let style = {
    margin: '20px 0 0',
    padding: '20px',
    width: '100%',
    backgroundColor: bgColor,
    color: props.color || '#333',
    borderRadius: '5px'
  }
  return (
    <div style={style}>
      <div>
        {child}
      </div>
    </div>
  )
}

const Head = (props) => {
  let style = {
    bgColor: { backgroundColor: 'skyblue' },
    bgImage: { backgroundImage: 'url(/images-codesemi/home-header.jpg)' },
    content: { fontSize: '20px' }
  }
  return (
    <div className="header" style={props.loaded ? style.bgImage : style.bgColor}>
      <h1 className="title">Your IC Design Partner</h1>
      <p style={style.content}>
        from Memory design service to DRAM PMIC<br /><br />
        by CodeSemicon
      </p>
    </div>
  )
}

const History = () => {
  return (
    <div>
      <h2>History and Capability</h2>
      <img src="./images-codesemi/history.png" alt="history" width="100%" />
      <br />
      <img src="./images-codesemi/capability.png" alt="capability" width="100%" />
    </div>
  )
}

const Business = () => {
  return (
    <div>
      <h2>Asic Design Service Provider</h2>
      <p>We provide total solution for foundry customer.</p>
      <img src="./images-codesemi/design-service.png" alt="design-service" width="100%" />
      <br /><br />

      <h3>Design Service</h3>
      <ul>
        <li>Chip Design, Layout and process engineering dedicated for Key foundry</li>
      </ul>

      <h3>Turnkey Biz from spec. definition to wafer handling</h3>
      <ul>
        <li>PMIC design , Wafer Sales and Packaging service</li>
        <li>Wafer business of Key-Foundry</li>
        <li>Power MOSFET sales in China market</li>
      </ul>
    </div>
  )
}

const PMIC = () => {
  return (
    <div>
      <h2>DDR5 PMIC Developement as a CodeSemicon Product</h2>
      <img src="./images-codesemi/pmic-potential.png" alt="pmic potential" width="100%" />
      <p style={{ marginTop: "10px" }}>
        Note: Dedicated DDR5 memory with patents for M-PMIC in addition to meet JEDEC Specification.</p>
      <br />

      <img src="./images-codesemi/pmic-diagram.png" alt="pmic diagram" width="100%" />
    </div>
  )
}

const Licenses = () => {
  const myStyles = {
    imgWrap: {
      marginLeft: "auto", marginRight: "auto",
      width: "50%"
    }
  }
  return (
    <div>
      <h2>Business Licenses</h2>
      <div className="row">
        <div className="col-sm-6">
          <div style={myStyles.imgWrap}>
            <img src="./images-codesemi/biz-license.png" alt="biz license" width="100%" />
          </div>
        </div>
        <div className="col-sm-6">
          <div style={myStyles.imgWrap}>
            <img src="./images-codesemi/biz-membership.png" alt="biz membership" width="100%" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    // setTimeout(()=>this.setState({loaded: true}), 2000)
    this.setState({ loaded: true })
  }
  render() {
    return (
      <div className="home">
        <Helmet>
          <title>CodeSemicon</title>
        </Helmet>
        <Head loaded={this.state.loaded} />
        <div className="content container">
          <SectionWrapper child={<History />} bgColor='#efefef' color='#333' />
          <SectionWrapper child={<Business />} bgColor='#efefef' color='#333' />
          <SectionWrapper child={<PMIC />} bgColor='#efefef' color='#333' />
          <SectionWrapper child={<Licenses />} bgColor='#efefef' color='#333' />
        </div>
      </div>
    );
  }
}
