import React from 'react';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { UploadFileRounded } from '@mui/icons-material';
import { green } from '@material-ui/core/colors';

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
        <Button variant="contained"
        color="primary"
        component="span"
        sx={{ bgcolor: green[500] }}
        endIcon={< UploadFileRounded />}>
          Upload
        </Button>
      </label>
      {imageUrl && selectedImage && (
        <Box mt={1} textAlign="center">
          {/* <div>Preview:</div> */}
          <img src={imageUrl}
          alt={selectedImage.name} height="300px" />
        </Box>
      )}
    </>
  );
};

export default ImagePreview;