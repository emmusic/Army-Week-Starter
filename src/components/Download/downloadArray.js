import React from "react";
import PropTypes from "prop-types";
// import { withStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';
import { Button } from "@mui/material";



const styles = theme => ({

root: {
width: "100%",
marginTop: theme.spacing.unit * 3,
overflowX: "auto"
},

table: {
minWidth: 700
}

});

const data = [

{
title: "Event 1",
description: "Advanced bi-directional alliance",
image: "event-1.txt",
price: "Lcol Soandso"
}


];

class SimpleTable extends React.Component {
constructor(props) {
super(props);
this.state = {
values:data
};

}

    handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
    console.log(this.state.values);
    alert('The link was clicked..ouuuu does it do anything?.');
    axios.get('/DownlodedDataExport').then(response => {
    console.log(response)

})

axios({

    url: '../../components/docs/',
    //'/files/saveJson'
    method: 'GET',
    responseType: 'blob', // important

}).then((response) => {

const url = window.URL.createObjectURL(new Blob([response.data],{type: "application/json"}));

const link = document.createElement('a');

link.href = url;
link.setAttribute('download', 'txtfile');
document.body.appendChild(link);
link.click();
});

};

handleClick1 = (e) => {

e.preventDefault();

console.log('The link was clicked... omg I hope it works.');

alert('You clicked the link! Pray the dwan gremlins dont gobble it up.');

axios.get('/DownlodedDataExport').then(response => {

console.log(response)

})

axios({

url: './eventDetails',

method: 'GET',

responseType: 'blob', // important

}).then((response) => {

const url = window.URL.createObjectURL(new Blob([response.data],{type: "binary/octet-stream", responseType: 'arraybuffer'}));

const link = document.createElement('a');

//     link.download = `event-1.txt`;
//     link.href = "../../components/docs/event-1.txt";
//     link.click();


link.href = url;
link.setAttribute('download', 'event-1');
document.body.appendChild(link);
link.click();

});

};

dataDisplay(){

if(this.state.values.length!==0){

return (

<div>
<div>
<Paper className>
<Table className>
<TableHead>
<TableRow>

<TableCell align="center">VIN</TableCell>

<TableCell align="center">File Name</TableCell>

<TableCell align="center">Price</TableCell>

</TableRow>

</TableHead>

<TableBody>

{this.state.values.map(row => (

<TableRow key={row.id}>

<TableCell align="center">{row.title}</TableCell>

<TableCell align="center">

<a href="" onClick={this.handleClick}>{row.image}</a>

</TableCell>

<TableCell align="center">{row.price}</TableCell>

</TableRow>

))}

</TableBody>

</Table>

</Paper>

</div>

<div>

<Button variant="contained"
color="primary"
alignitems="center" onClick={this.handleClick1}

size="large" style={{margin:20}}>

Download All Files

</Button>

</div>

</div>

);

// console.log(this.state.values.length)

}

}

render(){

const { classes,values } = this.props;

return (

<div>

{this.dataDisplay()}

</div>

);

}

}

SimpleTable.propTypes = {

classes: PropTypes.object.isRequired

};

// export default withStyles(styles)(SimpleTable);
export default SimpleTable;