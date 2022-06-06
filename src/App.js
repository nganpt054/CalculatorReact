import logo from './logo.svg';
import './App.css';
import OutputScreen from './Components/OutputScreen'
import Button from './Components/Button'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        question: '',
    }
    this.handleClick = this.handleClick.bind(this);
}

handleClick(event){
    const value = event.target.value;
    switch (value) {
        case '=': {
            if (this.state.question!=='')
            {
                var ans='';
                try {
                  ans = eval(this.state.question);
                } catch (error) {
                  ans="Math Error"
                }
               
                this.setState({question: ans});
                break;
            }
        }
        case 'AC': {
            this.setState({ question: '' });
            break;
        }

        case '+/-': {
            var str = this.state.question;
            str = str.substr(0,str.length-1);
            this.setState({question: str});
            break;
        }
      //   case 'X': {
      //     var str = this.state.question;
      //     str = str.substr(0,str.length)+"*";
      //     this.setState({question: str});
      //     break;
      // }
        default: {
            this.setState({ question: ((this.state.question += value).replace(/X/g, '*')).replace(/,/g, '.')})
            break;
        }
    }
}


  render(){
    return (
      <div className="frame" style={{background:"gray",width:"420px",height:"420px",margin:"auto"}}>
                  
                  <div className="mainCalc">
                    {/* Hiển thị kết quả */}
                      <OutputScreen question={this.state.question} />
                    <table>
                    <tr >
                          <th><Button className="btnaction1" label={'AC'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btnaction1" label={'+/-'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btnaction1" label={'%'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btnaction" label={'/'} handleClick={this.handleClick} /></th>
                      </tr>
                     
                      
                      <tr >
                          <th><Button className="btn" label={'7'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={'8'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={'9'}  handleClick={this.handleClick} /></th>
                          <th> <Button className="btnaction" label={'X'}   handleClick={this.handleClick} /></th>
                      </tr>
                     
                      
                      <tr >
                          <th><Button className="btn" label={'4'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={'5'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={'6'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btnaction" label={'-'}  handleClick={this.handleClick} /></th>
                      </tr>
                      
                      
                      <tr >
                          <th><Button className="btn" label={'1'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={'2'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={'3'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btnaction" label={'+'}  handleClick={this.handleClick} /></th>
                      </tr>
                    
                     
                        <tr >
                          <th colspan="2"><Button className="btn0"  label={'0'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={','}  handleClick={this.handleClick} /></th>
                          <th><Button className="btnaction" label={'='}  handleClick={this.handleClick} /></th>
                        </tr>
                    </table>   
                  </div>
              </div>
    );
  }
}
  

export default App;
