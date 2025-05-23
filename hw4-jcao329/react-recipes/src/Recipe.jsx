export default function Recipe(props){

    
    return (
        <div className="card mb-3">
          <img src={props.thumbnail + "/large"} className="card-img-top" alt={props.title} />
    
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" className="card-link" onClick = {props.showDetails}>View Details</a>
          </div>
        </div>
      )
}