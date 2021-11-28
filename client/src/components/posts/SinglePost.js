import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ActionButtons from './ActionButtons'
import Badge from 'react-bootstrap/Badge'


const SinglePost = ({post:{_id, status, title, usernamePost, passwordPost, url}}) => (
    <Card
		className='shadow'
		border={
			status === 'NORMAL'
				? 'success'
				: status === 'PRIVATE'
				? 'danger'
				: 'warning'
		}
	>
		<Card.Body className='bg-warning rounded'>
			<Card.Title>
				<Row>
					<Col>
						<p className='post-title'>{title}</p>
						<Badge
							pill
							variant={
								status === 'NORMAL'
									? 'success'
									: status === 'PRIVATE'
									? 'danger'
									: 'warning'
							}
						>
							{status}
						</Badge>
					</Col>
					<Col className='text-right'>
						<ActionButtons url={url} _id={_id} />
					</Col>
				</Row>
			</Card.Title>
            <Card.Text className='user-pass-single'><h6>USERNAME:</h6> {usernamePost}</Card.Text>
            <Card.Text className='user-pass-single'><h6>PASSWORD:</h6> {passwordPost}</Card.Text>
        </Card.Body>

    </Card>
)

export default SinglePost

