import PropTypes from 'prop-types';
import { ImgContainer } from './imageStyle';

export default function Image({ width, src, alt }) {
  return (
    <ImgContainer width={ width } src={ src } alt={ alt } >
    </ImgContainer>
  );
}

Image.propTypes = {
  width: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
}

Image.defaultProps = {
  width: '100px',
  src: '',
  alt: 'default message'
}
