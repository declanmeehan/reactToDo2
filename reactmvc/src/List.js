import React from 'react';

class List extends React.Component {
    handleCheckBox(e) {
  }
  render() {
    console.log(this.props);
    return(
      <div>
        <div>
          {/* listMap is a prop containing state.items from app.js */}
          {this.props.listMap.map(
          (item, index) => <li key={index} className="txt"> <input className="listCheckBox" onClick={this.handleCheckBox} type="checkbox" key={item} />{item}</li>)}
        </div>
      </div>
      );
  }
}

export default List;
