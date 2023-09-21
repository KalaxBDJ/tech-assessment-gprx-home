import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <h1>Opss, Wrong URL path.</h1>
            <span>Try some of these...</span>
            <hr />
            <Link to='/'>
                <span>Home</span>
            </Link>
            <Link to='/posts' className="link">
                <span>Posts</span>
            </Link>
        </>
    );

}

export { NotFound };