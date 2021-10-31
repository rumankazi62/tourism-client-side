import React, { useEffect, useState } from 'react';

const AllPackage = () => {
  const [allPackages, setAllPackages] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/services`)
    .then(res => res.json())
    .then(data => setAllPackages(data))
  }, [])
  return (
    <div className="row">
      <h1 className="py-5">Tour <span className="text-success">Package</span></h1>
      {
        allPackages.map(
        allPackage => <div 
        className="col-lg-4 g-3 border border-1"
        key={allPackage._id}
         >
          <img className="w-100" style={{height:"200px"}} src={allPackage.img} alt="" />
          <h3>{allPackage.name}</h3>
          <p>{allPackage.description}</p>
          <h5>Cost: {allPackage.cost} Taka</h5>
          <button 
          // onClick={() => props.handleAddToCart(props.product)}
            className="btn btn-outline-success">Book Now</button>
        </div>)
      }
    </div>
  );
};

export default AllPackage;