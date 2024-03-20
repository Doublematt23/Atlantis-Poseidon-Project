/*-------------------------------------------------------------------------*
*---									
*---        PersonList.jsx						
*---	   		
*---	----	----	----	----	----	----	----	----	---*
*---									
*---        Version 1.0     2024 March 21st   Simon Shamoon 
*---									
*-------------------------------------------------------------------------*/

import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://34.204.247.99/read.php`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.firstname} {person.lastname} {person.email}</li>
            )
        }
      </ul>
    )
  }
}


// import axios from "axios";
// const baseURL = "https://34.204.247.99/";
// const fetchAlumni = async (setAlumni) => {
//     const response = await axios.get(`${baseURL}read.php`);
//     setAlumni(response.data);
// }

// const addAlumni = async (formData, fetchAlumni) => {
//     const response = await axios.post(`${baseURL}create.php`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//     });
//     fetchAlumni();
// };
// const updateAlumni = async (formData, fetchAlumni) => {
//     await axios.post(`${baseURL}update.php`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//     });
//     fetchAlumni();
// };
// const deleteAlumni = async (id, fetchAlumni) => {

//     await axios.post(`${baseURL}delete.php`, { id });
//     fetchAlumni();
// };

// export { fetchAlumni, addAlumni, updateAlumni, deleteAlumni };