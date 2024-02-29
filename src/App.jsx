import './App.css'
function App() {
  const title = {
    text1:"Hello",
    text2:"React"
  };
  return (
    <div>
      <Gallery />
    </div>
  );
}

export default App

const Photo = () => {
  return(
    <img src="https://picsum.photos/id/16/200"></img> 
  );
}

const Gallery = () => {
  return(
      <section>
        <h1>Galerie de photos</h1>
        <Photo />
        <Photo />
      </section>
  );
}