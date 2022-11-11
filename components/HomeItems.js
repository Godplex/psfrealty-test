import Image from 'next/image';
import React from 'react';
import NoImage from "../assets/no-image.jpg";

const HomeItems = ({
    naturalPrice,
    property_bathsFull,
    property_bedrooms,
    property_area,
    address, city,
    state,
    postalCode,
    json_data
}) => {

    const options = { style: 'currency', currency: 'USD', maximumFractionDigits: 0, minimumFractionDigits: 0, };
    const numberFormat = new Intl.NumberFormat('es-US', options);

    return (
        <div className='col-lg-6 col-xxl-4'>
            <div style={{ height: '180px' }}>
                <Image
                    src={json_data.photos[0] ? json_data.photos[0] : NoImage}
                    alt="logo"
                    width="100"
                    height="100"
                    className='w-100 h-100 rounded-4'
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            </div>
            <div className='px-2'>
                <div className="fw-bold fs-5">{numberFormat.format(naturalPrice)}</div>
                <div>
                    <i className="fa-solid fa-bath"></i>{` ${property_bathsFull}ba `}
                    <i className="fa-solid fa-bed"></i>{` ${property_bedrooms}hb `}
                    {
                        property_area !== "NULL"
                        &&
                        <span><i className="fa-solid fa-cube"></i>{` ${property_area}sqft `}</span>
                    }
                </div>
                <div>{`${address}, ${city}`}</div>
                <div>{`${state} ${postalCode}`}</div>
            </div>
        </div>
    )
}

export default HomeItems