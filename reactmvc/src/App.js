import React from 'react';
import './App.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
//import List from './List'

class InputForm extends React.Component 
{
  constructor(props){
    super(props)
    this.state = {
      items: [],
      value: '',
      list: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
      }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.state.items.push(this.state.value);
    this.setState({ 
    list: this.state.items.map((item) => <InputGroup className="mb-3" >
            <InputGroup.Prepend>
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            </InputGroup.Prepend>
            <FormControl aria-label="" value={item} />
          </InputGroup>
        )
    // <li className="listStyle" key={item}><input type="checkbox" className="listCheckBox" />{item}</li>)
    })
  }
  render() {
    const divStyle = {
      height: '100%',
    };
    return (
      <div style={divStyle}>
        <input type="text" value={this.state.value} onChange={this.handleChange}  />
        <input type="submit" value="submit" onClick={this.handleSubmit} className="buttonStyle" id="submitButton" />
        <div className="listCheckBoxContainer">
          <ul className="listContainer">
            {this.state.list}
          </ul>
          <div id="deleteButton">
            <input type="submit" value="delete" className="buttonStyle"/>  
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
