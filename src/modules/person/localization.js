import { support } from '..';

export default function localization() {
  const { lsGet, lsSet, qs } = support;
  const lang = qs('#lang');

  if (!lsGet('lang')) lsSet('lang', 'en');
  lang.value = lsGet('lang');

  lang.addEventListener('change', (e) => {
    lsSet('lang', e.target.value);
  });
}
