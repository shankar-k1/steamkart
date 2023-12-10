import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./details.css"
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PRODUCTS } from '../../products';

export const Details = (props) => {

    const navigate = useNavigate();
  return (
    <div className="detail">
    <div>
      <h1>Details</h1>
    </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell>Model Name </TableCell>
            <TableCell  >Calories</TableCell>
            <TableCell >Fat&nbsp;(g)</TableCell>
            <TableCell >Carbs&nbsp;(g)</TableCell>
            <TableCell >Protein&nbsp;(g)</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableCell>{PRODUCTS.productName}</TableCell>
        </TableBody>        
    </Table>
    </TableContainer>
  <div className="Details-btn">
  <Button variant="contained" onClick={() => navigate("/")}> Continue Shopping </Button>
  </div>
  </div>
  );
};
