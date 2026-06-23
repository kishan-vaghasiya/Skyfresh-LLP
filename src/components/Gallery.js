import React, { useState } from 'react';
import './Gallery.css';

const galleryImages = [
  { src: 'https://m.media-amazon.com/images/I/61aFPnRZOtL._SL1024_.jpg', alt: 'Onion Powder 1' },
  { src: 'https://5.imimg.com/data5/SELLER/Default/2024/12/476403454/QI/DB/JZ/45577315/dehydrated-garlic-powder-export-quality-500x500.png', alt: 'Garlic Powder 1' },
  { src: 'https://mstayna.in/wp-content/uploads/2024/06/bowl-dry-garlic-powder-rosemary-white-background_781325-19494.jpg', alt: 'Garlic Powder 2' },
  { src: 'https://dailyfarmer.in/cdn/shop/articles/SEOon_garlic-powder-cloves-feature_25ab90b2-f5c4-4346-b10c-26af5ef5d51f.jpg?v=1744262375', alt: 'Garlic Powder 3' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Our Product Gallery</h2>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => openModal(image)}>
              <img src={image.src} alt={image.alt} className="gallery-image" />
            </div>
          ))}
        </div>
        {isModalOpen && selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>&times;</button>
              <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;