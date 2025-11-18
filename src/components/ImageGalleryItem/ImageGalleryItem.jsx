import React from 'react';

import { GalleryItem } from './GalleryItem.styled';

const ImageGalleryItem = ({ previewURL, largeImg, showModal }) => {
  return (
    <GalleryItem onClick={() => showModal(largeImg)}>
      <img src={previewURL} alt="dog" />
    </GalleryItem>
  );
};

export default ImageGalleryItem;
