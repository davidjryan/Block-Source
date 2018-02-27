import * as apiCalls from './api'

describe('Api Calls tests', () => {

  describe('Projects fetch test', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(
          ['array', 'of', 'projects']
        )
      }));
    });

    it('should fetch the projects', async () => {
      const projects = await apiCalls.fetchStoredProjects();
      expect(projects).toEqual(['array', 'of', 'projects'])
    })
  })

  describe('Contributors fetch test', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(
          ['array', 'of', 'contributors']
        )
      }));
    });

    it('should fetch contributors for each project', async () => {
      const contributors = await apiCalls.fetchProjectContributors();
      expect(contributors).toEqual(['array', 'of', 'contributors'])
    })
  })

})