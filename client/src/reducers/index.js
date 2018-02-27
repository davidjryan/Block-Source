import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer';
import loginReducer from './loginReducer';
import searchReducer from './searchReducer';
import contributorReducer from './contributorReducer';

const rootReducer = combineReducers({
  projects: projectsReducer, 
  user: loginReducer, 
  searchInput: searchReducer,
  projectContributors: contributorReducer
});

export default rootReducer;