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
        sx={{ bgcolor: green[500] }}
        onChange={e => setSelectedImage(e.target.files[0])}
      />
      <label htmlFor="select-image">
        <Button variant="contained"
        sx={{ bgcolor: green[500] }}
        color="primary"
        component="span"

        endIcon={< UploadFileRounded />
        }>
{/* sx={{ bgcolor: green[500] }}> */}

          Upload
        </Button>
      </label>
      {imageUrl && selectedImage && (
        <Box mt={2}
        textAlign="center">

          {/* <div>Preview:</div> */}
          <img src={imageUrl}
          alt={selectedImage.name} height="200px"
          />
        </Box>
      )}
    </>
  );
};

export default ImagePreview;