import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {
  fetchItemRequest
} from '../action/ActionCreators';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Item = ({match}) => {
  const dispatch = useDispatch();
  const {loading, error, item} = useSelector(store => store.item);

  useEffect(() => {
    dispatch(fetchItemRequest(match.params.id));
  }, [dispatch, match.params.id])

  const retryFetch = () => {
    dispatch(fetchItemRequest(match.params.id));
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <Error retry={retryFetch} />
  }

  return (
    <form className='Form'>
      <div className='InputWrap'>
        <label htmlFor='name'>Название</label>
        <input id='name' name='name' disabled value={item.name} />
      </div>
      <div className='InputWrap'>
        <label htmlFor='price'>Название</label>
        <input id='price' name='price' disabled value={item.price} />
      </div>
      <div className='InputWrap'>
        <label htmlFor='content'>Название</label>
        <input id='content' name='content' disabled value={item.content} />
      </div>
    </form>
  )
}

export default Item;