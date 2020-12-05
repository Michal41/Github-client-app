import { takeLatest, all } from "redux-saga/effects";
import ActionTypes from "../redux/actionTypes";
import {closeIssueAsync, createIssueAsync} from "./sagas"

export function* rootSaga() {
  yield all([
    watchCloseIssue(),
    watchCreateIssue()
  ])
}


export function* watchCloseIssue(){
  yield takeLatest(ActionTypes.CLOSE_ISSUE,closeIssueAsync);
}

export function* watchCreateIssue(){
  yield takeLatest(ActionTypes.CREATE_ISSUE,createIssueAsync);
}