import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Todo = () => {
  const initData = {
    title: "",
    description: "",
  };
  const [data, setData] = useState(initData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };
  return (
    <>
      <div className="container">
        <h3 className="mt-5 p-4">
          Planning and writing is the best way to achieve
          something
        </h3>
        <form action="">
          <div className="row">
            <div className="col p-3">
              <input
                type="text"
                name="title"
                value={data.title}
                placeholder="Title"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col p-3">
              <input
                type="text"
                name="description"
                value={data.description}
                placeholder="Description"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="row">
          <h4>Title:{data.title}</h4>
          <h5>Description :{data.description}</h5>
        </div>
      </div>
    </>
  );
};

export default Todo;
