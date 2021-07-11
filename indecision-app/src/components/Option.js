import React from 'react';

 const Option = (props) => (
  <div className="option">
    <span className="option__text">{props.count}. {props.optionText}</span>
    <button 
      className="button--link"
      onClick={(e)=>(props.handleDeleteOption(props.optionText))}
    >
      remove
    </button>
  </div>
)
  export default Option;