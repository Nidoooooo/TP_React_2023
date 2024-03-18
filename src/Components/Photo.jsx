function Photo(props) {
    return(
      <section>
      {
        props.param.map((item)=>{
          return(
            <div>
              <h3>{item.author} (#{item.id})</h3>
              <img src={`https://picsum.photos/id/${item.id}/${item.width}/${item.height}`} alt="Photo"></img>
            </div>
          )
        })
      }
      </section>
    );
}

export default Photo