import { useRouter } from 'next/router'
import HomeItems from '../../../../components/HomeItems';
import Map from '../../../../components/Map';
import useSWR from 'swr';
import { fetcher } from './../../../../utils/fetcher';
import LoadingItems from './../../../../components/LoadingItems';

const name = () => {

    const router = useRouter();
    const { name } = router.query;

    const { data, error } = useSWR(`/api/property/buy/county/${name}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <LoadingItems />

    return (
        <div className='container-fluid'>
            <div className='row gx-5 m-0'>
                <div className='col-md-6'>
                    <div>
                        {
                            name
                            &&
                            <p className='text-center fw-bold pt-4'>Casa y apartamentos en venta en {name.replaceAll('-', ' ')}</p>
                        }
                        <div className='d-flex justify-content-between'>
                            <div>
                                {
                                    data.length == 1
                                        ?
                                        <p>{data.length} propiedad encontrada</p>
                                        :
                                        <p>{data.length} propiedades encontradas</p>
                                }
                            </div>
                        </div>
                        <div className='row gy-4 py-4'>
                            {
                                data.map((e, index) => {
                                    return <HomeItems key={index} {...e} />
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-md-block d-none">
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default name