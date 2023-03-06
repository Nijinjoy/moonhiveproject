import React from 'react'
import Table from 'react-bootstrap/Table';


function Discussions() {
  return (
    // <h2 style={{padding:'9px',marginLeft:'20px'}}>Discussions</h2>

<Table striped bordered hover style={{marginLeft:'400px',padding:'20px',width:'500px',borderColor:'black'}}>
      <thead>
        <tr>
          <th><input placeholder='Search discussions' style={{justifyContent:'center'}}></input></th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>

   

  )
}

export default Discussions
