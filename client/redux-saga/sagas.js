import { put, call } from "redux-saga/effects";
import request from 'axios';
import {updateIssuesList, closeIssueError} from "../redux/actions"

const requestConfig = {
  responseType: 'json',
  headers: ReactOnRails.authenticityHeaders()
};



export function* closeIssueAsync(action) {

  try{
    yield request.post("close_issue", {id:action.value} , requestConfig)
    const response = yield call(fetch, 'update.json', requestConfig);
    const data = yield response.json();
    yield put(updateIssuesList(data));
  } catch (error) {
    console.log(error);
    yield put(closeIssueError(error));
  }

}


export function* createIssueAsync(action) {
  try{
    yield request.post("issue", {title: action.value.title, body: action.value.body} , requestConfig)
    const response = yield call(fetch, 'update.json', requestConfig);
    const data = yield response.json();
    yield put(updateIssuesList(data));
  } catch (error) {
    console.log(error);
    yield put(closeIssueError(error));
  }
}



