import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, useParams, useNavigate, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      });
  }, []);

  const handleClick = (userId) => {
    navigate(`/user/${userId}/albums`);
  }

  return (
    <ul>
      {users.map(user =>
        <li key={user.id}>
          <button onClick={() => handleClick(user.id)}>{user.name}</button>
        </li>
      )}
    </ul>
  );
};

const AlbumsList = () => {
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => {
        setAlbums(response.data);
      });
  }, [userId]);

  const handleClick = (albumId) => {
    navigate(`/album/${albumId}/photos`);
  }

  return (
    <ul>
      {albums.map(album =>
        <li key={album.id}>
          <button onClick={() => handleClick(album.id)}>{album.title}</button>
        </li>
      )}
    </ul>
  );
};

const PhotosList = () => {
  const [photos, setPhotos] = useState([]);
  const { albumId } = useParams();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => {
        setPhotos(response.data);
      });
  }, [albumId]);

  return (
    <ul>
      {photos.map(photo =>
        <li key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          {photo.title}
        </li>
      )}
    </ul>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:userId/albums" element={<AlbumsList />} />
      <Route path="/album/:albumId/photos" element={<PhotosList />} />
    </Routes>
  </Router>
);

export default App;
