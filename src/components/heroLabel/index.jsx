import PropTypes from 'prop-types';
import { HeroLabelContainer } from './heroLabelStyle';

export default function HeroLabel({ title, subTitle }) {
  return (
    <HeroLabelContainer>
      <h1>{ title }</h1>
      <h3>{ subTitle }</h3>
    </HeroLabelContainer>
  );
}

HeroLabel.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

HeroLabel.defaultProps = {
  title: 'Main Hero title',
  subTitle: 'main hero subtitle',
}
