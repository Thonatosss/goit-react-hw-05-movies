import { useParams } from "react-router-dom"

export default function MovieDetails() {
    const params = useParams();
    console.log(params);
    return <div>MovieDetails</div>
}