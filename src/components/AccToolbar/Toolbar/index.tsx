import ContrastButton from '../Contrast';
import TextSize from '../TextSize';

export default function Toolbar() {
  return (
    <div
      id='toolbar'
      style={{
        backgroundColor: '#f1f1f1',
        display: 'flex',
        justifyContent: 'center',
        padding: '5px',
        gap: '5px',
        position: 'sticky',
        top: '0',
        boxShadow: '1px 3px 10px 3px rgba(0, 0, 0, 0.20)',
        zIndex: '999',
      }}>
      <ContrastButton />
      <TextSize/>
    </div>
  );
}
