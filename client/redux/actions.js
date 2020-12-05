import actionTypes from "./actionTypes"

export const updateIssuesList = (response) => ({
  type: actionTypes.UPDATE_ISSUES_LIST,
  value:response
});



export const closeIssueError = (response) => ({
  type: actionTypes.CLOSE_ISSUE_ERROR,
  value:response
});

