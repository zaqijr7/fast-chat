import React from 'react'

function ContainerAuth({children}) {
  return (
    <div className="col-12 container-auth d-flex justify-content-center align-items-center vh-100 bg-yellow">
      {children}
    </div>
  )
}

export default ContainerAuth
