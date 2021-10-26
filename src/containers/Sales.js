import React from "react";
import Page from "../components/Page"
import { ListGroup } from 'react-bootstrap'


const Contents = (props) => {
  const style = {
    bold: { fontWeight: '900' }
  }
  return (
    <div>
      <section>

        <h2 className="title" style={style.bold}>아래의 판매처에 연락하세요.</h2>
        <ListGroup variant="flush" style={{textAlign: 'center'}}>
          {/* <ListGroup.Item>
            <h3>준기 인터내셔널</h3> 
            <p>Email: smhong@joongy.com</p> 
            <p>Tel: 010-5303-0426</p>
          </ListGroup.Item> */}
          <ListGroup.Item>
            <h3>2R-PET Care</h3> 
            <p>Email: ccglobal@nate.com</p> 
            <p>Tel: 010-9625-5018</p>
          </ListGroup.Item>
        </ListGroup>

      </section>

    </div>
  )
}

export default class About extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // isAuthenticated: false,
      // userHasAuthenticated: false,
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
        title="판매처 정보"
        headerImage={style.headerImage}
        children={<Contents />}
      />
    );
  }

}
