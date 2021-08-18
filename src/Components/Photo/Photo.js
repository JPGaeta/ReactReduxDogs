import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPhoto } from '../../store/photo';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { loading, data, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [dispatch, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} />
      </section>
    );
  return <div>{id}</div>;
};

export default Photo;
