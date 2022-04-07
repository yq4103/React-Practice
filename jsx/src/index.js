import ReactDOM from 'react-dom';

function getButtonText() {
  return 'CLICK ME!';
}

//Create a react component
const APP = () => {
  return (
  <div>
    <label className="label" htmlFor="name">Enter name:</label>
    <input id="name" type="text" />
    <button style={{backgroundColor: 'blue', color: 'white'}}>
      {getButtonText()}
    </button>
  </div>
  );
};

//Show the component on the screen
ReactDOM.render(
  <APP />,
  document.querySelector('#root')
);