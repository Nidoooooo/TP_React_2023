function Photo(props) {
    return(
      <div>
        <h3>{props.param.author} (#{props.param.id})</h3>
        <img src={`https://picsum.photos/id/${props.param.id}/${props.param.width}/${props.param.height}`} alt="Photo"></img>
      </div>
    );
}

export default Photo