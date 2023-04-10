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
      tagsDiv,
      tagsIMG,
      tagsButton,
    ].flatMap<HTMLButtonElement | HTMLHeadingElement | HTMLDivElement | HTMLElement>((tag) => tag);

    return arrayTags.filter(
      (tag) =>
      tag.getAttribute('id') !== '__next' &&
      tag.getAttribute('id') !== 'gameContainer' &&
      tag.getAttribute('id') !== 'legendButton' &&
      tag.parentElement?.getAttribute('id') !== 'gameContainer' &&
        !tag.getAttributeNames().includes('vp') &&
        !tag.getAttributeNames().includes('vw') &&
        !tag.classList.contains('toolbar') &&
        !tag.classList.contains('containerToolbar') &&
        !tag.classList.contains('divButtonToolbar') &&
        !tag.classList.contains('vpw-component-play') &&
        !tag.classList.contains('vpw-component-pause') &&
        !tag.classList.contains('vpw-component-restart') &&
        !tag.classList.contains('noUi-base') &&
        !tag.classList.contains('noUi-origin') &&
        !tag.classList.contains('noUi-handle') &&
        !tag.classList.contains('vpw-slider') &&
        !tag.classList.contains('vp-settings-btn') &&
        !tag.classList.contains('vp-container') &&
        !tag.classList.contains('vpw-content') &&
        !tag.classList.contains('vpw-regions') &&
        !tag.classList.contains('vpw-cont') &&
        !tag.classList.contains('vpw-flag') &&
        !tag.classList.contains('vpw-container-regions') &&
        !tag.classList.contains('vpw-border-default') &&
        !tag.classList.contains('vpw-img-default') &&
        !tag.classList.contains('vp-settings-menu') &&
        !tag.parentElement?.getAttributeNames().includes('vw') &&
        !tag.parentElement?.getAttributeNames().includes('vp') &&
        !tag.parentElement?.getAttributeNames().includes('vp-box') &&
        !tag.parentElement?.getAttributeNames().includes('vp-info-screen') &&
        !tag.parentElement?.getAttributeNames().includes('vp-suggestion-screen') &&
        !tag.parentElement?.getAttributeNames().includes('vp-suggestion-button') &&
        !tag.parentElement?.getAttributeNames().includes('vp-rate-box') &&
        !tag.parentElement?.getAttributeNames().includes('vp-rate-button') &&
        !tag.parentElement?.getAttributeNames().includes('vp-controls') &&
        !tag.parentElement?.classList.contains('divButtonToolbar') &&
        !tag.parentElement?.classList.contains('containerToolbar') &&
        !tag.parentElement?.classList.contains('toolbar') &&
        !tag.parentElement?.classList.contains('vp-controls-play') &&
        !tag.parentElement?.classList.contains('vpw-slider') &&
        !tag.parentElement?.classList.contains('vpw-content') &&
        !tag.parentElement?.classList.contains('vpw-localism') &&
        !tag.parentElement?.classList.contains('vpw-national') &&
        !tag.parentElement?.classList.contains('vp-settings-btn') &&
        !tag.parentElement?.classList.contains('vpw-controls-speed') &&
        !tag.parentElement?.classList.contains('vp-close-button') &&
        !tag.parentElement?.classList.contains('vpw-controls-subtitles') &&
        !tag.parentElement?.classList.contains('vpw-btn-close') &&
        !tag.parentElement?.classList.contains('vpw-clickable') &&
        !tag.parentElement?.classList.contains('vpw-container-opacity') &&
        !tag.parentElement?.classList.contains('vpw-vlibras-logo') &&
        !tag.parentElement?.classList.contains('vp-button-change-avatar') &&
        !tag.parentElement?.classList.contains('vp-button') &&
        !tag.parentElement?.classList.contains('vp-container'),
    );
  } else {
    return null;
  }
}
