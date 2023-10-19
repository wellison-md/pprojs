import PropTypes from 'prop-types';
import { FlexContainer } from "./flexStyle";

export default function Flex({ children, $v, $h }) {
  return (
    <FlexContainer $v={ $v } $h={ $h }>
      { children }
    </FlexContainer>
  );
}

Flex.propTypes = {
  children: PropTypes.node,
  $v: PropTypes.string,
  $h: PropTypes.string,
}
