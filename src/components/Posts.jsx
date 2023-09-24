//Posts Component

//Import Material UI Data tables
import MUIDataTable from "mui-datatables";
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../Contexts/PostContext";
import { Link, useNavigate } from "react-router-dom";

function Posts() {
    const { posts, sharedMessage, setSharedMessage } = useContext(PostContext);
    const [postKeys, setpostKeys] = useState([]);
    const navigate = useNavigate();

    // Clean Message after 2 seconds
    if(sharedMessage) {
        setTimeout(() => {
            setSharedMessage('');
          }, "2000");
    }

    //Function to Handle row click and navigato to details section.
    function handleRowClick(rowData) {
        const postId = rowData[1];
        navigate(`/posts/${postId}`);
    }

    //MUIDataTable config
    const MUI_OPTIONS = {
        selectableRows: "none",
        onRowClick: handleRowClick
    };

    useEffect(() => {
        //Set keys when posts available.
        if (posts.length > 0) {
            setpostKeys(Object.keys(posts[0]));
        }
    }, [posts])

    return (
        <>
            <header style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <h1>Posts</h1>
                <Link to="/create"
                    className="btn btn-primary"
                    style={{
                        color: 'white',
                        textDecoration: 'none'
                    }}>
                    Create post
                </Link>
            </header>
            <hr />
            {sharedMessage && (
                <div className="sharedMessage_container">
                    <span className="span_sharedMessage">{sharedMessage}</span>
                </div>
            )}
            <main className="dataTable_container">
                {posts.length > 0 && postKeys.length > 0 ? <MUIDataTable
                    data={posts}
                    options={MUI_OPTIONS}
                    columns={postKeys}
                /> : <div className="spinner"></div>}

            </main>
        </>
    );
}

export { Posts };