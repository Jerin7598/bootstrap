import React, { useState } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([

    'img1.webp',
    'img2.webp',
    'img3.webp',
    
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              maxWidth: currentIndex === index ? '300px' : '100px', // Adjust the sizes as needed
              maxHeight: '200px', // Adjust the sizes as needed
              margin: '0 10px',
              transition: 'all 0.3s ease', // Smooth transition
            }}
          />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <button onClick={showPreviousImage} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={showNextImage} disabled={currentIndex === images.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;