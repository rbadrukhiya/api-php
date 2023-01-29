// import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Edit() {
  

   const { id } = useParams();
   const u_id = `${id}`
   const [name, setname] = useState('');
   const [email, setemail] = useState('');
   const [password, setpassword] = useState('');
   const [contact, setcontact] = useState('');


   useEffect(() => {
      axios.post('http://localhost/php_react/edit.php', {
         edit_id: u_id
      })
         .then(function (response) {
            console.log(response)
            // setresult(response.data)
            // setdata(data)
            setname(response.data.name)
            setemail(response.data.email)
            setpassword(response.data.password)
            setcontact(response.data.contact)

         })
         .catch(function (error) {
            // handle error
            console.log(error);
         })
   },[])

   function submitdata() {
      axios.post('http://localhost/php_react/d.php', {
         edit_id: u_id,
         name: name,
         email: email,
         password: password,
         contact: contact,
      })
         .then(function (response) {
            console.log(response)

         })
         .catch(function (error) {
            // handle error
            console.log(error);
         })
         window.location.reload();
         setname('')
         setemail('')
         setpassword('')
         setcontact('')
   }



   return (
      <>
         <center>
            <h1>Edit Data...</h1>
            <table className="mt-5">
               <tr>
                  <td>name</td>
                  <td><input type="text" value={name} onChange={(i) => setname(i.target.value)} /></td>
               </tr>
               <tr>
                  <td>email</td>
                  <td><input type="text" value={email} onChange={(i) => setemail(i.target.value)}/></td>
               </tr>
               <tr>
                  <td>password</td>
                  <td><input type="text" value={password} onChange={(i) => setpassword(i.target.value)} /></td>
               </tr>
               <tr>
                  <td>contact</td>
                  <td><input type="text" value={contact} onChange={(i) => setcontact(i.target.value)}/></td>
               </tr>
               <tr>
                  <td colSpan={2} align='center'>

                     <input type="submit" value="submit" onClick={submitdata} /><br></br>
                  </td>
               </tr>
            </table>
         </center>
      </>
   )

}
export default Edit
