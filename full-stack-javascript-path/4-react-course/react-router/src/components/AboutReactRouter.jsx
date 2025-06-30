import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Uses from "./Uses";
import Info from "./Info";

const AboutReactRouter = () => {
  const { reactrouterinfo } = useParams();

  return (
    <div>
      <h1>About React Router</h1>

      {reactrouterinfo === "uses" ? <Uses /> : <Info />}
      <p>
        React Router is a robust JavaScript library for creating dynamic
        navigation in React applications, enabling single-page app functionality
        by conditionally rendering components based on the URL. To use React
        Router, install it with npm install react-router-dom. Then, wrap your
        app in the BrowserRouter component to enable routing. Define routes
        using Routes and Route components, mapping paths to specific components.
        For example, Route path="/" element=Home would render the Home component
        at the root URL. Use the Link component for navigation, which updates
        the URL and renders the appropriate component without a page reload.
      </p>

      <Link to="/">Click here to go Back</Link>
    </div>
  );
};

export default AboutReactRouter;
