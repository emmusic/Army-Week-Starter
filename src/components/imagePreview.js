import React from 'react';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


const ImagePreview = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
      if (selectedImage) {
        setImageUrl(URL.createObjectURL(selectedImage));
      }
    }, [selectedImage]);

    return (
      <>
        <input
          accept="image/*"
          type="file"
          id="select-image"
          style={{ display: 'none' }}
          onChange={e => setSelectedImage(e.target.files[0])}
        />
        <label htmlFor="select-image">
          <Button variant="contained" color="primary" component="span">
            Upload Image
          </Button>
        </label>
        {imageUrl && selectedImage && (
          <Box mt={2} textAlign="center">
            <div>Image Preview:</div>
            <img src={imageUrl} alt={selectedImage.name} height="400px" />
          </Box>
        )}
      </>
    );
  };


export default ImagePreview;