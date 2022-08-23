import React from "react";
// import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
// import { DownloadRounded } from "@mui/icons-material";
import { Button } from "@mui/material";

function DownloadBtn() {
    const onDownload = () => {
      const link = document.createElement("a");
      link.download = `event-1.txt`;
      link.href = "https://github.com/emmusic/Army-Week-Starter/blob/b9a3b4a231f747677b75e5ea4c5aeeb11f7f439b/src/docs/event-1.txt";
      link.click();
    };

    return (
      <React.Fragment>
        <DownloadBtn onClick={onDownload}
        variant="contained"
        color="primary">
          Download
        </DownloadBtn>
      </React.Fragment>
    );

  }

export default DownloadBtn;




// Function to download data to a .txt file - haven't been able to make it a specific file but at least it's getting a reaction??

// function DownloadBtn(data, filename, type)
// {
//   var file = new Blob([data], {type: type});
//   if (window.navigator.msSaveOrOpenBlob) // IE10+
//       window.navigator.msSaveOrOpenBlob(file, filename);
//   else { // Others
//       var a = document.createElement("a"),
//               url = URL.createObjectURL(file);
//       a.href = url;
//       a.download = filename;
//       document.body.appendChild(a);
//       a.click();
//       setTimeout(function() {
//           document.body.removeChild(a);
//           window.URL.revokeObjectURL(url);
//       }, 0);