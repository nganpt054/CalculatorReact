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
        answer:''
    }
    this.handleClick = this.handleClick.bind(this);
}

handleClick(event){
    const value = event.target.value;
    switch (value) {
         case'=': {          
            if ((this.state.answer!==''))
            {
                var ans='';
                try {
                  ans = eval((((this.state.answer).replace(/x/g, '*')).replace(/,/g, '.')).replace(/%/g, '/100'));
                } catch (error) {
                  ans="Math Error"
                }
                this.setState({answer: ans});  
            }
            break;
        }
        
        case 'AC': {
            this.setState({ answer: '' });
            break;
        }
        
        case '+/-': {
            var str = this.state.answer;
            str = str.slice(0,-1);
            this.setState({answer: str});
            break;
        }
        
        default: {
          {
           if ((this.state.answer)!=="")
            {
              if(this.state.answer==="Math Error")
              this.setState({answer:value})
              else
              {
                if((this.state.answer)!=="0")
                { 
                    if ((this.state.answer).slice(-1)==='+'||
                        (this.state.answer).slice(-1)==='-'||
                        (this.state.answer).slice(-1)==='/'||
                        (this.state.answer).slice(-1)==='x'||
                        (this.state.answer).slice(-1)===',')
                        {
                          if(  value!=='+'&&
                               value!=='-'&&
                               value!=='x'&&
                               value!=='/'&&
                               value!==',') 
                         {
                            this.setState({ answer: 
                            (this.state.answer += value)})
                          }
                        }
                    else 
                    if((this.state.answer).slice(-1)==='0')
                      {
                        if((this.state.answer).slice(-2,-1)==='+'||
                           (this.state.answer).slice(-2,-1)==='-'||
                           (this.state.answer).slice(-2,-1)==='x'||
                           (this.state.answer).slice(-2,-1)==='/')
                           {
                             if(value==='+'||
                                value==='-'||
                                value==='x'||
                                value==='/'||
                                value===',')
                                {this.setState({ answer:(this.state.answer += value)})}
                              else 
                              {
                                var str=this.state.answer;
                                str = str.slice(0,-1)+value;
                                this.setState({answer: str});
                              }
                           }
                        else
                        // if ((this.state.answer).slice(-2,-1)===','||(this.state.answer).slice(-2,-1)==='0')
                                {this.setState({ answer:(this.state.answer += value)})};
                     }
                     else this.setState({ answer:(this.state.answer += value)});
               }
               else
               {
                 if( value===","||
                     value==="+"||
                     value==="-"||
                     value==="x"||
                     value==="/")
                  {
                    this.setState({ answer: 
                    (this.state.answer += value)})
                  }
                  else 
                  {
                    var str=this.state.answer;
                    str = str.slice(0,-1)+value;
                    this.setState({answer: str});
                  }
                }
              }
           }
            else {
              if(value!=='x'&&value!=='/')
              this.setState({answer:value}); 
            }
        }
    }
  }
}
  


  render(){
    return (
      <div className="frame" style={{background:"gray",width:"420px",height:"420px",margin:"auto"}}>
                  
                  <div className="mainCalc">
                    {/* Hiển thị kết quả */}
                      <OutputScreen  question={this.state.question} answer={this.state.answer}/>
                    <table>
                    <tr >
                      {dataOne.length > 0 && dataOne.map((item, index) => (
                        <th key={index}><Button className={item.className} label={item.label}   handleClick={this.handleClick} /></th>

                      ))}
                          {/* <th><Button className="btnaction1" label={'+/-'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btnaction1" label={'%'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btnaction" label={'/'} handleClick={this.handleClick} /></th> */}
                      </tr>
                     
                      
                      <tr >
                      {dataTwo.length > 0 && dataTwo.map((item, index) => (
                        <th key={index}><Button className={item.className} label={item.label}   handleClick={this.handleClick} /></th>

                      ))}
                          {/* <th><Button className="btn" label={'7'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={'8'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={'9'}  handleClick={this.handleClick} /></th>
                          <th> <Button className="btnaction" label={'X'}   handleClick={this.handleClick} /></th> */}
                      </tr>
                     
                      
                      <tr >
                      {dataThree.length > 0 && dataThree.map((item, index) => (
                        <th key={index}><Button className={item.className} label={item.label}   handleClick={this.handleClick} /></th>

                      ))}
                          {/* <th><Button className="btn" label={'4'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={'5'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={'6'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btnaction" label={'-'}  handleClick={this.handleClick} /></th> */}
                      </tr>
                      
                      
                      <tr >
                      {dataFour.length > 0 && dataFour.map((item, index) => (
                        <th key={index}><Button className={item.className} label={item.label}   handleClick={this.handleClick} /></th>

                      ))}
                          {/* <th><Button className="btn" label={'1'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={'2'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={'3'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btnaction" label={'+'}  handleClick={this.handleClick} /></th> */}
                      </tr>
                    
                     
                        <tr >
                          <th colspan="2"><Button className="btn0"  label={'0'}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={','}  handleClick={this.handleClick} /></th>
                          {/* <th><Button className="btn" label={'('}  handleClick={this.handleClick} /></th>
                          <th><Button className="btn" label={')'}  handleClick={this.handleClick} /></th> */}
                          <th><Button className="btnaction" label={'='}  handleClick={this.handleClick} /></th>
                        </tr>
                    </table>   
                  </div>
              </div>
    );
  }
}
  

const dataOne = [
  {
    label: 'AC',
    className: 'btnaction1'
  },
  {
    label: '+/-',
    className: 'btnaction1'
  },
  {
    label: '%',
    className: 'btnaction1'
  },
  {
    label: '/',
    className: 'btnaction'
  },
]
const dataTwo = [
  {
    label: '7',
    className: 'btn'
  },
  {
    label: '8',
    className: 'btn'
  },
  {
    label: '9',
    className: 'btn'
  },
  {
    label: 'x',
    className: 'btnaction'
  },
]
const dataThree = [
  {
    label: '4',
    className: 'btn'
  },
  {
    label: '5',
    className: 'btn'
  },
  {
    label: '6',
    className: 'btn'
  },
  {
    label: '-',
    className: 'btnaction'
  },
]
const dataFour = [
  {
    label: '1',
    className: 'btn'
  },
  {
    label: '2',
    className: 'btn'
  },
  {
    label: '3',
    className: 'btn'
  },
  {
    label: '+',
    className: 'btnaction'
  },
]

export default App;
