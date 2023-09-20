import React from "react";
import { useSchoolContext } from "../SchoolContext";

function TeachersPageContent() {
  const { teachers } = useSchoolContext();
  return (
    <div class="container-fluid">
      {/* <!-- Page Heading --> */}
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Teachers List</h1>
      </div>
      <div className="row">
        {teachers.map((teacher, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div
                className="card-header bg-black text-white text-center"
                style={{ backgroundColor: "black" }}
              >
                {teacher.Name}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Email: {teacher.Email}</li>
                <li className="list-group-item">
                  Qualification: {teacher.Qualification}
                </li>
                <li className="list-group-item">Batch: {teacher.Batch}</li>
                <li className="list-group-item">ID: {teacher.id}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeachersPageContent;
