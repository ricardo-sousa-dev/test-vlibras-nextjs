export default function FloatingIcon({ setShowToolbar, showToolbar, icon }: React.ComponentState) {
  if (!icon) return null;

  return (
    <button
      type='button'
      className='floatingIcon'
      onClick={() => setShowToolbar(!showToolbar)}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        bottom: '50%',
        right: '0',
        width: '35px',
        height: '35px',
        borderRadius: '10px',
        border: '1px solid white',
        cursor: 'pointer',
        zIndex: '999',
        background: '#003F86',
        padding: '0',
        color: 'white',
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        width="25"
        viewBox="0 96 960 960"
        className='iconToolbar'
      >
        <path d="M480.08 242q-30.08 0-51.58-21.42-21.5-21.421-21.5-51.5 0-30.08 21.42-51.58Q449.841 96 479.92 96q30.08 0 51.58 21.42 21.5 21.421 21.5 51.5 0 30.08-21.42 51.58-21.421 21.5-51.5 21.5ZM376 856V362q-63-5-127-14.5T130 324l15-60q80 20 164.5 29t170.5 9q86 0 170.5-9T815 264l15 60q-55 14-119 23.5t-127 14.644V856h-60V612h-88v244h-60Zm-59 200q-17 0-27.5-10.5T279 1018q0-17 10.5-27.5T317 980q17 0 27.5 10.5T355 1018q0 17-10.5 27.5T317 1056Zm164 0q-17 0-27.5-10.5T443 1018q0-17 10.5-27.5T481 980q17 0 27.5 10.5T519 1018q0 17-10.5 27.5T481 1056Zm164 0q-17 0-27.5-10.5T607 1018q0-17 10.5-27.5T645 980q17 0 27.5 10.5T683 1018q0 17-10.5 27.5T645 1056Z" />
      </svg>
    </button>
  );
}
