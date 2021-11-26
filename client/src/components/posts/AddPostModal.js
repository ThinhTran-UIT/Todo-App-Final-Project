import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'

const AddPostModal = () => {
    //Contexts
    const {showAddPostModal, setShowAddPostModal} = useContext(PostContext)
    const closeDialog = () => {        
        setShowAddPostModal(false)
    }
    return(
        <Modal show={showAddPostModal} animation={false} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>What do you want to do?</Modal.Title>
            </Modal.Header>
            <Form>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control type='text' placeholder='Title' name='title' required aria-describedby='title-help'/>
                        <Form.Text id='title-help' muted>Required</Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control as='textarea' row={3} placeholder='Description' name='description' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type='text' row={3} placeholder='URL' name='url' />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={closeDialog}>Cancel</Button>
                    <Button variant='primary' type='submit'>Save</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default AddPostModal