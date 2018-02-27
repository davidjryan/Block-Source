const projectsData = require("../projectsData");
const contributorsData = require("../contributorsData");
const projectsContributorsData = require("../projectsContributorsData");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects_contributors")
    .del()
    .then(() => knex("contributors").del())
    .then(function() {
      return knex.raw("ALTER SEQUENCE contributors_id_seq RESTART WITH 1");
    })
    .then(() => knex("projects").del())
    .then(function() {
      return knex.raw("ALTER SEQUENCE projects_id_seq RESTART WITH 1");
    })
    .then(() => {
      return Promise.all([
        knex("projects")
          .insert(projectsData, "id")
          .then(() => {
            return knex("contributors").insert(contributorsData, "id");
          })
          .then(() => {
            return knex("projects_contributors").insert(
              projectsContributorsData
            );
          })
          .then(() => console.log("Seeding complete!"))
          .catch(error => console.log(`Error seeding data: ${error}`))
      ]); // end return Promise.all
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
