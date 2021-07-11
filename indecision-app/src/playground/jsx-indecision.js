
// if statement
//terminal operator
//logical and operator

const app = {
    title : 'Indecision App',
    subtitle : 'Your thoughs laid out.',
    options :[]
};

const onRemoveAll = (e)=>{
  app.options = [];
  renderTemplate();
}

const onMakeDecision= (e)=>
{
  const randomPick = Math.floor(Math.random()*app.options.length);
  const option = app.options[randomPick];
  alert(option);
}

const onFormSubmit = (e)=>{
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderTemplate();
}

const renderTemplate = ()=>{
  const template = (
    <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <button disabled={app.options.length==0} onClick={onMakeDecision}>What to do?</button>
    { !!app.options.length && <button onClick={onRemoveAll}>Remove All</button>}
    {
      app.options.length ? 
      (<div>
          <p>Here are your options</p>
          <ol>
          {app.options.map((option,key) =>
              <li key={key}>{option}</li>
          )
          }
          </ol>
      </div>)
      :
      (<p> No options </p>)
    } 
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
    </form>
    </div>
  );
  ReactDOM.render(template,document.getElementById('root'));
}


renderTemplate();
