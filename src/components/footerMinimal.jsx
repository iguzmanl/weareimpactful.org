import React, {Component} from 'react';
import '../App.css';
import {Container, Row, Col, Button} from 'react-bootstrap';

import '../css/styles.css';

export default class About extends Component {
  render() {
    return (<div className="App-footer" id="opportunities">
      <br></br>
      <Container style={{
          paddingTop: 15,
          paddingBottom: 10
        }}>
        <div class="row">
          <div class="col-md-4 justify-content-center" style={{
              paddingBottom: 30,
            }}>
            <h4 style={{
                fontSize: 20
              }}>
              CONTACT US</h4>
                <a class="text-light" style={{
                    fontSize: 20
                  }} href="mailto:hello@weareimpactful.org">hello@weareimpactful.org</a>

          </div>
          <div class="col-md-4 justify-content-center" style={{
              paddingBottom: 30,
            }}>
            <h4 style={{
                fontSize: 20
              }}>
              OUR SUPPORTERS ♥</h4>

              <a class="text-light" style={{
                  fontSize: 20
                }} href="https://www.impactlabs.io/">impact labs <br></br></a>
              <a class="text-light" style={{
                  fontSize: 20
                }} href="https://builders.mozilla.community/">mozilla builders</a>

          </div>
          <div class="col-md-4 justify-content-center" style={{
              paddingBottom: 30,
            }}>
            <h4 style={{
                fontSize: 20
              }}>
              COPYRIGHT © IMPACTFUL
            </h4>
            <p></p>
          </div>
        </div>
      </Container>
      <br></br>

    </div>)
  }

}