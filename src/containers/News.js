import React from "react";
import Page from "../components/Page"
import { ListGroup } from 'react-bootstrap'

const newsList = [  
  {
    url: "https://blog.naver.com/comwel2009/220926090798", 
    title: "반려동물 관련 유망직업",
    date: "2020년 12월 14일"
  },  
  {
    url: "http://m.blog.naver.com/2848yoyo/222061085606", 
    title: "비대면 시대의 현명한 반려동물 건강 지킴이",
    date: "2020년 8월 27일"
  },
]

const Contents = (props) => {
  const styles = {
    newsWrap: { 
      marginTop: "50px",
      border: "solid 1px gray",      
    },
    newsItem: {
      margin: "0"
    }
  }
  return (
    <div style={styles.newsWrap}>      
      <ListGroup variant="flush">        
        {
          newsList.map((item, index) => {
            return (
              <ListGroup.Item key={index}>
                {/* {item.date} - <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a> */}
                <div className="row">
                  <p className="col-sm-2" style={styles.newsItem}>
                    {item.date}
                  </p>
                  <p className="col-sm-10" style={styles.newsItem}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
                  </p>
                </div>
              </ListGroup.Item>
            )
          })
        }
      </ListGroup>
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
        title="블로그와 뉴스"
        headerImage={style.headerImage}
        children={<Contents />}
      />
    );
  }

}
