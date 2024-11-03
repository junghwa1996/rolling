import PropTypes from 'prop-types';

import { StyledLine } from './Line.styles';

function Line({ column }) {
  return <StyledLine $column={column} />;
}

Line.propTypes = {
  column: PropTypes.bool,
};

export default Line;
