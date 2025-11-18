// import { Component } from 'react';
// import SearchBar from 'components/Searchbar/SearchBar';
import { useCallback, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Button from './components/Button/Button';
import ImageGallery from './components/ImageGallery/ImageGallery';
import SearchBar from './components/Searchbar/SearchBar';
// import ImageGallery from 'components/ImageGallery/ImageGallery';
// import Button from 'components/Button/Button';

const App = () => {
  // state = { search: '', page: 1, images: [] };
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState('');

  const onSubmit = ({ search }) => {
    // this.setState({ search, page: 1, images: [] });
    setSearch(search);
    setPage(1);
    setImages([]);
  };

  const handleImagesUpdate = useCallback(newImages => {
    setImages(newImages);
  }, []);

  const onLoadMore = () => {
    // console.log('load more click');
    // this.setState(prevState => ({
    //   page: prevState.page + 1,
    // }));
    setPage(prev => prev + 1);
  };

  // const { search, page, images } = this.state;
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
