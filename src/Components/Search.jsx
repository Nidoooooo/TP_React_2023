
function Search(props){
    
    return(
       <div>
           <label htmlFor='rechercher'>Rechercher : </label>
           <input id="rechercher" type='text' onChange={props.onSearch}></input>
           
       </div> 
    )
}


export default Search