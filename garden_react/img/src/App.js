// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
    <BrowserRouter>
      {/* <Navigation /> */}
      <Router />
    </BrowserRouter>
    </Provider>
  );
}

export default App;


// function App() {
//   const [apiResults, setApiResults] = useState("")
//   const [isClicked, setIsClicked] = useState(false)

//   const loadApi = () => {
//     console.log(apiResults)
//     console.log('clicked')
//     setIsClicked(!isClicked)
//   }

//   useEffect(() => {
//     fetch('http://localhost:8080/gardens/')
//       .then(res => res.json())
//       .then(res => setApiResults(res))
//       .catch(err => err);
    
//   }, [])
  
//   if(!isClicked) {
//     return (
//       <div className="App">
//         <button onClick={loadApi}>Click Here</button>
//       </div>
//     );
//   } else {
//     return (
//       <div className="App">
//         <button onClick={loadApi}>Click Here</button>
//         <ul>
//           {apiResults.map(garden => {
//             return <li>{garden.id}</li>
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;
