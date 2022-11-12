import React from 'react';

function Aboutus (){
  return(
    <div className='container-aboutus'>
      <div className='main-aboutus'>
        <div className='d-flex justify-content-center mt-4'>
          <h1>Sobre Nosotros:</h1>
        </div>
        <div className='Eduardo d-flex justify-content-center'>
          <div className='d-flex'><h2>Eduardo</h2></div>
          <img src="../img/imgSection.webp" alt="" />
        </div>
        <div className='Valentina d-flex justify-content-center'>
          <h2>Valentina</h2>
        </div>
        <div className='Joaquin d-flex justify-content-center'>
          <h2>Joaquin</h2>
        </div>
      </div>
    </div>
  )
}

export default Aboutus