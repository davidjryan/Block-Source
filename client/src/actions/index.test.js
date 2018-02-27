import * as actions from './index';

describe('All actions', () => {
  describe('User actions', () => {
    let user;
    beforeEach( () => {
      user = {
        email: 'test@email.com',
        password: 'password'
      }
    })

    it('createUserSuccess returns an object with the type CREATE_USER_SUCCESS', () => {
      const expected = {
        type: 'CREATE_USER_SUCCESS'
      }
      expect(actions.createUserSuccess()).toEqual(expected)
    })

    it('createUserError returns an object with the type CREATE_USER_ERROR', () => {
      const expected = {
        type: 'CREATE_USER_ERROR'
      }
      expect(actions.createUserError()).toEqual(expected)
    })

  })

  describe('Fetch actions', () => {

    it('setProjects should return have a type of SET_PROJECTS', () => {
      const projects = [{title: 'Project 1'}, {title: 'Project 2'}]
      const expected = {
        type: 'SET_PROJECTS',
        projects
      }
      expect(actions.setProjects(projects)).toEqual(expected)
    })

  })
})