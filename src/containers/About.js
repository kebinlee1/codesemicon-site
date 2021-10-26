import React from "react";
import Page from "../components/Page"

const Contents = (props) => {
  const style = {
    bold: { fontWeight: '900' }
  }
  return (
    <div>

      <section>
        <h2 className="title" style={style.bold}>History</h2>
        <img src="/images/about/history.png" width="100%" alt="history" />

      </section>
      <hr />

      <section>
        <h2 className="title" style={style.bold}>Vision and Mission</h2>
        <img src="/images/about/vision.png" width="100%" alt="vision" />
      </section>
      <hr />

      <section>
        <h2 className="title" style={style.bold}>SOCIUM<sup>®</sup> Know-how</h2>
        <img src="/images/about/socium.png" width="100%" alt="socium" />
      </section>

    </div>
  )
}

export default class About extends React.Component {
  constructor(props) {
    super(props);
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
        title="About Company"
        headerImage={style.headerImage}
        children={<Contents />}
      />
    );
  }

}
