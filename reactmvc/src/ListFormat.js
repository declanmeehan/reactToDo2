import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class ListFormat extends React.Component {
  constructor(props) {
    super(props)
      this.handleCheckBox = this.handleCheckBox.bind(this);
  }
    handleCheckBox(e) {
      console.log();
    } 
  render() {
    console.log(this.props);
    return (
      <div onChange={this.handleCheckBox}>
        <InputGroup className="mb-3 listCheckBox" >
          <InputGroup.Prepend>
            <InputGroup.Checkbox />
          </InputGroup.Prepend>
          <FormControl readOnly value={this.props.itemValue} />
        </InputGroup>
      </div>
    )
  }
}

export default ListFormat;