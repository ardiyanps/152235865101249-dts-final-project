import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import theme from '../themes/theme';
import CuacaListBekasi from './CuacaListBekasi';
import CuacaListJakbar from './CuacaListJakbar';
import CuacaListJakkep from './CuacaListJakkep';
import CuacaListJakpus from './CuacaListJakpus';
import CuacaListJaksel from './CuacaListJaksel';
import CuacaListJaktim from './CuacaListJaktim';
import CuacaListJakut from './CuacaListJakut';
import image from '../img/home.png';

const Home = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{width: '100%', height: '60vh' , marginTop: 5 , backgroundImage: `url(${image})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>

      </Box>
    <Box sx={{ margin: 1, display: 'flex', flexDirection: 'column'}}>
    
      <h2 style={{marginLeft: 70, color: 'white'}}>Perkiraan Cuaca Bekasi</h2>
      <CuacaListBekasi />
          <center><h3 style={{color: 'whitesmoke' }}>Data perkiraan cuaca berdasarkan pengamatan oleh Badan Meteorologi Klimatologi dan Geofisika</h3></center>
      <h2 style={{marginLeft: 70, color: 'white'}}>Perkiraan Cuaca Jakarta Timur</h2>
      <CuacaListJaktim />
      <center><h3 style={{color: 'whitesmoke' }}>Di Indonesia, informasi prakiraan cuaca setiap daerah dikeluarkan oleh <br/>
      Badan Meteorologi, Klimatologi dan Geofisika (BMKG). Setiap pagi, kita bisa melihat informasi perkiraan cuaca yang dikeluarkan BMKG</h3></center>
      <h2 style={{marginLeft: 70, color: 'white'}}>Perkiraan Cuaca Jakarta Barat</h2>
      <CuacaListJakbar />
      <center><h3 style={{color: 'whitesmoke' }}>Berikut tahapan BMKG dalam membuat prakiraan cuaca: <br/>
      <br/>
      * Pengamatan unsur-unsur cuaca dilakukan oleh Stasiun Meteorologi dan Klimatologi secara umum, <br/>
      serta oleh pelayanan khusus pada bandara, perkebunan, pelabuhan dan pelayaran kapal. <br/>
      Sementara itu, pengamatan kualitas udara di lakukan oleh Stasiun GAW (Global Atmosphere Watch) dan<br/> 
      pengamatan unsur medan bumi (percepatan tanah, magnet bumi, gempa bumi) di lakukan oleh Stasiun Geofisika.<br/> 
       </h3></center>
      <h2 style={{marginLeft: 70, color: 'white'}}>Perkiraan Cuaca Jakarta Selatan</h2>
      <CuacaListJaksel />
      <center><h3 style={{color: 'whitesmoke' }}>
      * Pengamatan juga dilakukan secara otomatis menggunakan alat-alat canggih untuk mendukung data analisis dan prakiraan,<br/> 
      seperti pendeteksi petir (lightning detector), alat yang digunakan untuk mendeteksi kejadian petir termasuk jenis dan tipe petir.<br/> 
      Ada radar cuaca untuk memonitor pergerakan awan, curah hujan, jenis awan, intensitas curah hujan secara real time pada suatu daerah dengan jangkuan 250 kilometer.<br/>
       Ada juga ARG (Automatic Rain Gauge) atau dikenal penakar hujan otomatis, alat yang digunakan untuk mengukur curah hujan dalam satuan waktu. <br/>
       Lalu, ada AWS (Automatic Weather Station) yang digunakan untuk mengukur unsur-unsur cuaca secara otomatis, yakni suhu, angin, kelembapan, <br/>
       radiasi matahari, curah hujan, dan tekanan udara. Alat ini diletakkan di wilayah yang berada di luar jangkuan stasiun pengamatan. <br/>
       </h3></center>
      <h2 style={{marginLeft: 70, color: 'white'}}>Perkiraan Cuaca Jakarta Utara</h2>
      <CuacaListJakut />
      <center><h3 style={{color: 'whitesmoke' }}>* Kemudian data pengamatan yang dihasilkan, baik dari stasiun maupun dari peralatan otomatis, masuk ke dalam PC server.<br/>
       * Data dari PC server tersebut kemudian masuk ke dalam server pusat. <br/>
      <br/>
       Begitu pula data dari satelit cuaca juga masuk ke server pusat.<br/>
        Data-data ini diatur secara sistematik dan terstuktur untuk mencegah terjadinya server down</h3></center>
      <h2 style={{marginLeft: 70, color: 'white'}}>Perkiraan Cuaca Jakarta Pusat</h2>
      <CuacaListJakpus />
      <center><h3 style={{color: 'whitesmoke' }}>* Selanjutnya data yang masuk tersebut diolah dalam komputer analis dan perkiraan, <br/>
      sehingga dihasilkan prakiraan cuaca harian dan mingguan. Selain itu, dihasilkan pula cuaca penerbangan, <br/>
      cuaca maritim, peringatan dini, perubahan iklim, prakiraan iklim, kualitas udara, hingga gempa bumi dan tsunami.</h3></center>
      <h2 style={{marginLeft: 70, color: 'white'}}>Perkiraan Cuaca Jakarta Kepulauan Seribu</h2>
      <CuacaListJakkep />
      <center><h3 style={{color: 'whitesmoke' }}>* Informasi yang dihasilkan dari pengolahan data itu pun dibagikan ke masyarakat luas, <br/>
      seperti setiap harinya informasi prakiraan cuaca </h3></center>
    </Box>
    </ThemeProvider>
  )
}

export default Home