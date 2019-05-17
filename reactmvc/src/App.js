import React from 'react';
import './App.css';
import List from './List'

class InputForm extends React.Component 
{
  constructor(props){
    super(props)
    this.state = {
      items: [],
      value: '',
      list: '',
      checkBox: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);


      }
  handleKeyDown(e) {
    if (e.key === 'Enter') {
      document.getElementById('submitButton').click();
    }
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    //e.target.value.preventDefault();
      this.state.items.push(this.state.value)
    this.setState({ 
      value: ''
    })
  }
    componentDidUpdate() {

    }
    handleDelete(e) {
      var listCheckBox = document.getElementsByClassName('listCheckBox');
      var unchecked = [];
      for(var i = 0; i < listCheckBox.length; i++) {
      if(listCheckBox[i].checked === false) {
        unchecked.push(listCheckBox[i].nextSibling.data);
      }

    } 
      this.setState({
        items: unchecked
      })
    } 

  render() {
    const divStyle = {
      height: '100%',
    };
    return (
      <div style={divStyle}>
        <input type="text" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
        <input type="submit" value="submit" onClick={this.handleSubmit} className="buttonStyle" id="submitButton" />
        <div className="listCheckBoxContainer">
          <ul className="listContainer">
          <List listMap={this.state.items} />
          </ul>
          <div id="deleteButton">
            <input type="submit" value="delete" className="buttonStyle" onClick={this.handleDelete} id="submit" />  
          </div>
        </div>
      </div>
    )
  }  
} 

function App() {
  return (
    <div className="App">
      <h1> To Do </h1>
      <InputForm />
    </div>
  );
}

export default App;
