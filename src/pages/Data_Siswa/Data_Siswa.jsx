import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function Data_Siswa() {
  const [data, setData] = useState([]);
  // async function getDataProduct() {
  //   await fetch('http://127.0.0.1:8080/siswa/data-siswa')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }
  const getDataSiswa = () => {
    axios({
      method: 'GET',
      url: 'http://127.0.0.1:8080/siswa/data-siswa',
    }).then((result) => {
      setData(result.data.data);
    });
  };

  useEffect(() => {
    getDataSiswa();
  }, []);

  console.log(getDataSiswa);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell>Kelas</TableCell>
              <TableCell>Umur</TableCell>
              <TableCell>Alamat</TableCell>
              <TableCell>Status Aktif</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{row.id}</TableCell>
                <TableCell align="left">{row.nama}</TableCell>
                <TableCell align="left">{row.kelas}</TableCell>
                <TableCell align="left">{row.umur}</TableCell>
                <TableCell align="left">{row.alamat}</TableCell>
                <TableCell align="left">{row.status_aktif}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
