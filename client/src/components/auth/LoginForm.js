import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'

const LoginForm = () => {
    return (
        <>
            <Form className = "my-4">
				<Form.Group>
					<Form.Control
						type='text'
						placeholder='Username'
						name='username'
						required
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						type='password'
						placeholder='Password'
						name='password'
						required						
					/>
				</Form.Group>
				<Button variant='success' type='submit'>
					Login
				</Button>
			</Form>
            <p>Don't Have An Account?
            <Link to='/register'>
                <Button variant='info' size='sm' className='ml-2'>Register</Button>
            </Link>
            </p>
        </>
    )
}

export default LoginForm;