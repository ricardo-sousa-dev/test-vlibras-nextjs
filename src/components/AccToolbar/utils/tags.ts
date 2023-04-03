export default function Tags(): (HTMLButtonElement | HTMLElement | HTMLHeadingElement | HTMLDivElement)[] | null {
  let tagsH1: HTMLHeadingElement[];
  let tagsH2: HTMLHeadingElement[];
  let tagsH3: HTMLHeadingElement[];
  let tagsH4: HTMLHeadingElement[];
  let tagsH5: HTMLHeadingElement[];
  let tagsH6: HTMLHeadingElement[];
  let tagsP: HTMLHeadingElement[];
  let tagsA: HTMLAnchorElement[];
  let tagsIMG: HTMLElement[];
  let tagsDiv: HTMLDivElement[];
  let tagsButton: HTMLButtonElement[];
  let tagHeader: HTMLElement[];
  let arrayTags: (HTMLButtonElement | HTMLElement | HTMLHeadingElement | HTMLDivElement)[];

  if (typeof window !== 'undefined') {
    console.log('ENTROU NO TAGS')
    tagsH1 = Array.from(document.querySelectorAll('h1'));
    tagsH2 = Array.from(document.querySelectorAll('h2'));
    tagsH3 = Array.from(document.querySelectorAll('h3'));
    tagsH4 = Array.from(document.querySelectorAll('h4'));
    tagsH5 = Array.from(document.querySelectorAll('h5'));
    tagsH6 = Array.from(document.querySelectorAll('h6'));
    tagsP = Array.from(document.querySelectorAll('p'));
    tagsA = Array.from(document.querySelectorAll('a'));
    tagsIMG = Array.from(document.querySelectorAll('img'));
    tagsDiv = Array.from(document.querySelectorAll('div'));
    tagsButton = Array.from(document.querySelectorAll('button'));
    tagHeader = Array.from(document.querySelectorAll('header'));
    arrayTags = [
      tagHeader,
      tagsH1,
      tagsH2,
      tagsH3,
      tagsH4,
      tagsH5,
      tagsH6,
      tagsP,
      tagsA,
      tagsIMG,
      tagsDiv,
      tagsButton,
    ].flatMap<HTMLButtonElement | HTMLHeadingElement | HTMLDivElement | HTMLElement>((tag) => tag);

    const outElements = [
      'body',
      '__next',
      'closeToolbar',
      '#canvas',
      'vw',
      'vw-plugin-wrapper',
      'vw-access-button',
      'toolbar',
      'containerToolbar',
      'divButtonToolbar',
      'vw-plugin-top-wrapper',
      'vpw-settings-btn',
    ];

    return arrayTags.filter(
      (tag) =>
        tag.tagName !== 'body' &&
        tag.getAttribute('id') !== '__next' &&
        tag.getAttribute('id') !== 'closeToolbar' &&
        tag.getAttribute('id') !== '#canvas' &&
        !tag.getAttribute('vw') &&
        !tag.getAttribute('vw-plugin-wrapper') &&
        !tag.getAttribute('vw-access-button') &&
        !tag.classList.contains('toolbar') &&
        !tag.classList.contains('containerToolbar') &&
        !tag.classList.contains('divButtonToolbar') &&
        !tag.classList.contains('vw-plugin-top-wrapper') &&
        !tag.classList.contains('vpw-flag') &&
        !tag.classList.contains('vpw-settings-btn') &&
        !tag.parentElement?.classList.contains('vpw-settings-btn'),
    );
  } else {
    return null;
  }
}
