import React, { useEffect, useState } from 'react';

const AllPackage = () => {
  const [allPackages, setAllPackages] = useState([]);
  useEffect(() => {
    fetch(`https://shocking-web-84008.herokuapp.com/services`)
    .then(res => res.json())
    .then(data => setAllPackages(data))
  }, []);

  const handleDelete = id => {
    const url = `https://shocking-web-84008.herokuapp.com/services/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data =>{ 
      console.log(data)
      if(data.deletedCount){
        alert('Deleted Data')
        const deleteData = allPackages.filter(allPackage => allPackage._id !== id);
        setAllPackages(deleteData);
      }  
      })
  }
  return (
    <div className="row">
      <h1 className="py-5">Tour <span className="text-success">Package</span></h1>
      {
        allPackages.map(
        allPackage => <div 
        className="col-lg-4 g-3 pb-3 border border-1"
        key={allPackage._id}
         >
          <img className="w-100" style={{height:"200px"}} src={allPackage.img} alt="" />
          <h3>{allPackage.name}</h3>
          <p>{allPackage.description}</p>
          <h5>Cost: {allPackage.cost} Taka</h5>
          <button 
          // onClick={() => props.handleAddToCart(props.product)}
            className="btn btn-outline-success mb-2">Book Now</button><br/>
          <button className="btn btn-outline-primary me-2">Update</button>
          <button className="btn btn-outline-danger"
          onClick={() => handleDelete(allPackage._id)}
          >Delete</button>
        </div>)
      }
    </div>
  );
};

export default AllPackage;