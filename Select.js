import React from 'react';
​
export class Select extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
​
  }
​
  handleChange(e) {
this.props.changeName(e.target.value)
  }
​
  render() {
    return (
      <div>
        <h1>Pickup a name :</h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Cornelius">Cornelius</option>
          <option value="Philomena">Philomena</option>
          <option value="Rhythm">Rhythm</option>
        </select>
      </div>
    );
  }
}