import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import HomeItems from '../../../../components/HomeItems';
import Map from '../../../../components/Map';
import { server } from './../../../../config/index';

export async function getServerSideProps(context) {

    const { code } = context.query;

    const res = await fetch(`${server}/api/property/buy/postal-code/${code}`);
    const properties = await res.json();

    return { props: { properties: properties } }
}

const name = ({ properties }) => {

    const [listProperty, setListProperty] = useState([]);

    const router = useRouter();
    const { code } = router.query;

    useEffect(() => {
        setListProperty(properties)
    }, [code])

    return (
        <div className='container-fluid'>
            <div className='row gx-5 m-0'>
                <div className='col-md-6'>
                    <div>
                        {
                            name
                            &&
                            <p className='text-center fw-bold pt-4'>Casa y apartamentos en venta en codigo postal {code}</p>
                        }
                        <div className='d-flex justify-content-between'>
                            <div>
                                {
                                    listProperty.length == 1
                                        ?
                                        <p>{listProperty.length} propiedad encontrada</p>
                                        :
                                        <p>{listProperty.length} propiedades encontradas</p>
                                }
                            </div>
                        </div>
                        <div className='row gy-4 py-4'>
                            {
                                listProperty.map((e, index) => {
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