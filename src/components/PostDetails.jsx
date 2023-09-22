import { useParams } from "react-router-dom";

function PostDetails() {
    const { id } = useParams();
    console.log(id);

    return (
        <h1>Hola desde Post Details</h1>
    );
}

export { PostDetails };