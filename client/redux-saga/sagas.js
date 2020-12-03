import { takeLatest, put, call } from "redux-saga/effects";

import request from 'axios';



function* createIssueAsync(action) {
  const requestConfig = {
    responseType: 'json',
    headers: ReactOnRails.authenticityHeaders()
  };

  try{
    yield request.post("issue", {title: action.value.title, body: action.value.body} , requestConfig)
    
    
    const response = yield call(fetch, 'update.json', requestConfig);
    const data = yield response.json();
    yield put({ type: "CREATE_ISSUE_SUCCES",value: data });
    
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