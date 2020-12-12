function Car ({id, name, thumbnail, price}) {
    return (
        <div className = "car">
            
        <div className ="car__id">{id}</div>
        <div className ="car__name ">{name}</div>
        <div className= "car__thumbnail" src = {thumbnail} />
        <div className ="car__price">{price}</div>


        </div>

    )
  
  
}
export default Car
