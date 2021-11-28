import Button from "react-bootstrap/Button";
import link from '../../assets/link-45deg.svg'
import editIcon from '../../assets/pencil-square.svg'
import deleteIcon from '../../assets/trash-fill.svg'
import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";

const ActionButtons = ({url, _id}) => {
    const {deletePost, findPost, setShowUpdatePostModal} = useContext(PostContext)
    const choosePost = postId => {
        findPost(postId)
        setShowUpdatePostModal(true)
    }
    return (
        <>
            <Button className='post-button' href={url} target='_blank'>
                <img src={link} alt="play" width='32' height='32'/>
            </Button>
            <Button className='post-button' onClick={choosePost.bind(this, _id)}>
                <img src={editIcon} alt="edit" width='24' height='24'/>
            </Button>
            <Button className='post-button' onClick={deletePost.bind(this, _id)}>
                <img src={deleteIcon} alt="delete" width='24' height='42'/>
            </Button>
        </>
    )
}

export default ActionButtons