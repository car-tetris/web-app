import { addLocaleData } from 'react-intl';
import deLocaleData from 'react-intl/locale-data/de';
import * as i18n from '../i18n'

/**
 * Define locale and fetch i18n data.
 *
 * @param {string} [locale='de'] - e.g. de, en
 * @returns {object}
 */
const configureIntl = (locale = 'de') => {
  global.Intl = require('intl');
  addLocaleData(deLocaleData);
  const intlData = i18n[locale];
  return {locale, intlData}
}

export default configureIntl
