import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from 'react';
import cuacaBekasi from '../apis/cuaca';
import CuacaCard from '../components/CuacaCard';

const CuacaListBekasi = () => {
    const [dataCuaca, setCuaca] = useState([]);

    useEffect(() => {
        const fetchCuaca = async () => {
            try {
                const fetchedCuaca = await cuacaBekasi.get();
                setCuaca(fetchedCuaca.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchCuaca();
    }, []);

    return (
            <Carousel itemsToShow={6}>
            {
                    dataCuaca.map(cuaca => (
                        <CuacaCard key={cuaca.kodeCuaca} cuaca={cuaca}></CuacaCard>
                    ))
                }
            </Carousel>
    );
}

export default CuacaListBekasi;
