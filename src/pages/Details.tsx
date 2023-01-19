import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();

  return (
    <div>
      Details of movie: {params.movieId}
      <h4>Avatar</h4>
      <p>A movie about ....</p>
    </div>
  );
};

export default Details;
