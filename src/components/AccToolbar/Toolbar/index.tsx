import ButtonContrast from '../ButtonContrast';
import ButtonLibras from '../ButtonLibras';
import ButtonReset from '../ButtonReset';
import ButtonTextStyle from '../ButtonTextStyle';
import ButtonZoomPage from '../ButtonZoomPage';

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
        borderRadius: '8px',
        margin: '0',
      } }>
      <div
        className='containerToolbar'
        style={ {
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          gap: '5px',
        } }>
        <ButtonTextStyle />
        <ButtonZoomPage />
        <ButtonContrast />
        <ButtonLibras />
        <ButtonReset />
      </div>
      <div id='closeToolbar'>

        <div
          className='divButtonToolbar'
          style={ {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid transparent',
          } }>
          <button
            type='button'
            style={ {
              padding: '2px 4px',
              border: '1px solid black !important',
              borderRadius: '7px',
              cursor: 'pointer',
              background: '#f1f1f1',
            } }
            className='a11yIcon'
          >
            <svg
              className='iconToolbar'
              xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg>
          </button>
          <p
            style={ {
              margin: '0',
              padding: '0',
              fontSize: '8px',
              color: '#000000 !important',
              fontFamily: 'Lexend Deca, sans-serif',
            } }
            id='legendButton'>
            Fechar
          </p>
        </div>
      </div>
    </div>



  );
}
