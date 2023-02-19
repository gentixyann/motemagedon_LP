const hamburger = document.querySelector('.js-hamburger');
const nav = document.querySelector('.js-nav');
const header = document.querySelector('.js-header');

// ナビゲーションの開閉
const toggleNav = () => {
  hamburger.classList.toggle('active-nav');
  nav.classList.toggle('active-nav');
}

// ナビゲーションメニューを閉じる
const closeNav = () => {
  hamburger.classList.remove('active-nav');
  nav.classList.remove('active-nav');
}

//現在のスクロール値
let beforeScrollValue = 0;

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
const scrollAnimation = () => {
  // documentのスクロール要素取得
  const scrollElement = document.scrollingElement;
  // スクロール位置の取得 
  const scrollTopValue = scrollElement.scrollTop; 
  // ヘッダーの高さ取得
  const headerHight = header.offsetHeight;

  //ヘッダーの出し入れをする
    if (headerHight > scrollTopValue || 0 > scrollTopValue - beforeScrollValue) {
    //ヘッダーが上から出現する
    header.classList.remove('up-move');
    header.classList.add('down-move');
  } else {
    //ヘッダーが上に消える
    header.classList.remove('down-move');
    header.classList.add('up-move');
  }

  beforeScrollValue = scrollTopValue;
}

// PCサイズ時にナビゲーションを閉じる
const mediaQuery = window.matchMedia('(min-width: 1025px)');
const mediaQueryChange =((e) => {
  if (e.matches) {
    closeNav();
  } 
})

hamburger.addEventListener('click', () => {
  toggleNav();
});

window.addEventListener('scroll', () => {
  closeNav();
  scrollAnimation();
});

mediaQuery.addEventListener('change', mediaQueryChange);
