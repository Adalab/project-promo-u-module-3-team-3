const callToApi = (data) => {
  return fetch('https://cards-maker.onrender.com/newCard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.success) {
        return result.cardURL;
      }
    });
};

const getDataProjects = async () => {
  const fetchData = await fetch('https://cards-maker.onrender.com/listProject');
  const dataJson = await fetchData.json();
  return dataJson;
};
const deleteProject = async (projectId) => {
  const response = await fetch(
    `https://cards-maker.onrender.com/deleteProject/${projectId}`,
    {
      method: 'DELETE',
    }
  );

  const result = await response.json();
  return result;
};

const object = {
  getDataProjects: getDataProjects,
  callToApi: callToApi,
  deleteProject: deleteProject,
};

export default object;
