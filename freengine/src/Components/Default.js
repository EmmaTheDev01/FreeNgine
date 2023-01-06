import React from 'react'
import { Link } from 'react-router-dom'

function Default() {
  return (
    <div className="container">
    <div className="row">
        <div className="col-10 mx-auto text-center text-uppercas pt-5">
            <h1 className="display-3 text-title text-danger">404</h1>
            <h1>Error</h1>
            <h4>Page Not Found</h4>
            <p>
                the requested page was not found. Check your spelling. Did you mean <Link to="/">Freengine</Link> ?
            </p>
        </div>
    </div>
</div>
  )
}

export default Default