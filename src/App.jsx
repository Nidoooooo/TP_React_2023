import './App.css'
import Gallery from './Components/Gallery'

function App() {

  const pics = [{
    id:2,
    size:{
      width:500,
      height:600
    }
  },{
    id:9,
    size:{
      width:200,
      height:400
    }
  },{
    id:8,
    size:{
      width:300,
      height:100
    }
  }];

  return (
    <div>
      <Gallery param={pics}/>
    </div>
  );
}

export default App