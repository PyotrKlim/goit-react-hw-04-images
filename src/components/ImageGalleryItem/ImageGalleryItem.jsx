import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function GalleryItem({ webformatURL, user, largeImageURL }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    if (showModal === true) {
      setShowModal(false);
      return;
    }
    setShowModal(true);
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        onClick={toggleModal}
        src={webformatURL}
        alt={user}
        className={css.ImageGalleryItemImage}
      />
      {showModal && (
        <Modal
          largeImageURL={largeImageURL}
          user={user}
          switchModal={toggleModal}
        />
      )}
    </li>
  );
}

GalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
