const callToApi = (data) => {
  return fetch('https://dev.adalab.es/api/projectCard', {
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
  const fetchData = await fetch("http://localhost:3000/listProject");
  const dataJson = await fetchData.json();
  return dataJson
} 

const object = {
  getDataProjects: getDataProjects,
  callToApi: callToApi
}

export default object;
