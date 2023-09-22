//Posts Component

//Import Material UI Data tables
import MUIDataTable from "mui-datatables";
import { useEffect, useState } from "react";

//MUIDataTable config
const MUI_OPTIONS = {
    filterType: 'checkbox',
};

function Posts() {

    const [posts, setPosts] = useState([]);
    const [postKeys, setPostKeys] = useState([]);

    //Get posts
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((resp) => {
            setPosts(resp);
            setPostKeys(Object.keys(resp[0]));
        });
    } , []);

    return (
        <>
            <h1>Posts</h1>
            <hr />
            <div className="dataTable_container">
                {posts.length > 0 && postKeys.length > 0  ? <MUIDataTable
                    title={"Posts Table"}
                    data={posts}
                    options={MUI_OPTIONS}
                    columns={postKeys}
                /> : <span>No Records Found</span>}
                
            </div>
        </>
    );
}

export { Posts };