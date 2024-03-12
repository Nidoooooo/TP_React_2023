import Photo from "./Photo";

function Gallery(props) {
  
    return(
        
        <div>
          <h1>Galerie de photos</h1>
          <Photo param={props.param[0]} />
          <Photo param={props.param[1]} />
          <Photo param={props.param[2]} />
        </div>
    );
}
export default Gallery