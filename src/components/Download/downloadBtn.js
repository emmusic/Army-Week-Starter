import React from "react";
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
// import { DownloadRounded } from "@mui/icons-material";
import { Button } from "@mui/material";


// Function to download data to a .txt file - haven't been able to make it a specific file but at least it's getting a reaction??

function DownloadBtn(data, filename, type)
{
  var file = new Blob([data], {type: type});
  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
      }, 0);

  //       return (
  //   <React.Fragment>
  //     <Button
  //     onClick={onDownload} variant="contained" color="primary">
  //       Download
  //     </Button>
  //   </React.Fragment>
  // );

  }
}

// function DownloadBtn() {
//   const onDownload = () => {
//     const link = document.createElement("a");
//     link.download = `event-1.txt`;
//     link.href = "../../components/docs/event-1.txt";
//     link.click();
//   };

//   return (
//     <React.Fragment>
//       <Button
//       onClick={onDownload} variant="contained" color="primary">
//         Download
//       </Button>
//     </React.Fragment>
//   );
// }

export default DownloadBtn;
