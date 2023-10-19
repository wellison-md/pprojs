import PropTypes from 'prop-types';
import { IconContainer } from './iconLanguagesStyle';

export default function IconLanguages({ image }) {
  return (
    <IconContainer>
      <img src={ image } alt="icon language" />
    </IconContainer>
  );
}

IconLanguages.propTypes = {
  image: PropTypes.string,
}
