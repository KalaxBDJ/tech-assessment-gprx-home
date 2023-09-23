import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PostContext } from "../Contexts/PostContext";

function PostDetails() {
    const { id } = useParams();
    const [click, setClick] = useState(false);
    const [post, setPost] = useState({
        title: "",
        body: "",
        id: parseInt(id)
    });
    const [message, setMessage] = useState('');

    const { getPost, updatePost } = useContext(PostContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setClick(true);
        await updatePost(post);
        setMessage('Information updated sucessfully.');
        setClick(false);
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
            <div>
                <Link to="/posts"
                    className='btn btn-primary'
                    style={{
                        color: 'white',
                        textDecoration: 'none'
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
                        {message && <span className="message">{message}</span>}
                        <div className="form-group card-actions__edit">
                            {
                                !click ? (
                                    <>
                                        <button className="button_delete">
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
        </>
    );
}

export { PostDetails };