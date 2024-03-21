import Photo from "./Photo";


function Gallery(props) {
  
    return(
        <div>
          <h1>Gallerie de photos</h1>
          <Photo param={props.param} showID={props.showID}/>
        </div>
    )
}
export default Gallery