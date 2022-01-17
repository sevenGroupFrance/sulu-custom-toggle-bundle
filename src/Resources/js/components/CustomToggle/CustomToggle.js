import React from 'react';
import Switch from 'react-switch';
import './customToggle.scss';

class CustomToggle extends React.PureComponent {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleClick.bind(this);
  }

  handleClick(checked) {
    this.setState({ checked });
    this.props.onChange(checked);
    this.props.onFinish();
  }

  componentDidMount() {
    this.sectionRender()
  }

  componentDidUpdate() {
    this.sectionRender()
  }

  sectionRender() {
    const input = document.querySelectorAll('input[role=switch]');

    for (let i = 0; i < input.length; i++) {
      let inputAttr = input[i].parentElement.parentElement.parentElement.parentElement.previousSibling.getAttribute('for');
      inputAttr = inputAttr.substring(inputAttr.lastIndexOf('/') + 1, inputAttr.length);
      const togglerLabel = document.querySelectorAll('label[for*=' + inputAttr + ']');
      for (let j = 0; j < togglerLabel.length; j++) {
        togglerLabel[j].classList.add('togglerlabel');
      }
      const label = document.querySelectorAll('label[for*=' + inputAttr + '_]');
      if (input[i].checked === true) {
        for (let k = 0; k < label.length; k++) {
          label[k].parentElement.parentElement.style.display = "block";
          label[k].parentElement.parentElement.classList.add('togglerelement');
          label[label.length - 1].parentElement.parentElement.classList.add('togglerlastelement');
        }
      } else {
        for (let k = 0; k < label.length; k++) {
          label[k].parentElement.parentElement.style.display = "none";
        }
      }
    }
  }

  render() {
    const { value: checked } = this.props;
    const finalChecked = checked !== undefined
      ? checked
      : false

    return (
      <div className="toggler-custom">
        <Switch
          onChange={this.handleChange}
          checked={finalChecked}
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 10,
                color: "white",
                paddingRight: 2
              }}
            >
              ON
            </div>
          }
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 10,
                color: "white",
                paddingRight: 2
              }}
            >
              OFF
            </div>
          }
        />
      </div>
    );
  }
}

export default CustomToggle;
