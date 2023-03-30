declare global {
  interface Window {
    VLibras: any;
  }
}

export default function VLibras() {
  if (typeof window !== 'undefined') {
    let scriptLibras = document.createElement('script');
    scriptLibras.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    scriptLibras.async = true;
    
    // let scriptLoadLibras = document.createElement('script');
    scriptLibras.onload = () => {
      new window.VLibras.Widget('https://vlibras.gov.br/app');
    };
    document.head.appendChild(scriptLibras);
    // document.head.appendChild(scriptLoadLibras);

    let vwWidget = document.createElement('div');
    vwWidget.setAttribute('vw', 'true');
    vwWidget.setAttribute('class', 'enabled');

    let vwAccessButton = document.createElement('div');
    vwAccessButton.setAttribute('vw-access-button', 'true');
    vwAccessButton.setAttribute('class', 'enabled');

    let vwPluginWrapper = document.createElement('div');
    vwPluginWrapper.setAttribute('vw-plugin-wrapper', 'true');

    let vwPluginTopWrapper = document.createElement('div');
    vwPluginTopWrapper.setAttribute('class', 'vw-plugin-top-wrapper');

    vwPluginWrapper.appendChild(vwPluginTopWrapper);
    vwWidget.appendChild(vwPluginWrapper);
    vwWidget.appendChild(vwAccessButton);

    if (document.getElementById('__next')) {
      document.getElementById('__next')?.appendChild(vwWidget);
    } else {
      document.body.appendChild(vwWidget);
    }

    document
      .getElementsByClassName('vpw-settings-btn-close')[0]
      ?.addEventListener('click', () => localStorage.setItem('storageLibras', JSON.stringify(1)));

    const searchButtonLibras = Array.from(document.getElementsByTagName('IMG'));
    for (let index = 0; index < searchButtonLibras.length; index++) {
      const element: HTMLElement = searchButtonLibras[index] as HTMLElement;
      if (element.getAttribute('class') === 'access-button') element.click();
    }
  }
}
