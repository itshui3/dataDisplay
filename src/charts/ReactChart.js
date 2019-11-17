import React from 'react';
// data display imports
import { HorizontalBar, Bar } from 'react-chartjs-2';
import { BarChart } from 'react-charts-d3';
// styling imports
import {Card, ListGroup, ListGroupItem} from 'reactstrap';
import './style.sass';

const ReactChart = props => {

  console.log(props.history);

  const horizontalBarData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'HorizontalBar from ReactChart',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40, 40, 15, 10, 23, 70]
      }
    ]
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgb(0,191,255)',
        borderColor: 'rgb(0,255,255)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40, 40, 15, 10, 23, 70]
      }
    ]
  };


  function randomNumber() {
    return Math.random() * (40 - 0) + 0;
  }

  const d3BarData = [
      { key: 'Group 1', values: [ { x: 'A', y: randomNumber() }, { x: 'B', y: randomNumber() }, { x: 'C', y: randomNumber() }, { x: 'D', y: randomNumber() } ] },
      { key: 'Group 2', values: [ { x: 'A', y: randomNumber() }, { x: 'B', y: randomNumber() }, { x: 'C', y: randomNumber() }, { x: 'D', y: randomNumber() } ] },
      { key: 'Group 3', values: [ { x: 'A', y: randomNumber() }, { x: 'B', y: randomNumber() }, { x: 'C', y: randomNumber() }, { x: 'D', y: randomNumber() } ] },
  ];

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

  const goToHorizontal = () => {
    props.history.push("/horizontal");
    console.log("Moving to horizontal");
  }

  const goToReactBar = () => {
    props.history.push("/ReactBar");

  }

  const goToComparison = () => {
    props.history.push("/Comparison");
  }

  return (
    <>
      <div className="chartsCont">

        <Card className="card" onClick={goToHorizontal}>

          <HorizontalBar data={horizontalBarData}  />
          <div className="prosConsCont">

            <ListGroup>
              <ListGroupItem>
                <h2>Pros</h2>
              </ListGroupItem>
              <ListGroupItem>
                Clean look
              </ListGroupItem>
              <ListGroupItem>
                Nice hover effect[with color effects]
              </ListGroupItem>
              <ListGroupItem>
                Easy data structure
              </ListGroupItem>
            </ListGroup>

            <ListGroup>
              <ListGroupItem>
                <h2>Cons</h2>
              </ListGroupItem>
              <ListGroupItem>
                Scrunched with 12 months
              </ListGroupItem>
            </ListGroup>

          </div>
        </Card>

        <Card className="card" onClick={goToReactBar}>
          <Bar
            data={barData}
          />
          <div className="prosConsCont">
          <ListGroup>
            <ListGroupItem>
              <h2>Pros</h2>
            </ListGroupItem>
            <ListGroupItem>
            Will get to play with data structures
            </ListGroupItem>
            <ListGroupItem>
            Nice hover effect[with color effects]
            </ListGroupItem>
            <ListGroupItem>
            Professional and simple
            </ListGroupItem>
            <ListGroupItem>
              Easy data structure/easy look customization
            </ListGroupItem>
            <ListGroupItem>
              Just looks good
            </ListGroupItem>
          </ListGroup>

          <ListGroup>
            <ListGroupItem>
              <h2>Cons</h2>
            </ListGroupItem>
            <ListGroupItem>
             Can only do one thing
            </ListGroupItem>
          </ListGroup>
          </div>
        </Card>

        <Card className="card" onClick={goToComparison}>
          <BarChart data={d3BarData} />
          <div className="prosConsCont">
            <ListGroup>
              <ListGroupItem>
                <h2>Pros</h2>
              </ListGroupItem>
              <ListGroupItem>
                Will get to play with weird Data Structure
              </ListGroupItem>
              <ListGroupItem>
                Professional
              </ListGroupItem>
              <ListGroupItem>
                More sophisticated chart/Can do comparisons
              </ListGroupItem>
            </ListGroup>

            <ListGroup>
              <ListGroupItem>
                <h2>Cons</h2>
              </ListGroupItem>
              <ListGroupItem>
                Slightly more complicated data structure
              </ListGroupItem>
              <ListGroupItem>
                Doesn't look that good
              </ListGroupItem>
              <ListGroupItem>
                Mostly useful for comparisons
              </ListGroupItem>
            </ListGroup>

          </div>
        </Card>
        <Card className="card" onClick={goToComparison}>
          <BarChart data={d3BarData2} />
          <div className="prosConsCont">
          <p>This is just another example of the same bar but with only 1 entity being charted
          </p>
          </div>
        </Card>

      </div>
    </>
  )
}

export default ReactChart;