import React from 'react'

function View() {
  return (
    <>
      <div className='view-header ps-5 pe-5 pt-4'> 
        <img src="/view/header.jpg" alt="header image" width={'100%'} />
    </div>
        <div className="row no-gutters">
        <div className="col d-flex justify-content-end">
            <img src="/view/left.jpg" alt="header image" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        <div className="col d-flex justify-content-start">
            <img src="/view/right.gif" alt="header image" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    </div>
      
    </>
  )
}

export default View
