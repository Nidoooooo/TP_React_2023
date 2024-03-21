function Photo(props) {
  return( 
    <section>
      {
        props.param.map((item)=>{
          return(
            <div key={item.id}>
              <h3>{item.author} {props.showID?"#"+item.id:null}</h3>
              <img src={`https://picsum.photos/id/${item.id}/${item.width}/${item.height}`} alt="Photo" width="500px"></img>
            </div>
          );
        })
      }
      </section>
    );
}

export default Photo