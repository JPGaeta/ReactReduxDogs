import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import styles from './FeedPhoto.module.css';
import { useSelector } from 'react-redux';

const FeedPhoto = ({ setModalPhoto }) => {
  const { list } = useSelector((state) => state.feed);
  return (
    <ul className={`${styles.feed} animeLeft`}>
      {list.map((photo) => (
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  );
};

export default FeedPhoto;
