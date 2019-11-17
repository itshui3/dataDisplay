import React from 'react'
import {Jumbotron} from 'reactstrap';
import { HorizontalBar } from 'react-chartjs-2';

const Horizontal = props => {

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

  const returnHome = () => {
    props.history.push("/");
  }

  return (
    <Jumbotron onClick={returnHome} >
    <HorizontalBar data={horizontalBarData} />
    </Jumbotron>
  )

}

export default Horizontal;