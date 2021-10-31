import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    axios.post('http://localhost:5000/services', data)
    .then(res => {
      if(res.data.insertedId){
        alert('Added Successfully')
        reset();
      }
    })
  };
  return (
    <div className="add-service">
      <h2>Add <span className="text-success">Package</span></h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("img")} placeholder="Image URL"/>
      <input {...register("name")} placeholder="Title"/>
      <textarea {...register("description")} placeholder="Description"/>
      <input type="number" {...register("cost")} placeholder="Cost"/>
      <input className="btn" type="submit" />
    </form>
    </div>
  );
};

export default AddService;