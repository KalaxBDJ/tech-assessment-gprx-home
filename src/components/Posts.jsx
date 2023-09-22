//Posts Component

//Import Material UI Data tables
import MUIDataTable from "mui-datatables";
import { useContext } from "react";
import { PostContext } from "../PostContext";

//MUIDataTable config
const MUI_OPTIONS = {
    filterType: 'checkbox',
};

function Posts() {
    const { posts, postKeys } = useContext(PostContext);

    return (
        <>
            <header>
                <h1>Posts</h1>
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