import React from 'react'

const LoadingItems = () => {
    return (
        <div className='container-fluid'>
            <div className='row gx-5 m-0'>
                <div className='col-md-6'>
                    <div className='placeholder-glow'>
                        <div className='d-flex justify-content-center  pt-4'>
                            <p className='placeholder col-5'></p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p className='placeholder col-4'></p>
                        </div>
                        <div className='row gy-4 py-4'>
                            {(() => {
                                let items = [];
                                for (let i = 0; i <= 10; i++) {
                                    items.push(
                                        <div className='col-lg-6 col-xxl-4' key={i}>
                                            <div style={{ height: '180px' }}>
                                                <div className='w-100 h-100 rounded-4 bg-gray'></div>
                                            </div>
                                            <div className='px-2 pt-2'>
                                                <p className="placeholder col-5"></p>
                                                <p className='placeholder col-10'></p>
                                                <p className='placeholder col-4'></p>
                                                <br />
                                                <p className='placeholder col-5'></p>
                                            </div>
                                        </div>
                                    );
                                }
                                return items;
                            })()}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-md-block d-none">
                    <div className='pt-5 px-4'>
                        <div className='w-100 vh-75 rounded-4 bg-gray'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingItems