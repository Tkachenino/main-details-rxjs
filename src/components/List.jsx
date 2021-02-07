import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchLsitItemRequest
} from '../action/ActionCreators';

import Error from './Error';
import Loader from './Loader';
import pencil from '../assets/pencil.svg';

const List = ({history}) => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchLsitItemRequest());
  }, [dispatch])

  const editItem = (id) => {
    history.push(`/services/${id}`)
  }

  const retryFetch = () => {
    dispatch(fetchLsitItemRequest());
  }

  const {loading, error, items} = useSelector(store => store.list);
  
  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error retry={retryFetch} />;
  }

  return (
    <div className='List'>
      {items.map(item => (
        <div className='ListItem' key={item.id}>
        <p>{item.name}: {item.price} руб.</p>
        <div className='BtnWrap'>
          <button
           className={`Btn BtnEdit ${item.loading ? 'btnDisabled' : ''}`}
           disabled={item.loading}
           onClick={() => {editItem(item.id)}}
           >
            <img src={pencil} alt='pencel' />
          </button>
        </div>
      </div>
      ))}
    </div>
  )
}

export default List;