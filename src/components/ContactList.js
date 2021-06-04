import React from 'react';
import ContactCard from './ContactCard'

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
     return (<div className="ui celled list">
         {renderContacList}
     </div>);
}
  
export default ContactList;