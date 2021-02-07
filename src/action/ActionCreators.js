import {
  FETCH_LIST_ITEM_REQUEST,
  FETCH_LIST_ITEM_SUCCESS,
  FETCH_LIST_ITEM_FAILURE,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE  
} from './ActionTypes'

export function fetchLsitItemRequest() {
  return { type: FETCH_LIST_ITEM_REQUEST }
}

export function fetchLsitItemSuccess(items) {
  return { type: FETCH_LIST_ITEM_SUCCESS, payload: { items } }
}

export function fetchLsitItemFailure() {
  return { type: FETCH_LIST_ITEM_FAILURE }
}

export function fetchItemRequest(id) {
  return { type: FETCH_ITEM_REQUEST, payload: { id } }
}

export function fetchItemSuccess(item) {
  return { type: FETCH_ITEM_SUCCESS, payload: { item } }
}

export function fetchItemFailure() {
  return { type: FETCH_ITEM_FAILURE }
}
