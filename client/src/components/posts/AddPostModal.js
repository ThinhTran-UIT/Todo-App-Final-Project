import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { PostContext } from '../../contexts/PostContext'

const AddPostModal = () => {
    //Contexts
    const {showAddPostModal, setShowAddPostModal, addPost, setShowToast} = useContext(PostContext)

    //State
    const [newPost, setNewPost] = useState({
        title: '',
        usernamePost:'',
        passwordPost: '',
        url:'',
        status: 'NORMAL'
    })
    
    const {title, usernamePost,passwordPost, url} = newPost

    const onChangeNewPostForm = event => setNewPost({...newPost, [event.target.name]: event.target.value})
    const closeDialog = () => {     
        resetAddPostData()
    }

    const onSubmit = async event => {
		event.preventDefault()
		const { success, message } = await addPost(newPost)
		resetAddPostData()
		setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
	}

    const resetAddPostData = () => {
        setNewPost({title: '', usernamePost: '',passwordPost: '', url: '', status: 'NORMAL'})  
        setShowAddPostModal(false)
    }

    return(
        <Modal show={showAddPostModal} animation={false} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Add Your Account</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Text id='title-help' muted>Required</Form.Text>
                        <Form.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help' value={title} onChange={onChangeNewPostForm}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Text id='title-help' muted>Required</Form.Text>
                        <Form.Control type='text' placeholder='Username' name='usernamePost' value={usernamePost} onChange={onChangeNewPostForm}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Text id='title-help' muted>Required</Form.Text>
                        <Form.Control type='text' placeholder='Password' name='passwordPost' value={passwordPost} onChange={onChangeNewPostForm}/>
                    </Form.Group>   
                    <Form.Group>
                        <Form.Text></Form.Text>
                        <Form.Control type='text' row={3} placeholder='URL' name='url' value={url} onChange={onChangeNewPostForm}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={closeDialog}>Cancel</Button>
                    <Button variant='warning' type='submit'>Save</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default AddPostModal