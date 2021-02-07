import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { FETCH_LIST_ITEM_REQUEST, FETCH_ITEM_REQUEST } from '../action/ActionTypes';
import { fetchLsitItemSuccess, fetchLsitItemFailure, fetchItemSuccess, fetchItemFailure } from '../action/ActionCreators';
import { of } from 'rxjs';

export const fetchListItemEpic = action$ => action$.pipe(
    ofType(FETCH_LIST_ITEM_REQUEST),
    switchMap(o => ajax.getJSON(`${process.env.REACT_APP_API}`).pipe(
      map(o => fetchLsitItemSuccess(o)),
      catchError(e => of(fetchLsitItemFailure(e))),
  )),
)


export const fetchItemEpic = action$ => action$.pipe(
  ofType(FETCH_ITEM_REQUEST),
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_API}/${o.payload.id}`).pipe(
    map(o => fetchItemSuccess(o)),
    catchError(e => of(fetchItemFailure(e))),
)),
)