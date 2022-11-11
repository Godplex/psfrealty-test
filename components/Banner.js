import { useRouter } from "next/router";
import { useState } from "react";
import { Nav } from 'react-bootstrap';
import styles from "../styles/components/_banner.module.scss";
import { AsyncPaginate } from 'react-select-async-paginate';

export async function getServerSideProps(context) {

    const { name } = context.query;

    const res = await fetch(`${server}/api/property/buy/city/${name}`);
    const properties = await res.json();

    return { props: { properties: properties } }
}

const Banner = () => {

    const router = useRouter();

    const [query, setQuery] = useState('');

    const [filterButton, setFilterButton] = useState(true);

    const handleFilterButton = () => {
        setFilterButton(!filterButton);
    }

    const handleOnSelect = (item) => {
        if (filterButton) {
            item.type === 'city'
                ?
                router.push(`/property/buy/city/${item.label.replaceAll(' ', '-')}`)
                :
                item.type === 'code'
                    ?
                    router.push(`/property/buy/postal-code/${item.label}`)
                    :
                    router.push(`/property/buy/county/${item.label.replaceAll(' ', '-')}`)
        } else {
            item.type === 'city'
                ?
                router.push(`/property/rent/city/${item.label.replaceAll(' ', '-')}`)
                :
                item.type === 'code'
                    ?
                    router.push(`/property/rent/postal-code/${item.label}`)
                    :
                    router.push(`/property/rent/county/${item.label.replaceAll(' ', '-')}`)
        }
    }

    return (
        <div className="px-4">
            <div className={`rounded-4 position-relative d-flex justify-content-center ${styles.bgHome}`}>
                <div className="col-md-9 col-lg-6 text-white d-flex justify-content-center align-items-center flex-column">
                    <p className="text-uppercase display-5 mb-0">Propiedades</p>
                    <p className="text-uppercase display-5 mb-0">Financiamiento</p>
                    <p className="text-uppercase display-5 mb-0">Servicios</p>
                    <div className="d-flex">
                        <Nav variant="pills">
                            <button
                                className={`btn bg-secondary ${!filterButton ? 'text-white' : 'text-dark fw-bold'}`}
                                onClick={handleFilterButton}
                                style={{ "--bs-bg-opacity": !filterButton ? 0.3 : 1 }}
                            >
                                Usados
                            </button>
                            <button
                                className="btn bg-secondary text-white"
                                onClick={() => window.location.href = 'https://pfsrealty.com/proyectos-preconstruccion/'}
                                style={{ "--bs-bg-opacity": 0.3 }}
                            >
                                Nuevos
                            </button>
                            <button
                                className={`btn bg-secondary ${filterButton ? 'text-white' : 'text-dark fw-bold'}`}
                                onClick={handleFilterButton}
                                style={{ "--bs-bg-opacity": filterButton ? 0.3 : 1 }}
                            >
                                Rentar
                            </button>
                        </Nav>
                    </div>
                    <div className="col-md-9 col-lg-7 pt-4 col-10">
                        <AsyncPaginate
                            loadingMessage={() => 'Cargando...'}
                            noOptionsMessage={() => 'No hay datos.'}
                            placeholder="Buscar por ciudad, codigo postal o condado."
                            isSearchable
                            id="search"
                            instanceId="search"
                            className="text-dark"
                            inputValue={query}
                            onInputChange={setQuery}
                            onChange={handleOnSelect}
                            formatOptionLabel={(data) => {
                                return <>
                                    <span style={{ display: 'block', textAlign: 'left' }}>
                                        <i className="fa-solid fa-building-user"></i>
                                        &nbsp;
                                        {data.label}
                                    </span>
                                    <small style={{ display: 'block', textAlign: 'left' }}>
                                        {
                                            data.type === 'city'
                                                ?
                                                'Ciudad'
                                                :
                                                data.type === 'code'
                                                    ?
                                                    'Codigo postal'
                                                    :
                                                    'Condado'
                                        }
                                    </small>
                                </>;
                            }}
                            loadOptions={async (search) => {

                                const response = search.length > 0 && await fetch(`/api/filter/${query}`);
                                const responseJSON = response ? await response.json() : [];

                                return {
                                    options: responseJSON,
                                };
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner