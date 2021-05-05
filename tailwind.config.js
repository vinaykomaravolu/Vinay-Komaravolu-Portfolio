module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#0c0f13',
                primary2: '#202832',
                secondary: '#F2AA4C',
                secondaryh: '#8b8b8b',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
