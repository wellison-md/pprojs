import { theme } from "../../../Theme";
import { ButtonContainer } from "./buttonStyle";
import PropTypes from 'prop-types';

export default function Button({ $bgcolor, $fsize, $label }) {
  return (
    <ButtonContainer
      $bgcolor={ $bgcolor }
      $fsize={ $fsize }
      $label={ $label }
    >
      { $label }
    </ButtonContainer>
  );
}

Button.propTypes = {
  $bgcolor: PropTypes.string,
  $fsize: PropTypes.string,
  $label: PropTypes.string,
}

Button.defaultProps = {
  $bgcolor: theme.colors.main,
  $fsize: '16px',
  $label: 'Click me',
}
