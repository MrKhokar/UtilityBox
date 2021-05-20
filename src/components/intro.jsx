import React from "react";
const Intro = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          {" "}
          <h3 className=" fw-light m-5">
            <p>
              Utility Manager: This is a Toolkit of
              collection of different-different Application.
              Here we have Calculator to study, Drum Pad to
              enjoy musics, To-Do list to write down your
              list and more to come soon.
            </p>
            <p>
              This set of app provides you All for One app.
              If you wants to add or want more tools please
              <span href="mailto:Omar.nepa@gmail.com?subject = addApps&body = Message">
                {" "}
                email us{" "}
              </span>
              on
            </p>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Intro;
