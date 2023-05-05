import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function Payment() {
  const [data, setData] = useState([]);
  // async function getDataProduct() {
  //   await fetch('http://127.0.0.1:8080/siswa/data-siswa')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }
  const getDataPayment = () => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8080/siswa/payment',
    }).then((result) => {
      setData(result.data.data);
    });
  };

  useEffect(() => {
    getDataPayment();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama</TableCell>
              <TableCell>Nominal</TableCell>
              <TableCell>Pembayaran Via</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row.nama}</TableCell>
                <TableCell align="left">{row.nominal}</TableCell>
                <TableCell align="left">{row.pembayaran_via}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
