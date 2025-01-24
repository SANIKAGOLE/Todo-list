import React ,{useState}from 'react'


function Login() 
{

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const handleSubmit = (event) => { event.preventDefault();
         alert(`Email: ${email}, Password: ${password}`); 
         // Handle the form submission logic here, such as making an API call
    };
return (
<form>
  <fieldset>
    <legend>Login</legend>
    <div class="container">
    <div>
      <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div>
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off"/>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </fieldset>
</form>   
      
    

  );
};

export default Login;
