import PropTypes from 'prop-types';
import '../src/style.css';

const RenderName = (props) => {
  return <div><h1>Lesson: Type Checking With PropTypes</h1>
    <h1>{props.name}</h1></div>;
  
};

RenderName.propTypes = {
  name: PropTypes.string.isRequired,
};

RenderName.defaultProps = {
  name: 'Amal',
};

export default RenderName;
