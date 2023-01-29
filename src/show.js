import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';


function Show() {
    const [user, setuser] = useState([]);
    // const [data, setdata] = useState([]);
    const [spin, setspin] = useState(false);

    const view = async () => {

        const result = await axios.get('http://localhost/php_react/view.php');
        setuser(result.data.phpresult);
        console.log(result.data.phpresult);
        setspin(true);


    };
    useEffect(() => {
        view();
    }, []);

    function del(i) {
        const d_id = i
        axios.post('http://localhost/php_react/delete.php', {
            del_id: d_id,
        })
            .then(function (response) {
                console.log(response)
        setspin(true);

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        window.location.reload();

    }
    

    if (spin) {
        return (
            <>
                <div className="main">
                    <center>
                        <h1>View Data...</h1>
                        <table border='2' className='mt-5'>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>password</th>
                            <th>contact</th>
                            <th>edit</th>
                            <th>delete</th>

                            {
                            user.map((i) =>
                                <tr>
                                    {/* <td>1</td> */}
                                    <td border={1}>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                    <td>{i.password}</td>
                                    <td>{i.contact}</td>
                                    <td><a href={`/edit/${i.id}`} target={'blank'}>edit<i class="fa-solid fa-pen pen"></i></a></td>
                                    <td><a href="#" onClick={() => del(i.id)}>delete <i class="fa-solid fa-trash trash"></i></a></td>
                                </tr>
                            )}
                        </table>
                    </center>

                </div>


            </>
        )
    }
    else {
        return (
            <>
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

            </>
        )
    }
}
export default Show