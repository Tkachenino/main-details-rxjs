import {
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE  
} from '../action/ActionTypes'

const initialStore = {
  loading: true,
  error: false,
  item: {
    name: "",
    price: 0,
    content: ""
  }
}

export const ItemReducer = (store = initialStore, action) => {
  switch (action.type) {
    case FETCH_ITEM_REQUEST: {
      return {...store, loading: true, error: false}
    }
    case FETCH_ITEM_SUCCESS: {
      const { item } = action.payload;
      return {...store, item, loading: false}
    }
    case FETCH_ITEM_FAILURE: {
      return {...store, loading: false, error: true}
    }
    default: {
      return store;
    }
  }
}