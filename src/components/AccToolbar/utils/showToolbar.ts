export default function SetShowToolbar() {
  if (typeof window !== 'undefined') {
    const display = document.getElementsByClassName('toolbar')[0].getAttribute('style')?.includes('display:flex') ? 'flex' : 'none';

    switch (display) {
      case 'flex':
        document
          .getElementsByClassName('toolbar')[0]
          .setAttribute('style', `${document.getElementsByClassName('toolbar')[0].getAttribute('style')?.replace('display:flex', 'display:none')}`);
        break;
      case 'none':
        document
          .getElementsByClassName('toolbar')[0]
          .setAttribute('style', `${document.getElementsByClassName('toolbar')[0].getAttribute('style')?.replace('display:none', 'display:flex')}`);
        break;
      default:
        break;
    }
  }
}
