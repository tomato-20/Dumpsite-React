import React from 'react';

import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'
export default class IndecisionApp extends React.Component {
  
  state = {
    options : [],
    isModalOpen : false,
    decision : undefined
  };
  
  handleAdd = (optionText) => {
    if (!optionText) {
        return 'Enter valid value to add item';
      }else if(this.state.options.indexOf(optionText) > -1) {
        return 'This option already exists';
      }
      this.setState((prevState)=>{
        return {
          options: prevState.options.concat(optionText)
        };
      })
    };
    
    handleDeleteAll= () => {
      this.setState(()=>({options: []}));
    };
    
    handleDeleteOption = (optionToRemove) => {
      this.setState((prevState)=>({
          options: prevState.options.filter((option)=>(option!==optionToRemove))
        }
        ))
    };
  
    handleMakeDecision = () => {
      const decisionIndex = Math.floor(Math.random()*this.state.options.length);
      const decision = this.state.options[decisionIndex];
      this.setState(()=>({isModalOpen: true,decision}))
    };

    handleModalClose = () => {
      this.setState(()=>({isModalOpen: false,decision: undefined}))
    }
    
    componentDidMount(){
      try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if (options)
        {
          this.setState(()=>({options}));
        }
      } catch(e){
        
      }
    };
    
    componentDidUpdate(prevProps,prevState){
      if(prevState.options.length !== this.state.options.length)
      {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options',json);
      }
    };

    render(){
      const title="Indecision";
      const subtitle="Put your life in the hands of computer ! ";
      const {decision} = this.state;
      return (
      <div>
        <Header  subtitle={subtitle} />
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0} 
            handleMakeDecision={this.handleMakeDecision}
          />
         <div className="widget">
          <Options 
          options={this.state.options} 
          handleDeleteAll={this.handleDeleteAll}
          handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption  handleAdd={this.handleAdd}/> 
         </div>
          <OptionModal 
          isModalOpen={this.state.isModalOpen}
          handleModalClose = {this.handleModalClose}
          >
            <h2 className="modal__title">Selected Option</h2>
            {{decision} && <p className="modal__body">{decision}</p>}
          </OptionModal>
        </div>
      </div>
      );
    }
  }