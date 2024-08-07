import React, { useState } from 'react';
import axios from 'axios';

const Panel = () => {
  const [tourcategory, setTourcategory] = useState('');
  const [tourname, setTourname] = useState('');
  const [tourimage, setTourimage] = useState([]);
  const [tourdiscount, setTourdiscount] = useState('');
  const [touramount, setTouramount] = useState('');
  const [tourcountry, setTourcountry] = useState('');

  const admin = async (event) => {
    event.preventDefault();

    const TourFormData = new FormData();
    TourFormData.append('tourcategory', tourcategory);
    TourFormData.append('tourname', tourname);
    TourFormData.append('tourdiscount', tourdiscount);
    TourFormData.append('touramount', touramount);
    TourFormData.append('tourcountry', tourcountry);

    for (const file of tourimage) {
      TourFormData.append('images', file);

    }

    try {
      const res = await axios.post("http://localhost:5000/product/insertarray", TourFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
      alert("added succesfully");
    } catch (err) {
      console.error(err);
    }
  };

  const handleFileChange = (e) => {
    setTourimage(e.target.files);
  };

  return (
    <form onSubmit={admin} className="container mt-5">
      <h1 className="text-center text-uppercase">Add The Tour Package</h1>
      <div className="postproduct d-flex flex-wrap justify-content-evenly">
        <input
          type="text"
          name="tourcategory"
          placeholder="Tour Category"
          onChange={(e) => setTourcategory(e.target.value)}
          className="form-control m-2"
          required
        />
        <input
          type="text"
          name="tourname"
          placeholder="Tour Name"
          onChange={(e) => setTourname(e.target.value)}
          className="form-control m-2"
          required
        />
        <input
          type="text"
          name="touramount"
          placeholder="Tour Amount"
          onChange={(e) => setTouramount(e.target.value)}
          className="form-control m-2"
         
        />
        <input
          type="text"
          name="tourdiscount"
          placeholder="Tour Discount"
          onChange={(e) => setTourdiscount(e.target.value)}
          className="form-control m-2"
         
        />
        <input
          type="text"
          name="tourcountry"
          placeholder="Tour Country"
          onChange={(e) => setTourcountry(e.target.value)}
          className="form-control m-2"
         
        />
        <input
          type="file"
          name="tourimage"
          multiple
          onChange={handleFileChange}
          className="form-control m-2"
          
        />
        <button type="submit" className="btn btn-primary m-2">Submit</button>
      </div>
    </form>
  );
};

export default Panel;
