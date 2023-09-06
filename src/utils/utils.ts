export const getFormattedDate = (
    date: string,
    options?: Intl.DateTimeFormatOptions
): string => {
    return new Date(Date.parse(date)).toLocaleDateString('ru', options);
};

export const getFormattedTime = (date: string): string => {
    return new Date(Date.parse(date)).toLocaleString('ru', {
        hour: '2-digit',
        minute: '2-digit',
    });
};

export const getLocalePlural = (number: number): Intl.LDMLPluralRule => {
    const pluralLocale = new Intl.PluralRules('ru');
    return pluralLocale.select(number);
};
