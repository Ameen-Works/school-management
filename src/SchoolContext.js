import React, { createContext, useContext, useEffect, useState } from "react";

// Create a context
const SchoolContext = createContext();

// Create a custom hook to access the context
export function useSchoolContext() {
  return useContext(SchoolContext);
}

// Create a context provider component
export function SchoolProvider({ children }) {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const addStudent = (student) => {
    // Add a student to the state
    setStudents([student, ...students]);
  };

  const addTeacher = (teacher) => {
    // Add a teacher to the state
    setTeachers([teacher, ...teachers]);
  };
  useEffect(() => {
    // Add initial students and teachers when the app starts
    setStudents([
      {
        Name: "Ruben Langworth",
        Email: "Rafael_Anderson0@gmail.com",
        Qualification: "Qualification 3",
        Batch: "Batch 4",
        mobile: "375-948-6587",
        id: "3",
      },
      {
        Name: "Kay Hermiston II",
        Email: "Jakayla.Ebert@yahoo.com",
        Qualification: "Qualification 4",
        Batch: "Batch 4",
        mobile: "795-258-5534",
        id: "4",
      },
      {
        Name: "Ethel Kohler",
        Email: "Evelyn65@yahoo.com",
        Qualification: "Qualification 5",
        Batch: "Batch 5",
        mobile: "232-813-8679",
        id: "5",
      },
      {
        Name: "ashim khan lodi",
        Email: "test@gmail.com",
        Qualification: "ba",
        Batch: "2005-2006",
        mobile: "8490102801",
        id: "6",
      },
    ]);

    setTeachers([
      {
        Name: "Ruben Langworth",
        Email: "Rafael_Anderson0@gmail.com",
        Qualification: "Qualification 3",
        Batch: "Batch 4",
        mobile: "375-948-6587",
        id: "3",
      },
      {
        Name: "Kay Hermiston II",
        Email: "Jakayla.Ebert@yahoo.com",
        Qualification: "Qualification 4",
        Batch: "Batch 4",
        mobile: "795-258-5534",
        id: "4",
      },
      {
        Name: "Ethel Kohler",
        Email: "Evelyn65@yahoo.com",
        Qualification: "Qualification 5",
        Batch: "Batch 5",
        mobile: "232-813-8679",
        id: "5",
      },
      {
        Name: "ashim khan lodi",
        Email: "test@gmail.com",
        Qualification: "ba",
        Batch: "2005-2006",
        mobile: "8490102801",
        id: "6",
      },
    ]);
  }, []);
  return (
    <SchoolContext.Provider
      value={{ students, teachers, addStudent, addTeacher }}
    >
      {children}
    </SchoolContext.Provider>
  );
}
