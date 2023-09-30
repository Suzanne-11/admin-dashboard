import React from 'react';
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from '../../components/datatable/Datatable';

{/* This component is used in single.jsx to display list of user transactions */}
const List = () => {
  return (
    <div className='list'>
      <Sidebar />
      <div className="list-container">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List