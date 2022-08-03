import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from 'react';
import { cuacaJaktim } from '../apis/cuaca';
import CuacaCard from '../components/CuacaCard';

const CuacaListJaktim = () => {
    const [dataCuaca, setCuaca] = useState([]);

    useEffect(() => {
        const fetchCuaca = async () => {
            try {
                const fetchedCuaca = await cuacaJaktim.get();
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

export default CuacaListJaktim;
