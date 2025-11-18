// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import ModalWindow from 'components/Modal/Modal';
// import { Component } from 'react';
import { useEffect, useState } from 'react';
import { FallingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { getImage } from '@/services/api';

import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import ModalWindow from '../Modal/Modal';

// export const Spinner = styled(FallingLines)`
//   margin: 0 auto;
// `;

const ImageGallery = ({ search, page, onImagesUpdate }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      try {
        const response = await getImage(search, page);
        const newImages = response.hits;

        if (newImages.length) {
          // const imagesToUpdate = page === 1 ? newImages : [...images, ...newImages];
          setImages(prev => {
            const imagesToUpdate = page === 1 ? newImages : [...prev, ...newImages];
            onImagesUpdate(imagesToUpdate);
            return imagesToUpdate;
          });
        }
      } catch (error) {
        console.error('Ошибка при загрузке изображений:', error);
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [search, page, onImagesUpdate]);

  useEffect(() => {
    if (isShowModal) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => document.body.classList.remove('no-scroll');
  }, [isShowModal]);

  const showModal = largeImg => {
    setIsShowModal(true);
    setSelectedImage(largeImg);
  };

  const closeModal = e => {
    if (e.currentTarget === e.target || e.code === 'Escape') {
      setIsShowModal(false);
      setSelectedImage(null);
    }
  };

  return (
    <>
      <Gallery className={`container ${isLoading ? 'loading' : ''}`}>
        {images.map(({ webformatURL, id, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            previewURL={webformatURL}
            largeImg={largeImageURL}
            showModal={showModal}
          />
        ))}
      </Gallery>

      <div className="spinner">
        <FallingLines
          color="#007aff"
          width="250"
          visible={isLoading}
          ariaLabel="falling-circles-loading"
        />
      </div>

      {isShowModal && <ModalWindow largeImg={selectedImage} onClose={closeModal} />}
    </>
  );
};

export default ImageGallery;
