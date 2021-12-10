import React from 'react';
import { RadioGroup, Radio } from 'sulu-admin-bundle/components/Radio';
import './colorPickerCustom.scss';

class ColorPickerCustom extends React.PureComponent {
  constructor() {
    super();
    this.state = { value: '#FFFFFF' };
    this.handleChange = this.handleChange.bind(this);
    if (process.env.COLOR_PICKER_COLORS) {
      this.colorlist = process.env.COLOR_PICKER_COLORS.split(' ');
    } else {
      this.colorlist = [];
    }
  }

  handleChange(value) {
    this.setState({ value });
    this.props.onChange(value);
    this.props.onFinish();
  }

  componentDidMount() {
    const radiogroup = document.getElementsByClassName("color-picker-radiogroup");
    const radioArray = [];
    for (let i = 0; i < radiogroup.length; i++) {
      let label = radiogroup[i].children;
      radioArray.push(label);
      radiogroup[i].parentElement.parentElement.parentElement.classList.add("radio-container")
      for (let j = 0; j < radioArray[i].length; j++) {
        radioArray[i][j].children[0].style.backgroundColor = this.colorlist[j]
      }
    }
  }

  render() {
    const { value: value } = this.props;
    const colorlist = []
    for(let i = 0; i < this.colorlist.length; i++) {
      colorlist.push(<Radio value={this.colorlist[i]} key={i}></Radio>)
    }
    return (
      <RadioGroup value={value} onChange={this.handleChange} className="color-picker-radiogroup">
        {colorlist}
      </RadioGroup>
    )
  }
}

export default ColorPickerCustom;
