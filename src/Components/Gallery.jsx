import Photo from "./Photo";

function Gallery(props) {
  
    return(
        
        <div>
          <h1>Galerie de photos</h1>
          <Photo param={props.param} />
        </div>
    );
}
export default Gallery