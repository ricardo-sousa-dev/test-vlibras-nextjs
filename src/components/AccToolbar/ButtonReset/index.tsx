import ToolbarButton from '../ToolbarButton';
import tags from '../utils/tags';

/*eslint-disable */
export default function Reset() {
  let elements: string | any[] | null;

  const reset = () => {
    if (elements)
      for (let i = 0; i < elements.length; i += 1) {
        const tag = elements[i];

        tag.style.removeProperty('background');
        tag.style.removeProperty('color');
        tag.style.removeProperty('border');
        tag.style.removeProperty('text-decoration');
        tag.style.removeProperty('font-family');
        tag.style.removeProperty('font-size');
        tag.style.removeProperty('transform');

        if (tag.classList.contains('floatingIcon')) {
          tag.style.background = '#003F86';
          tag.style.color = 'white';
          tag.style.border = '1px solid white';
        }
      }
    localStorage.setItem('storageContrast', JSON.stringify(1));
    localStorage.setItem('storageTextStyle', JSON.stringify(1));
    localStorage.setItem('storageZoomPage', JSON.stringify(1));
    localStorage.setItem('storageLibras', JSON.stringify(1));
  };

  if (typeof window !== 'undefined') elements = tags();

  return (
    <ToolbarButton
      icon='cleaning_services'
      alt='Limpar'
      onClick={reset}
      color=''
      idButton={''}
    />
  );
}
