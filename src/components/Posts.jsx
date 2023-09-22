//Posts Component

//Import Material UI Data tables
import MUIDataTable from "mui-datatables";
import { useContext } from "react";
import { PostContext } from "../Contexts/PostContext";
import { Link } from "react-router-dom";

//MUIDataTable config
const MUI_OPTIONS = {
    filterType: 'checkbox',
};

function Posts() {
    const { posts, postKeys } = useContext(PostContext);

    return (
        <>
            <header style={{
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'space-between'
            }}>
                <h1>Posts</h1>
                <Link to="/create"
                style={{
                    backgroundColor: '#3498db', 
                    border: '2px solid #2980b9', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '5px', 
                    fontSize: '16px', 
                    cursor: 'pointer', 
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
                    transition: 'background-color 0.3s ease',
                    textDecoration: 'none'
                }}>
                    Create post
                </Link>
            </header>
            <hr />
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