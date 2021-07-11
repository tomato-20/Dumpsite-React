import React from 'react';
import Option from './Option'

const Options = (props) => {
    const {options,handleDeleteOption} = props;
    return (
      <div>
          <div className="widget-header">
            <h3 className="widget-header__title ">Your options</h3>
            <button 
              className="button--link"
              onClick={props.handleDeleteAll}
            >
              Remove All
            </button>
          </div>
          <div className="widget-content">
          {options.length == 0 && <p className="option widget-content__title">Please add an option to get started ! </p>}
          {
              options.map((option,index) =>  (
                <Option  
                  key={index}
                  count = {index + 1}
                  optionText={option}
                  handleDeleteOption={handleDeleteOption}
                />)
                )
          }
        </div>
      </div>
    )
}

export default Options;