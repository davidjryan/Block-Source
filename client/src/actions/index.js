import firebase from 'firebase'
import { auth } from '../services/firebase'
import { fetchStoredProjects, fetchProjectContributors } from '../services/api'

/*------------------ Fetch Endpoints --------------------------- */

export const projectsEndpoint = () => async (dispatch) => {
    const projects = await fetchStoredProjects();
    dispatch(setProjects(projects));
};

export const setProjects = (projects) => {
  return {
    type: 'SET_PROJECTS',
    projects
  }
};

export const contributorsEndpoint = (id) => async (dispatch) => {
  const contributors = await fetchProjectContributors(id);
  dispatch(setProjectContributors(contributors))
}

export const setProjectContributors = (contributors) => {
  return {
    type: 'SET_CONTRIBUTORS',
    contributors
  }
};

/*------------------ Login actions --------------------------- */

export const createUser = (email, password) => async (dispatch) => {
  auth.createUserWithEmailAndPassword(email, password).then((user) => {
    dispatch(createUserSuccess(user))
  }).catch((error) => {
    dispatch(createUserError(error))
  })
};

export const createUserSuccess = () => {
  return {
    type: 'CREATE_USER_SUCCESS'
  }
};

export const createUserError = () => {
  return {
    type: 'CREATE_USER_ERROR'
  }
};

/*----------------- Search Actions --------------------------- */

export const searchInputChange = (searchInput) => {
  return {
    type: 'SEARCH_CHANGE',
    searchInput
  }
};

export const clearSearchInput = () => {
  return {
    type: 'SEARCH_CLEAR',
    searchInput: ''
  }
};

