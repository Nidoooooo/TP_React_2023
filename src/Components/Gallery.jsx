import Photo from "./Photo";

function Gallery(props) {
  
    return(
        
        <div>
          <h1>Galerie de photos</h1>
          <Photo param={props.param[0]} />
          <Photo param={props.param[5]} />
          <Photo param={props.param[6]} />
          <Photo param={props.param[7]} />
          <Photo param={props.param[8]} />
          <Photo param={props.param[9]} />
        </div>
    );
}
export default Gallery