import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../Contexts/PostContext';

function PostCreate() {
  const { createPost } = useContext(PostContext);
  const [click, setClick] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setClick(true);
    e.preventDefault();
    if (formData.title == "" || formData.body === "") {
      setClick(false);
      return;
    }
    createPost(formData);
  };

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
          <h2 className="card-title">Create a New Post</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
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
                value={formData.body}
                onChange={handleChange}
                placeholder="Enter body"
                required
                className="form-control"
                rows={10}
              ></textarea>
            </div>
            <div className="form-group card-actions">
              {
                !click ? (
                  <button type="submit" className="btn btn-primary">
                    Create Post
                  </button>
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

export { PostCreate };
