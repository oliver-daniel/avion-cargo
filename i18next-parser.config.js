module.exports = {
    locales: ['en', 'fr'],
    input: ['src/**/*.{js,jsx}'],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    keySeparator: false,
    keepRemoved: true,
    useKeysAsDefaultValue: true,
    reactNamespace: true,
}