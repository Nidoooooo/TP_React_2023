function Photo(props) {
    return(
      <div>
        <img src={`https://picsum.photos/id/${props.param.id}/${props.param.size.width}/${props.param.size.height}`} alt="Photo"></img>
      </div>
    );
}

export default Photo