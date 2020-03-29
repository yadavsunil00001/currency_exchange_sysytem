import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
export default (props)=> {
    return (
        <Container>
            <Row>
            </Row>
            <Row>
                
            </Row>
            <Row>
                <Col>
                    <p>You are sending</p>
                    <h2>{props.amountToConvert}</h2><sup>{props.primaryCurrency}</sup>
                </Col>
                <Col>
                    <p>You May Receive</p>
                    <h2>{props.amountReceive}</h2><sup>{props.targetCurrency}</sup>
                </Col>
            </Row>
        </Container>
    );
  }