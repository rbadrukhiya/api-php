import axios from 'axios';
import {  useState } from 'react';



function Insert ()
{
    const [name , setname] = useState();
    const [email  , setemail] = useState();
    const [password  , setpassword] = useState();
    const [contact  , setcontact] = useState();
    

    function demo()
    {
        axios.post('http://localhost/php_react/d.php' , {
        name : name,
        email: email,
        password:password,
        contact:contact,

        

      })
    .then(function (response) {
      // handle success
      console.log(response)
      
      setname(response);
      setemail(response);
      setpassword(response);
      setcontact(response);

      

      console.log(setname)
      // console.log(setemail)
      // console.log(setpassword)
      // console.log(setcontact)
      
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    
      window.location.reload();
    
   }
    
    return(
        <>

        <center>
          <h1>Add Data...</h1>
          <table border={1} className='mt-5'>
        <tr>
          <td>name</td>
          <td>
          <input type="text" name='name' onChange={(i) => setname(i.target.value)} />
          </td>
        </tr>
        <tr>
          <td>email</td>
          <td>
          <input type="text" name='email' pattern='' onChange={(i) => setemail(i.target.value)} />
          </td>
        </tr>
        <tr>
          <td>password</td>
          <td>
          <input type="text" name='password' onChange={(i) => setpassword(i.target.value)} />
          </td>
        </tr>
        <tr>
          <td>contact</td>
          <td>
          <input type="text" name='contact' onChange={(i) => setcontact(i.target.value)} />
          </td>
        </tr>
        <tr>  
          <td >

      <input type="submit" value={'Add Data'} name='submit' onClick={demo}/>
          </td>
          <td className='view'>

      {/* <a href="show" target={'blank'}>view<i class="fa-solid fa-eye ms-5  eye  "></i></a> */}
      <a href="/show" target={'blank'} > view</a>
          </td>
        </tr>
      </table>  

    {/* name :  */}
    {/* <input type="text" name='name' onChange={(i) => setname(i.target.value)} /> */}
    {/* <br></br> */}
    {/* email: */}
    
    {/* <input type="text" name='email' onChange={(i) => setemail(i.target.value)} /> */}
    
    {/* <br></br> */}
    {/* password :  */}
    {/* <input type="text" name='password' onChange={(i) => setpassword(i.target.value)} /> */}
    
    {/* <br></br> */}
    {/* contact :      <input type="text" name='contact' onChange={(i) => setcontact(i.target.value)} /> */}
      
     <br></br>
     {/* <input type="submit"  name='submit' value={'add data'} onClick={demo}/> */}

    </center>


    
        </>
    )
}
export default Insert;