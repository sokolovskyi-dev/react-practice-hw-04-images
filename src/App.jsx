import { useCallback, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/Searchbar/SearchBar';

const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState('');

  const onSubmit = ({ search }) => {
    setSearch(search);
    setPage(1);
    setImages([]);
  };

  const handleImagesUpdate = useCallback(newImages => {
    setImages(newImages);
  }, []);

  const onLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <>
      <ToastContainer />
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery search={search} page={page} onImagesUpdate={handleImagesUpdate} />
      {images.length > 0 && <Button onClick={onLoadMore} />}
    </>
  );
};

export default App;
