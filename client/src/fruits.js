import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



class Fruits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      current_fruit_pic: '',
      fruits: []
    };
  }
  componentWillMount(){
    let that = this;
    fetch('http://localhost:3001/fruits',{mode: 'cors'}).then((res)=>{
      res.json().then((data)=>{
        that.setState({
          fruits: data
        })
      });
    });
  }

  handleChange = (event, index, value) => {
    this.setState({
      msg: "you have clicked " + value.type,
      current_fruit_pic: value.img
    },()=> console.log(this.state));
  };
  render() {
    return (
    <MuiThemeProvider>
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}  openImmediately={true}>
        {
          this.state.fruits.map(function(fruit,i){
            return <MenuItem key={i} value={fruit} primaryText={fruit.type}/>
          })   
        }
        </DropDownMenu>
        <h2>{this.state.msg}</h2>
        <img className='fruit-image' src={this.state.current_fruit_pic} alt='no fruit chosen'/>
        <br/>
        <br/>
        <br/>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default Fruits;