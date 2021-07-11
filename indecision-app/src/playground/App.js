class IndecisionApp extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      options : []
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDeleteAll = this.handleDeleteAll.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleMakeDecision = this.handleMakeDecision.bind(this);
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
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.options.length !== this.state.options.length)
    {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }
  }

  componentWillUnmount(){

  }


  handleAdd(optionText){
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
  }

  handleDeleteAll(){
    this.setState(()=>({options: []}));
  }

  handleDeleteOption(optionToRemove){
    this.setState((prevState)=>({
        options: prevState.options.filter((option)=>(option!==optionToRemove))
      }
    ))
  }

  handleMakeDecision(){
    const decision = Math.floor(Math.random()*this.state.options.length);
    const option = this.state.options[decision];
    alert(option); 
  }

  render(){
    const title="Indecision";
    const subtitle="Put your life in the hands of computer. ";
    
    return (
    <div>
      <Header  subtitle={subtitle} />
      <Action 
        hasOptions={this.state.options.length > 0} 
        handleMakeDecision={this.handleMakeDecision}
      />
      <Options 
        options={this.state.options} 
        handleDeleteAll={this.handleDeleteAll}
        handleDeleteOption={this.handleDeleteOption}
      />
      <AddOption  handleAdd={this.handleAdd}/>
    </div>
    );
  }
}

const Header = (props)=>{    
    return( 
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
  
};

Header.defaultProps = {
  title: 'Indecision',
  subtitle: 'subtithe goes'
}

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handleMakeDecision}> What should i do ?</button>
    </div>
  )
};

const Options = (props) => {
    const options = props.options;
    return (
      <div>
          Your options
          <button onClick={props.handleDeleteAll}>remove all</button>
          <div> 
          {options.length == 0 && <p>Please add an option to get started. </p>}
          {
              options.map((option,key) =>  (
                <Option  
                  key={key}
                  optionText={option}
                  handleDeleteOption={props.handleDeleteOption}
                />)
                )
          }
        </div>
      </div>
    )
  

}

const Option = (props) => {
  return (
    <div>
      <span>{props.optionText}</span>
      <button onClick={(e)=>(props.handleDeleteOption(props.optionText))}>
        remove
      </button>
    </div>
  )
};

class AddOption extends React.Component{

  constructor(props)
  {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAdd(option);

    this.setState(()=>({error }));

    if(!error) {
     e.target.elements.option.value='';
    }
  }

  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button >Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp/>
  ,document.getElementById('root'))