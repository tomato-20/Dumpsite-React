class Visibility extends React.Component {

    constructor (props){
        super(props);
        this.state = {
            visibility : false
        }
        this.onVisibilityToggle =this.onVisibilityToggle.bind(this);
    }

    onVisibilityToggle(){
        console.log(this.state.visibility);
        this.setState((prevState)=>{
            return {visibility: !prevState.visibility};
        })
    }

    render()
    {
        const visibility = this.state.visibility;
        return (
            <div id="toggle">
            <h1>Visibility Toggle</h1>
            <button onClick={this.onVisibilityToggle}> {visibility ? 'Hide detail' : 'Show Detail'}</button>
            {
                visibility && <p> This is the details shown or hidden on button click </p> 
            }
            </div>
        )
    }
}

ReactDOM.render(<Visibility/>,document.getElementById('root'))
// let visibility = false;

// const onVisibilityToggle = ()=>{
//     visibility = !visibility;
//     renderToggle();
// }

// const renderToggle = () =>
// {
//     const toggle = (
//         <div id="toggle">
//         <h1>Visibility Toggle</h1>
//         <button onClick={onVisibilityToggle}> {visibility ? 'Hide detail' : 'Show Detail'}</button>
//         {
//             !!visibility && <p> This is the details shown or hidden on button click </p> 
//         }
//         </div>
//     );
//     ReactDOM.render(
//         toggle,
//         document.getElementById('root')
//     );
// };

// renderToggle();