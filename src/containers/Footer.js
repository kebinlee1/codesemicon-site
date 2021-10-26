import React from "react";
import '../App.css';

const FooterContent = React.forwardRef((props) => {
  return (  
  <div className="footer" style={{marginTop: props.addMarginTop || "20px"}}>
    <div className="container">    
      <p>
        <span style={{fontWeight: "500"}}>Copy right &copy; 2021: </span>
        CodeSemicon LTD. (주식회사 코드세미콘)
      </p>
      <p>
        <span style={{fontWeight: "500"}}>Email: </span>        
        robin.jang@codesemicon.com
      </p>
      <p>
        <span style={{fontWeight: "500"}}>Tel  : </span>
        +82-10-5304-3367
      </p>
    </div>    
  </div>
)})

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {marginTop: "20px"}
    this.footer = React.createRef()
  }

  render() {
    return (
      <FooterContent ref={this.footer} addMarginTop={this.state.marginTop} />
    )
  }
}
