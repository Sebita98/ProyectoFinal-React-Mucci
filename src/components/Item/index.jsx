import './item.css';
import {Link} from 'react-router-dom'
const Item = ({ info }) => {
  return (
    <Link to={`/detalle/${info.id}`} className='perfumes'>
        <img src={info.image} alt="" />
        <p>{info.title}</p>
    </Link>
  );
}

export default Item;