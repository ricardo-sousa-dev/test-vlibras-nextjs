export default function Head() {
  if (typeof window !== 'undefined') {
    let title = document.createElement('title');
    title.innerHTML = 'A11yToolbar';
    document.head.appendChild(title);

    let googleapis = document.createElement('link');
    googleapis.rel = 'preconnect';
    googleapis.href = 'https://fonts.googleapis.com';
    document.head.appendChild(googleapis);

    let googleapis2 = document.createElement('link');
    googleapis2.rel = 'preconnect';
    googleapis2.href = 'https://fonts.gstatic.com';
    googleapis2.crossOrigin = 'anonymous';
    document.head.appendChild(googleapis2);

    let lexendPeta = document.createElement('link');
    lexendPeta.rel = 'stylesheet';
    lexendPeta.href = 'https://fonts.googleapis.com/css2?family=Lexend+Peta&display=swap';
    document.head.appendChild(lexendPeta);

    let lexendDeca = document.createElement('link');
    lexendDeca.rel = 'stylesheet';
    lexendDeca.href = 'https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap';
    document.head.appendChild(lexendDeca);

    let dyslexic = document.createElement('link');
    dyslexic.rel = 'stylesheet';
    dyslexic.href = 'https://fonts.cdnfonts.com/css/open-dyslexic';
    document.head.appendChild(dyslexic);

    let googleIcons = document.createElement('link');
    googleIcons.rel = 'stylesheet';
    googleIcons.href =
      'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0';
    document.head.appendChild(googleIcons);
  }
}
