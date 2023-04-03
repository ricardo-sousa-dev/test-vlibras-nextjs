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
    console.log('ENTROU NO TAGS');
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
    arrayTags = [tagHeader, tagsH1, tagsH2, tagsH3, tagsH4, tagsH5, tagsH6, tagsP, tagsA, tagsIMG, tagsButton].flatMap<
      HTMLButtonElement | HTMLHeadingElement | HTMLDivElement | HTMLElement
    >((tag) => tag);

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

    for (let index = 0; index < arrayTags.length; index++) {
      const element = arrayTags[index];
      if (
        element.tagName !== 'body' &&
        element.getAttribute('id') !== '__next' &&
        (element.classList.contains('toolbar') ||
          element.parentElement?.classList.contains('toolbar') ||
          element.classList.contains('containerToolbar') ||
          element.parentElement?.classList.contains('containerToolbar') ||
          element.classList.contains('divButtonToolbar') ||
          element.parentElement?.classList.contains('divButtonToolbar') ||
          element.classList.contains('a11yIcon') ||
          element.parentElement?.classList.contains('a11yIcon') ||
          element.getAttributeNames().includes('vw') ||
          element.parentElement?.getAttributeNames().includes('vw') ||
          element.classList.contains('vw-access-button') ||
          element.parentElement?.classList.contains('vw-access-button') ||
          element.classList.contains('vw-plugin-wrapper') ||
          element.parentElement?.classList.contains('vw-plugin-wrapper') ||
          element.classList.contains('vpw-settings-btn') ||
          element.parentElement?.classList.contains('vpw-settings-btn'))
      )
        arrayTags.splice(index, 1);
    }

    return arrayTags;
    // return arrayTags.filter(
    //   (tag) =>
    //     tag.tagName !== 'body' &&
    //     tag.getAttribute('id') !== '__next' &&
    //     !tag.classList.contains('toolbar') &&
    //     !tag.parentElement?.classList.contains('toolbar') &&
    //     !tag.classList.contains('containerToolbar') &&
    //     !tag.parentElement?.classList.contains('containerToolbar') &&
    //     !tag.classList.contains('divButtonToolbar') &&
    //     !tag.parentElement?.classList.contains('divButtonToolbar') &&

    //     !tag.getAttributeNames().includes('vw') &&
    //     !tag.parentElement?.getAttributeNames().includes('vw')

    //     // !tag.classList.contains('vw-access-button') &&
    //     // !tag.parentElement?.classList.contains('vw-access-button') &&
    //     // !tag.classList.contains('vw-plugin-wrapper') &&
    //     // !tag.parentElement?.classList.contains('vw-plugin-wrapper'),
    // );
  } else {
    return null;
  }
}
