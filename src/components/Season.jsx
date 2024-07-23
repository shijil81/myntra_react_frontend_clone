import React from 'react'
import SeasonCarosil from './SeasonCarosil'

function Season() {
  return (
    <>
      <div className="season-header">
        <img src="/season/headerr.jpg" alt="season_header_img" width={'100%'} />
      </div>
      <div className="row">
        <div className="col">
            <img src="/season/100offf.jpg" alt="offer_img" width={'100%'} />
        </div>
        <div className="col">
        <img src="/season/200offf.jpg" alt="offer_img" width={'100%'} />
        </div>
      </div>
      <div className='omg'>
      <img src="/season/omgg.jpg" alt="omg_deals_img" width={'100%'} />
      </div>
      <div className='mt-3 ms-3 '>
        <SeasonCarosil/>
      </div>
    </>
  )
}

export default Season
