import React from "react";

const Blogs = (props) => {
  console.log("Blogs", props);
  return (
    <>
      {props.blogs.map((item, idx) => {
        return (
          <div className="col-md-4 mb-3" key={idx}>
            <div className="card">
              <div className="card-body">
                <strong className="id">{item.id}</strong>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Blogs;
