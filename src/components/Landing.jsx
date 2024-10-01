import React, { useEffect, useState } from "react";

function Landing({ avatar, avatarProfile }) {
  const [listProject, setListProject] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/listProject")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setListProject(data); // Ensure data is an array
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="landing">
        <section className="landing__section1">
          <SubHeader
            title={"Proyectos Molones"}
            subTitle={"¿Te gustaría darte a conocer?"}
            desc={
              "Si estás buscando un lugar donde publicar tus proyectos para que el mundo conozca tu increible potencial y tus grandes capacidades, has llegado al sitio correcto."
            }
            textButton={"Comienza ahora"}
            btnLink={"/CreatePage"}
          />
        </section>
        <section className="landing_section2">
          {Array.isArray(listProject) ? (
            <CardData
              avatar={avatar}
              data={listProject}
              avatarProfile={avatarProfile}
              className="landing_card"
            />
          ) : (
            <p>No projects found.</p>
          )}
        </section>
      </div>
    </>
  );
}

Landing.propTypes = {
  avatar: PropTypes.string,
  data: PropTypes.object,
  className: PropTypes.string,
  avatarProfile: PropTypes.string,
};

export default Landing;
