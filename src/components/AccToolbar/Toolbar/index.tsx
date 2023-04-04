import ButtonContrast from '../ButtonContrast';
import ButtonTextStyle from '../ButtonTextStyle';
import ButtonZoomPage from '../ButtonZoomPage';
import ButtonLibras from '../ButtonLibras'
import ButtonReset from '../ButtonReset'
import ToolbarButton from '../ToolbarButton';

export default function Toolbar() {

  return (
    <div
      className='toolbar'
      style={ {
        backgroundColor: 'white',
        display: 'flex',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        padding: '5px',
        position: 'sticky',
        top: '0',
        boxShadow: '1px 3px 10px 3px rgba(0, 0, 0, 0.20)',
        zIndex: '999',
        height: 'fit-content',
        border: '1px solid gray',
        margin: '0'
      } }>
      <div
        className='containerToolbar'
        style={ {
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          gap: '5px'
        } }>
        <ButtonTextStyle />
        <ButtonZoomPage />
        {/* <ButtonContrast /> */}
        <ButtonLibras />
        <ButtonReset />
      </div>
      <div id='closeToolbar'>
        <ToolbarButton
          icon='close'
          alt='Fechar'
        />
      </div>
    </div>
  );
}
