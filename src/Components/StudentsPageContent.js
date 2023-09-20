import React, { useEffect } from "react";
import { useSchoolContext } from "../SchoolContext";

function StudentsPageContent() {
  const { students } = useSchoolContext();

  return (
    <div class="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 class="h3 mb-4 text-gray-800">Students List</h1>

      <div className="row">
        {students.map((student, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div
                className="card-header bg-black text-white text-center"
                style={{ backgroundColor: "black" }}
              >
                {student.Name}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Email: {student.Email}</li>
                <li className="list-group-item">
                  Qualification: {student.Qualification}
                </li>
                <li className="list-group-item">Batch: {student.Batch}</li>
                <li className="list-group-item">ID: {student.id}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentsPageContent;
