import { takeLatest, put, call } from "redux-saga/effects";

import request from 'axios';

const delay = (ms) => new Promise(res => setTimeout(res, ms))




function* ageUpAsync() {
  yield delay(4);
  yield put({ type: "AGE_UP_ASYNC", value: 1 });
}


function* createIssueAsync(action) {
  const requestConfig = {
    responseType: 'json',
    headers: ReactOnRails.authenticityHeaders()
  };
  try{
    yield request.post("issue", {title: action.value.title, body: action.value.body} , requestConfig)
    yield put({ type: "CREATE_ISSUE_SUCCES",value: action.value });
    
  } catch (error) {
    yield put({ type: "CREATE_ISSUE_ERROR",value: error });
  }

}



export function* watchAgeUp() {
  yield takeLatest("AGE_UP", ageUpAsync);
}

export function* watchCreateIssue(){
  yield takeLatest("CREATE_ISSUE",createIssueAsync);
}