import React, { useState } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nama: "Hallo Jhonny" };
    this.state = { count: 0 };
  }
  handleClick(nama) {
    this.state({ nama: nama });
  }
  handleClickPlus = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  handleClickMin = () => {
    this.setState(({ count }) => ({
      count: count - 1
    }));
  };
  render() {

    return (
      <div>
        <h1>{this.state.nama}</h1>

        <button onClick={() => { this.setState({ nama: "Hallo Maman" }) }}>klik Maman</button>
        <button onClick={() => { this.setState({ nama: "Hallo Dudung" }) }}>klik Dudung</button>

        <p>Counter</p>
        <h1>{this.state.count}</h1>


        <button onClick={this.handleClickMin}>-1</button>;
        <button onClick={this.handleClickPlus}>+1</button>;


      </div >
    );
  }
}
export default App;