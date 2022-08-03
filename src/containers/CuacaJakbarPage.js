import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import cuacaJakbar from '../apis/cuaca';
import CuacaCard from '../components/CuacaCard';

const CuacaJakbarPage = () => {
    const [dataCuaca, setCuaca] = useState([]);

    useEffect(() => {
        const fetchCuaca = async () => {
            try {
                const fetchedCuaca = await cuacaJakbar.get();
                setCuaca(fetchedCuaca.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchCuaca();
    }, []);

    
    const array = dataCuaca.map((x) => {
        x.unique = Math.random()
        return x;
    })
    console.log(dataCuaca);
    
    return (
            <Box sx={{ display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
            mt: 5}}>
            {
                    array.map(cuaca => (
                        <CuacaCard key={cuaca.unique} cuaca={cuaca}></CuacaCard>
                    ))
                }
            </Box>
    );
}

export default CuacaJakbarPage;
