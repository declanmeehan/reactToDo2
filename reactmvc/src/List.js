import React from 'react';
import ListFormat from './ListFormat';
//import InputGroup from 'react-bootstrap/InputGroup'
/*class ListFormat extends React.Component {
  render() {
    return(
      <div>
        <InputGroup></InputGroup>
        <h1> Exported ListFormat Component </h1>
      </div>
      )
  }
} */


class List extends React.Component {
  render() {
          /* listMap is a prop containing state.items from app.js */
    return(
        <div>
          {this.props.listMap.map(
          (item, index) => <ListFormat itemValue={item} index={index} key={index}/>
            )}
        </div>
      );
  }
}

export default List;

