import PropTypes from 'prop-types';

import { StyledLine } from './Line.styles';

function Line({ column, className }) {
  return <StyledLine $column={column} className={className} />;
}

Line.propTypes = {
  column: PropTypes.bool,
  className: PropTypes.string,
};

export default Line;
