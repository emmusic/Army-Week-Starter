import React from 'react';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';


// const UploadApp = () => {

//     const submitForm = () => {};

//     return (
//       <div className="UploadFile">
//         <form>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <FileUploaded
//             onFileSelectSuccess={(file) => setSelectedFile(file)}
//             onFileSelectError={({ error }) => alert(error)}
//           />

//           <button onClick={submitForm}>Submit</button>
//         </form>
//       </div>
//     );
//   };
// export default UploadApp;

// const submitForm = () => {
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("file", selectedFile);

//     axios
//       .post(UPLOAD_URL, formData)
//       .then((res) => {
//         alert("File Upload success");
//       })
//       .catch((err) => alert("File Upload Error"));
//   };