import React from 'react';
import ContactCard from './ContactCard';
import { Link } from "react-router-dom";

const ContactList = (props) =>{
     console.log(props);
     
     const deleteContactHandler = (id) =>{
         props.getContactId(id);
     }

     const renderContacList = props.contacts.map((contact) => {
         return (
           
               <ContactCard contact={contact} deleteContactHandler={deleteContactHandler}></ContactCard>

          
          

         );
     });
     return (
        <div class="main">
          <h2>
            Contact List
            <Link to="/add">
            <button className="ui button blue">Add Contact</button>
            </Link>
          
          </h2>
          <div className="ui celled list">
              {renderContacList}
          </div>
      </div>
     );
}
  
export default ContactList;