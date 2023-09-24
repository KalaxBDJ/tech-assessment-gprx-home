import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PostContext } from "../Contexts/PostContext";

function PostDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [click, setClick] = useState(false);
    const [post, setPost] = useState({
        title: "",
        body: "",
        id: parseInt(id)
    });
    const [message, setMessage] = useState('');
    const [messageClass, setmessageClass] = useState('');
    const { getPost, updatePost, deletePost, setSharedMessage, sharedMessage } = useContext(PostContext);

    // Clean Message after 2 seconds
    if (sharedMessage) {
        setTimeout(() => {
            setSharedMessage('');
        }, "2000");
    }

    const handleSubmit = async (e) => {
        setClick(true);
        e.preventDefault();
        const response = await updatePost(post);
        setMessage(response.message);
        setmessageClass(response.type);
        setClick(false);
    };

    const handleDelete = async () => {
        setClick(true);
        const response = await deletePost(post);
        if (response.status == 'ok') {
            setSharedMessage(response.message);
            navigate('/posts');
        } else {
            setMessage(response.message);
            setmessageClass(response.type);
            setClick(false);
        }

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost({
            ...post,
            [name]: value,
        });
    };

    useEffect(() => {
        const fetchPost = () => {
            try {
                const searchedPost = getPost(id) ?? { title: "", body: "" };
                setPost(searchedPost);
            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        fetchPost();
    }, [id, getPost]);

    return (
        <>
            {sharedMessage && (
                <div className="sharedMessage_container">
                    <span className="span_sharedMessage">{sharedMessage}</span>
                </div>
            )}
            <div>
                <Link to="/posts"
                    className='btn btn-primary'
                    style={{
                        color: 'white',
                        textDecoration: 'none',
                        marginTop: '10px'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{
                        width: '15px',
                        height: 'auto',
                        marginRight: '5px'
                    }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>

                    Back to posts
                </Link>
            </div>
            {post.title ? (
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title">Edit Post</h2>
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    defaultValue={post?.title}
                                    onChange={handleChange}
                                    placeholder="Enter title"
                                    required
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="body">Body:</label>
                                <textarea
                                    id="body"
                                    name="body"
                                    defaultValue={post?.body}
                                    onChange={handleChange}
                                    placeholder="Enter body"
                                    required
                                    className="form-control"
                                    rows={10}
                                ></textarea>
                            </div>
                            {message && <span className={"message_" + messageClass}>{message}</span>}
                            <div className="form-group card-actions__edit">
                                {
                                    !click ? (
                                        <>
                                            <button type="button" className="button_delete" onClick={handleDelete}>
                                                DELETE
                                            </button>
                                            <button type="submit" className="btn btn-primary">
                                                Update Post
                                            </button>
                                        </>
                                    ) : (
                                        <div className="spinner"></div>
                                    )
                                }

                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="spinner_container">
                    <div className="spinner"></div>
                </div>
            )}
        </>
    );
}

export { PostDetails };