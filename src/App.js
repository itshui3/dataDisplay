
import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';

import ReactChart from './charts/ReactChart';
// import {Comparison, Horizontal, ReactBar} from './chartpages';
import Comparison from './chartpages/Comparison';
import Horizontal from './chartpages/Horizontal';
import ReactBar from './chartpages/ReactBar';

import {Alert} from 'reactstrap';
import './App.sass';



function App() {

  return (
    <>
      <Alert color="primary" className="headerAlert"><h1>Data Display</h1></Alert>
      <div className="App">
      {/* <header className="App-header"> */}
      <Route exact path="/" component={ReactChart} />

      <Route path="/horizontal" component={Horizontal} />
      <Route path="/reactbar" component={ReactBar} />
      <Route path="/comparison" component={Comparison} />

      {/* </header> */}
      
    </div>
    </>
  );
}

export default App;

// haripo's heatmap in-use, issue being styling of months cramping on left side & doesn't stretch to window size

// kevin's heatmap below, issue being that it shifts one day

{/* <CalendarHeatmap
  startDate={new Date('2018-12-05')}
  endDate={new Date()}
  values={Brian.data}
  showWeekdayLabels={true}
  classForValue={(value) => {
    if (!value) {
      return null;
    } else if (value.count === 0){
      return 'color-scale-0';
    } else if (value.count > 15) {
      return 'color-scale-4';
    } else if (value.count > 10) {
      return 'color-scale-3';
    } else if (value.count < 5) {
      return 'color-scale-2';
    } else {
      return 'color-scale-1';
    }

  }}
  onClick={value => {
    if(!value){alert(`N/A`)} else {
      alert(`Date: ${value.date} count: ${value.count}`)
    }
}}
/> */}