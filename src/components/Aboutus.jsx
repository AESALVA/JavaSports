import React from 'react';

function Aboutus (){
  return(
    <div className='container-aboutus'>
      <div className='main-aboutus'>
        <div className='d-flex justify-content-center mt-4'>
          <h1 className='titulo-aboutus '>Sobre Nosotros:</h1>
        </div>

        <div className='integrante'>
          <div className='d-flex justify-content-center my-3'><h2>Eduardo</h2></div>
          <div className='d-flex justify-content-center'><img src="../img/eduardo.jpeg" width={250} height={250} className='rounded-circle my-3 d-flex justify-content-center' alt="" /></div>
          <p className='mx-5 my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quasi obcaecati asperiores, ad eveniet libero voluptate, omnis eum, iste laboriosam sapiente a! Neque, dolore. Rerum non laborum in explicabo ipsa?</p>
        </div>
        
        <div className='integrante'>
          <div className='d-flex justify-content-center my-3'><h2>Valentina</h2></div>
          <div className='d-flex justify-content-center'><img src="../img/valentina.jpeg" width={250} height={250} className='rounded-circle my-3 d-flex justify-content-center' alt="" /></div>
          <p className='mx-5 my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quasi obcaecati asperiores, ad eveniet libero voluptate, omnis eum, iste laboriosam sapiente a! Neque, dolore. Rerum non laborum in explicabo ipsa?</p>
        </div>

        <div className=''>
          <div className='d-flex justify-content-center my-3'><h2>Joaquin</h2></div>
          <div className='d-flex justify-content-center'><img src="../img/joaquin.jpeg" width={250} height={250} className='rounded-circle my-3 d-flex justify-content-center' alt="" /></div>
          <p className='mx-5 my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quasi obcaecati asperiores, ad eveniet libero voluptate, omnis eum, iste laboriosam sapiente a! Neque, dolore. Rerum non laborum in explicabo ipsa?</p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus