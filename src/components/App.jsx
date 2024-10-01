import '../styles/App.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import localStorage from '../services/localStorage';
import CreatePage from './Create-Page/CreatePage';
import { useLocation, matchPath } from 'react-router';
import Landing from './Landing';

function App() {
  const [error, setError] = useState('');

  const initialData = localStorage.get('storagedData') || {
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: '',
    photo: '',
    image: '',
  };

  const [data, setData] = useState(initialData);

  const updateInput = (newData) => {
    setData((prevData) => ({
      ...prevData,
      ...newData, 
    }));
  };

  const updateCard = (error) => {
    setError(error);
  };

  const [avatar, setAvatar] = useState('');
  const updateAvatar = (newAvatar) => {
    setAvatar(newAvatar);
    setData((prevData) => ({
      ...prevData,
      photo: newAvatar, // Update photo in the data state
    }));
  };

  const [avatarProfile, setAvatarProfile] = useState('');
  const updateAvatarProfile = (newAvatarProfile) => {
    setAvatarProfile(newAvatarProfile);
    setData((prevData) => ({
      ...prevData,
      image: newAvatarProfile, // Update image in the data state
    }));
  };

  const { pathname } = useLocation();
  const routeData = matchPath('/CreatePage', pathname);
  console.log(routeData);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              avatarProfile={avatarProfile}
              avatar={avatar}
              data={data}
            />
          }
        />
        <Route
          path="/CreatePage"
          element={
            <CreatePage
              updateAvatarProfile={updateAvatarProfile}
              avatarProfile={avatarProfile}
              updateAvatar={updateAvatar}
              avatar={avatar}
              data={data}
              updateInput={updateInput}
              updateCard={updateCard}
              error={error}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
