import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Git from '../assets/github.svg'
import FB from '../assets/facebook.svg'
import Email from '../assets/envelope-fill.svg'

const About = () => {
	return (
		<Row className='mt-5' style={{ marginRight: 0 }}>
			<Col className='text-center'>
				<h1 className='text-warning'>Explore and Contact For Me</h1>
				<a href="https://github.com/ThinhTran-UIT" className='post-button' rel="noreferrer">
                <img src={Git} alt="edit" width='50' height='50'/>
            	</a>
				<a href="https://www.facebook.com/profile.php?id=100010812543860" className='post-button' rel="noreferrer">
                <img src={FB} alt="edit" width='50' height='50'/>
            	</a>
				<a href="mailto:18521450@gm.uit.edu.vn" className='post-button' rel="noreferrer">
                <img src={Email} alt="edit" width='50' height='50'/>
            	</a>
			</Col>
		</Row>
	)
}

export default About