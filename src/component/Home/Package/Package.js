import React, { useEffect, useState } from 'react';

const Package = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data.slice(0,6)))
  }, [])
  return (
    <div className="row">
      <h1 className="py-5">Tour <span className="text-success">Package</span></h1>
      {
        services.map(
        service => <div 
        className="col-lg-4 border border-1 p-2 g-2"
        key={service._id}
         >
          <img className="w-100" style={{height:"200px"}} src={service.img} alt="" />
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <h5>Cost: {service.cost} Taka</h5>
          <button 
          // onClick={() => props.handleAddToCart(props.product)}
            className="btn btn-outline-success">Book Now</button>
          
        </div>)
      }
    </div>
  );
};

export default Package;