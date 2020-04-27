module.exports = {
    locales: ['fr'],
    input: ['src/**/*.{js,jsx}'],
    output: 'public/locales/$LOCALE/$NAMESPACE.json',
    keySeparator: false,
    useKeysAsDefaultValue: true,
    reactNamespace: true,
}