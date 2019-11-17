import React from 'react'
import {Jumbotron} from 'reactstrap';
import { Bar } from 'react-chartjs-2';


const ReactBar = props => {

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

  const returnHome = () => {
    props.history.push("/");
  }
  
  return (
    <Jumbotron onClick={returnHome}>
                <Bar
            data={barData} onClick={returnHome}
          />
    </Jumbotron>
  )
}

export default ReactBar;