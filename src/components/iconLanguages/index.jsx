import { useContext } from 'react';
import { IconContainer } from './iconLanguagesStyle';
import iconbr from '../../assets/iconbr.svg';
import iconus from '../../assets/iconus.svg';
import store from '../../context/store';
import Flex from '../common/flex';

export default function IconLanguages() {
  const { isEnglish, changeLanguage } = useContext(store);
  const icon = isEnglish ? iconus : iconbr;
  const label = isEnglish ? 'EN-US' : 'PT-BR';

  return (
    <IconContainer onClick={ () => changeLanguage() }>
      <Flex>
        <img src={ icon } alt={ label } />
        <p>{ label }</p>
      </Flex>
    </IconContainer>
  );
}
