import React from 'react';
import Panel from './panel.jsx';
import './sidePanel.css';

const Filler = props => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />
}

const Bar = props => {
  return <div className="bar">
    <Filler percentage={props.percentage} />
  </div>
}

const BarChart = props => {

}

class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      specificTickets: 0,
      totalTickets: 0
    }
  }
  componentDidMount() {
    this.setState({
      specificTickets: this.props.tickets,
      totalTickets: this.props.allTickets
    })
  }
  render() {
    let { specificTickets, totalTickets } = this.state;

    let percentage = Math.floor(specificTickets / totalTickets * 100);
    return (
      <div className="progress-bar">
        <Bar percentage={percentage} />
        <div className="percent-numbers">
          {specificTickets} / {percentage}%
        </div>
      </div>
    )
  }
}

class TicketTracker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalTickets: 50,
      HDDTickets: 7,
      CPUTickets: 23,
      MEMTickets: 20
    }
  }

  componentDidMount() {
    let { tickets, hdd, cpu, mem } = this.props
    this.setState({
      totalTickets: tickets,
      HDDTickets: hdd,
      CPUTickets: cpu,
      MEMTickets: mem
    })
  }

  render() {
    let { totalTickets, HDDTickets, CPUTickets, MEMTickets } = this.state;
    return (
      <div className="progress-bars">
        <ProgressBar tickets={HDDTickets} allTickets={totalTickets} /> <br />
        <ProgressBar tickets={CPUTickets} allTickets={totalTickets} /> <br />
        <ProgressBar tickets={MEMTickets} allTickets={totalTickets} /> <br />
      </div>
    )
  }
}

class SidePanel extends React.Component {
  

  render() {
    return (
      <div className="side-panel-container">
        <Panel /> <br/>
        <div className="ticket-names">
          HDD: <br />
          CPU: <br />
          MEM <br />
        </div>
        <TicketTracker />
      </div>
    )
  }
}


export default SidePanel;