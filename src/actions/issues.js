export const ADD_ISSUE = 'ADD_ISSUE'
export const RECEIVE_ISSUES = 'RECEIVE_ISSUES'
export const UPDATE_ISSUE = 'UPDATE_ISSUE'

export function addIssue (issue) {
  return {
    type: ADD_ISSUE,
    issue
  }
}

export function updateIssue (issue) {
  return {
    type: UPDATE_ISSUE,
    issue
  }
}

export function receiveIssues (issues) {
  return {
    type: RECEIVE_ISSUES,
    issues
  }
}
