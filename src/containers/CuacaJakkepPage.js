import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import cuacaJakkep from '../apis/cuaca';
import CuacaCard from '../components/CuacaCard';

const CuacaJakkepPage = () => {
    const [dataCuaca, setCuaca] = useState([]);

    useEffect(() => {
        const fetchCuaca = async () => {
            try {
                const fetchedCuaca = await cuacaJakkep.get();
                setCuaca(fetchedCuaca.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchCuaca();
    }, []);

    console.log(dataCuaca);

    const array = dataCuaca.map((x) => {
        x.unique = Math.random()
        return x;
    })

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

export default CuacaJakkepPage;
