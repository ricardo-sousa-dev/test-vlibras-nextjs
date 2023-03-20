import ButtonContrast from '../ButtonContrast';
import ButtonTextStyle from '../ButtonTextStyle';
import ButtonZoomPage from '../ButtonZoomPage';
import ButtonReset from '../ButtonReset'

export default function Toolbar() {
  return (
    <div
      className='toolbar'
      style={ {
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        padding: '5px',
        gap: '5px',
        position: 'sticky',
        top: '0',
        boxShadow: '1px 3px 10px 3px rgba(0, 0, 0, 0.20)',
        zIndex: '999',
        height:'fit-content'
      } }>
      <ButtonContrast />
      <ButtonTextStyle />
      <ButtonZoomPage/>
      <ButtonReset/>
    </div>
  );
}
