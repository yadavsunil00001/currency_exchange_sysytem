import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {data} from './currencylist';
import Select from 'react-select';
import DisplayConversation from './DisplayConversation';
function getLabel({ icon, label }) { // option has keys `icon`, `label` and `value`
  return (
    <div style={{ alignItems: 'center', display: 'flex' }}>
      <img  src={icon} height={'42px'} width={'42px'} ></img>{'         '}
      <span style={{ fontSize: 14 }}>{label}</span>
    </div>
  );
}
class App extends Component {

  state={
    coinData:[],
    depositCurrency:'',
    withdrawCurrency:'',
    showConversion:false,
  }
  
  componentDidMount(){
    let coinData=[];
    data.map(item=>{
      let individualCoin={};
      individualCoin.value=item.symbol;
      individualCoin.label=`${item.selected_name} ${'             '} ${item.display_name} `
      individualCoin.icon=`${item.image_sm_url}`
      coinData=[...coinData,individualCoin]
    })
    this.setState({
      coinData
    })
  }
  onInputCurrencyChange=(depositCurrencyDetails)=>{
    this.setState({
      depositCurrency:depositCurrencyDetails.value
    })
  }
  onOutputCurrencyChange=(withdrawCurrency)=>{
    this.setState({
      withdrawCurrency:withdrawCurrency.value,
      showConversion:true
    })
  }
  render() {
    let {coinData,showConversion}=this.state;
    return (
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={8}>
          <h1>Currency Exchange System</h1>
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row>

        </Row>
        <Row>
        <Col>
          <Select 
            options={coinData}
            getOptionLabel={getLabel}
            onChange={this.onInputCurrencyChange}
          />
          </Col>
          <Col>
          <Select 
            options={coinData}
            getOptionLabel={getLabel}
            onChange={this.onOutputCurrencyChange}
          />
          </Col>
        </Row>
        <Row>
          <Col> 
          {showConversion ?<DisplayConversation {...this.state} />:null}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
