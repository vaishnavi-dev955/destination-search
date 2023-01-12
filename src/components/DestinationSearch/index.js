// Write your code here
import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList

  return (
    <li>
      <div>
        <img src={imgUrl} className="image1" alt={name} />
        <p className="para">{name}</p>
      </div>
    </li>
  )
}

export default DestinationSearch
