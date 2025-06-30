import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div>
      <p>
        React Router provides several useful hooks. useNavigate allows
        programmatic navigation, which is useful for actions like form
        submissions that should redirect to another page. useParams retrieves
        route parameters, enabling dynamic URLs, such as displaying details of
        specific items by ID. Nested routes are also supported, which lets you
        create parent-child relationships between components to structure more
        complex navigation.
      </p>
      <Link to="/">Return To home Page</Link>
    </div>
  );
};

export default Info;
