import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Register = () => {
    return (
       <>
        <h1 className='display-1 bg-secondary text-white p-3'>Register</h1>

        <Form className='p-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter the password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm the password"/>
                </Form.Group>
                
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>

       </>
    )
}

export default Register