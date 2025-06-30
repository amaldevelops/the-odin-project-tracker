const Uses = () => {
  return (
    <div>
      <p>
        Single-Page Application (SPA) Navigation: React Router enables SPAs by
        allowing different components to be rendered based on the URL, without
        requiring a full page reload. This makes the application feel faster and
        more responsive. Dynamic Routing: It allows you to create routes that
        respond to dynamic segments, such as displaying user profiles by their
        IDs (/user/:id). The useParams hook enables easy access to these dynamic
        segments for personalized content. Programmatic Navigation: Using the
        useNavigate hook, developers can trigger route changes based on user
        actions (like form submissions or button clicks) rather than requiring
        users to click on a link. Nested and Modular Routes: React Router
        supports nested routes, which allow you to break down complex navigation
        structures. This is especially helpful in larger applications where you
        might have a dashboard with subsections, making it easy to organize and
        manage related components. Protected Routes and Access Control: With
        conditional rendering, you can create routes that require authentication
        or specific permissions. For instance, if a user isn’t logged in, a
        protected route can redirect them to a login page. Conditional
        Redirects: Redirect users to specific pages based on conditions, such as
        sending them back to the homepage if they attempt to access a restricted
        page. Code Splitting and Lazy Loading: Integrating React Router with
        React.lazy enables code splitting, loading only the required components
        when a route is accessed, improving performance in large applications.
      </p>
    </div>
  );
};

export default Uses;
