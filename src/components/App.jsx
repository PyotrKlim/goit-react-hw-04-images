import { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import GalleryList from './ImageGallery/ImageGallery';
import css from './styles.css';
import * as ImageService from '../service/image-service';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export default function App() {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const asyncWrapper = async () => {
      try {
        setIsLoading(true);
        setError('');

        const data = await ImageService.getImages(query, page);

        setImages(prev => [...prev, ...data.hits]);
        setTotalImages(data.totalHits);
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [query, page]);

  const getQuery = NewQuery => {
    if (NewQuery === query) {
      alert('Change request');
      return;
    }
    setQuery(NewQuery);
    setImages([]);
    setPage(1);
    setTotalImages(0);
  };

  const pageAddition = () => setPage(prev => prev + 1);

  const showButton = images.length !== totalImages && !isLoading;

  return (
    <div className={css.App}>
      <Searchbar onSubmit={getQuery} />
      {images.length > 0 && <GalleryList images={images} />}
      {isLoading && <Loader />}
      {showButton && <Button onClick={pageAddition} />}
      {error && <p>{error}</p>}
    </div>
  );
}
