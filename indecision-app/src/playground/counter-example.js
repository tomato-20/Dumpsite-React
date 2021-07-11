class Counter extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      count : 0
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount(){
    try {
      const json = localStorage.getItem('count');
      const count = parseInt(json,10);
      if(!isNaN(count))
      {
        this.setState(()=>({count}));
      }

    } catch(e) {

    }
  }

  componentDidUpdate(prevProps,prevState){
    if(this.state.count !== prevState.count )
    {
      localStorage.setItem('count',this.state.count); 
    }
  }

  handleAdd(){
    console.log('addOne');
    // this.setState({
    //   count: this.state.count + 1
    // })
    this.setState((prevState)=> {
      return {count: prevState.count+1};   
    })
  }

  handleMinus(){
    console.log('subOne');
    this.setState((prevState)=> {
      return {count: prevState.count-1};   
    })
    
   
  }

  handleReset(){
    console.log('reset');
    const count = this.state.count;
    this.setState(()=>
    {
      return {
        count: 0
      }
    })
  }


  render(){
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleMinus}>-</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}


ReactDOM.render(<Counter/>,document.getElementById('root'))



// let count = 0;

// const addOne = ()=>{
//   console.log('addOne');
//   count++;
//   renderApp();
// }
// const subOne = ()=>{
//   console.log('subOne');
//   if (count) count--;
//   renderApp();
// }
// const reset = ()=>{
//   console.log('reset');
//   count=0;
//   renderApp();
// }

// const renderApp = () => {
//   const counter = (
//     <div>
//     <h1> Count: {count}</h1>
//     <button onClick={addOne}> + </button>
//     <button onClick={subOne}> - </button>
//     <button onClick={reset}> reset </button>
//     </div>
//   )
//   ReactDOM.render(
//     counter,
//     document.getElementById('root')
//     );
// }

// renderApp();