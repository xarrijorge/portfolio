import React, {Component} from 'react';
// eslint-disable-next-line
import Partciples from 'react-particles-js';

export default class Particles extends Component{
  render(){
    return(
      <Particles
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />
    )
  }
}
