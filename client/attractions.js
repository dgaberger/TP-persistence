let list = {};

const load = (route) => {
  return fetch(route)
    .then(result => result.json())
    .then(loadedAttractions => {
      list = loadedAttractions;
      return list;
    })
    .catch(console.error);
};

const find = (category, id) => {
  return list[category].find(attraction => +attraction.id === +id);
};

module.exports = {
  load,
  find
};
