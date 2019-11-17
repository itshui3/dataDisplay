import React from 'react'
import {Jumbotron} from 'reactstrap';
import { BarChart } from 'react-charts-d3';

const Comparison = props => {

  function randomNumber() {
    return Math.random() * (40 - 0) + 0;
  }

  const d3BarData2 = [
    { key: 'Group 1', values: [ 
      { x: 'Jan', y: randomNumber() }, 
      { x: 'Feb', y: randomNumber() }, 
      { x: 'Mar', y: randomNumber() }, 
      { x: 'Apr', y: randomNumber() }, 
      { x: 'May', y: randomNumber() }, 
      { x: 'June', y: randomNumber() }, 
      { x: 'July', y: randomNumber() }, 
      { x: 'Aug', y: randomNumber() }, 
      { x: 'Sept', y: randomNumber() }, 
      { x: 'Oct', y: randomNumber() }, 
      { x: 'Nov', y: randomNumber() }, 
      { x: 'Dec', y: randomNumber() } 
    
    ] }
    
];

  const returnHome = () => {
    props.history.push("/");
  }

  return (
    <Jumbotron onClick={returnHome}>
      <BarChart data={d3BarData2} onClick={returnHome} />
    </Jumbotron>
  )
}

export default Comparison;