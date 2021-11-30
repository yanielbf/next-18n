import { useI18n, I18n } from '.';

let i18n = I18n();
i18n.locale('de');

i18n = I18n({ en: { foo: 'bar' } });
i18n.locale('de');

i18n = useI18n<Record<string, Object | string | number>>();

i18n.locale('en');
i18n.locale();

i18n.set('en', { foo: 'bar' });

i18n.t('a.b', { foo: 3 });

i18n.table('de');

const tp = i18n.withPlural();

tp('a.b', { foo: 3 });
