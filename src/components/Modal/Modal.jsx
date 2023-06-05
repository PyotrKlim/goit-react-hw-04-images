import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ switchModal, user, largeImageURL }) {
  useEffect(() => {
    const handalKeyDown = e => {
      if (e.key === 'Escape') {
        switchModal();
      }
    };

    window.addEventListener('keydown', handalKeyDown);

    return () => {
      window.removeEventListener('keydown', handalKeyDown);
    };
  }, [switchModal]);

  return createPortal(
    <div className={css.Overlay} onClick={switchModal}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt={user} className={css.Modal} />
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  user: PropTypes.string.isRequired,
  switchModal: PropTypes.func.isRequired,
};
