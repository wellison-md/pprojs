import { SpacerContainer } from "./spacerStyle";
import PropTypes from 'prop-types';

export default function Spacer({ $s }) {
  return (
    <SpacerContainer $s={ $s }>

    </SpacerContainer>
  );
}

Spacer.propTypes = {
  $s: PropTypes.string,
}
