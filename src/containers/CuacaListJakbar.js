import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from 'react';
import { cuacaJakbar } from '../apis/cuaca';
import CuacaCard from '../components/CuacaCard';

const CuacaListJakbar = () => {
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

    return (
            <Carousel itemsToShow={6}>
            {
                    array.map(cuaca => (
                        <CuacaCard key={cuaca.unique} cuaca={cuaca}></CuacaCard>
                    ))
                }
            </Carousel>
    );
}

export default CuacaListJakbar;
