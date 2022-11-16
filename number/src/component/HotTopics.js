import React from 'react'

function HotTopics() {
  return (
    <>
    <div className='row row-cols-1 row-cols-md-3 mb-3 text-center'>
        <div className='col'>
            <h4 className='my-0 fw-normal'>Free</h4>
        </div>
        <div className='card-body'>
            <h1 className='card-title pricing-card-title'>2000</h1>
        </div>
        <div className='col'>
            <h4 className='my-0 fw-normal'>Free 1</h4>
        </div>
        <div className='card-body'>
            <h1 className='card-title pricing-card-title'>2000</h1>
        </div>
        <div className='col'>
            <h4 className='my-0 fw-normal'>Free 2</h4>
        </div>
        <div className='card-body'>
            <h1 className='card-title pricing-card-title'>2000</h1>
        </div>
    </div>
    
    </>
  )
}

export default HotTopics