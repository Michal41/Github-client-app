import { takeLatest, put, call } from "redux-saga/effects";

import request from 'axios';

const requestConfig = {
  responseType: 'json',
  headers: ReactOnRails.authenticityHeaders()
};

function* closeIssueAsync(action) {

  try{
    yield request.post("close_issue", {id:action.value} , requestConfig)
    console.log(action.value)
    const response = yield call(fetch, 'update.json', requestConfig);
    const data = yield response.json();
    yield put({ type: "UPDATE_ISSUES_LIST",value: data });
  } catch (error) {
    console.log(error);
    yield put({ type: "REMOVE_ISSUE_ERROR",value: error });
  }

}


function* createIssueAsync(action) {
  try{
    yield request.post("issue", {title: action.value.title, body: action.value.body} , requestConfig)
    const response = yield call(fetch, 'update.json', requestConfig);
    const data = yield response.json();
    yield put({ type: "UPDATE_ISSUES_LIST",value: data });
  } catch (error) {
    console.log(error);
    yield put({ type: "CREATE_ISSUE_ERROR",value: error });
  }
}



export function* watchCloseIssue(){
  yield takeLatest("CLOSE_ISSUE",closeIssueAsync);
}

export function* watchCreateIssue(){
  yield takeLatest("CREATE_ISSUE",createIssueAsync);
}