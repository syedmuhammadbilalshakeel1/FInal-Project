import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BreadcrumbItem = ({ to, text }) => (
   <>
      <span className="navigation__block-separator"></span>
      <Link className="navigation__block-current" to={to}>{text}</Link>
   </>
);

BreadcrumbItem.propTypes = {
   to: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
};

export default BreadcrumbItem;
