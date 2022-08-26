import React, {useState} from "react";
import "antd/dist/antd.css";
import {Modal, Button} from "antd";
import Pdf from "react-pdf-js";
import {ZoomInOutlined, ZoomOutOutlined} from '@ant-design/icons';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';


const PdfViewer = ({pdf, onCancel, visible, name, publicURL}) => {

// const [myPdf, setMyPdf] = useState(null);
const [page, setPage] = useState(1);
const [pages, setPages] = useState(null);
const [scale, setScale] = useState(1);

const onDocumentComplete = (numPages) =>{
  setPages(numPages)
}

const onDocumentError = (err) => {
  console.error('pdf viewer error:', err);
}

const onSetScale = (type) =>{

    var newScale = type ? scale + 0.1 : scale - 0.1;

    if (newScale > 2){
        newScale = 2
    } else if (newScale < 0.1){
        newScale = 0.1
    }

    setScale(newScale)

}

const onPage = (type) =>{

  var newPage = type ? page + 1 : page - 1

  if (newPage > pages){
    newPage = 1
  } else if (newPage < 1){
    newPage = pages
  }

  setPage(newPage)
}

const zoomStyle = {
    marginLeft: 10,
    cursor: 'pointer'
}

//This button looks nice but I can't get it to work
// const Download = () => {
//   const link = document.createElement("a");
//   link.download = {name};
//   link.href = {pdf};
//   link.click();
// };

const footer = <div className="footer">
{/* <Stack
direction="row"
justifyContent="space-between"> */}
  {/* <Button onClick={Download}>Download</Button> */}
  <div>
  {/* <Stack direction="row"> */}
  <Button onClick={()=>onPage(0)}>Previous</Button>
  <Button onClick={()=>onPage(1)}>Next</Button>
  {/* </Stack> */}
  </div>
{/* </Stack> */}
    <div>  
   <span style={{textAlign: 'center'}}>Page {page} of {pages}</span>
       <ZoomOutOutlined style={{...zoomStyle, opacity: scale === 0.1 ? 0.5 : 1}} onClick={()=>onSetScale(0)}/>
       <ZoomInOutlined style={{...zoomStyle, opacity: scale === 2 ? 0.5 : 1}} onClick={()=>onSetScale(1)}/>
       <span>{Math.round(scale * 100)}%</span>
    </div>   
</div>

return (<Modal maskClosable={false}
               onCancel={onCancel}
               visible={visible}
               width={"50%"}
               bodyStyle={{height: 600, overflowY: 'auto'}}
               style={{ top: 20 }}
               footer={footer}

>
<div className="pdfWrapper">
    <Pdf
        file={pdf}
        onDocumentComplete={onDocumentComplete}
        onDocumentError={onDocumentError}
        page={page}
        scale={scale}
    />
</div>
</Modal>)

};
export default PdfViewer;