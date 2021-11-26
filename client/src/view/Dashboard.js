import {PostContext} from '../contexts/PostContext'
import { useContext, useEffect } from 'react'
import Spinner from 'react-bootstrap/esm/Spinner'
import { AuthContext } from '../contexts/AuthContext'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SinglePost from '../components/posts/SinglePost'
import AddPostModal from '../components/posts/AddPostModal'
import addIcon from '../assets/plus-circle-fill.svg'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

const Dashboard = () => {
    //Context
    const {authState: {user: {username}}} = useContext(AuthContext)
    const {postState: {posts, postsLoading}, getPosts, setShowAddPostModal} = useContext(PostContext)

    //Start: Get all posts
    useEffect(() => getPosts(), [])

    let body = null

    if(postsLoading) {
        body = (

            <div className='spinner-container'>
                <Spinner animation='border' variant='info' />
            </div>
        )
    }
    else if(posts.length === 0){
        body = (
            <>
            <Card className='text-center mx-5 my-5'>
                <Card.Header as='h1'>Hi {username} </Card.Header>
                <Card.Body>
                    <Card.Title>Welcome to Todo</Card.Title>
                    <Card.Text>
                        Click the button below to track your first skill to do
                    </Card.Text>
                    <Button variant='primary'>ToDo</Button>
                </Card.Body>
            </Card>
            </>
        )
    }
    else{
        body = (
            <>
            <Row className='row-cols-1 row-cols-md-3 g-4 mx-auto mt-3'>
					{posts.map(post => (
						<Col key={post._id} className='my-2'>
							<SinglePost post={post} />
						</Col>
					))}
				</Row>

        {/*Open Add Post Modal*/}
        <OverlayTrigger
					placement='left'
					overlay={<Tooltip>Add a new thing to do</Tooltip>}
				>
        <Button className='btn-floating' onClick={setShowAddPostModal.bind(this, true)}>
            <img src={addIcon} alt='add-post' width='60' height='60'/>
        </Button>
        </OverlayTrigger>
        </>
        
        )
        
    }
    return (        
        <>
        {body}
        <AddPostModal/>
        </>
    )
}

export default Dashboard