
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        './src/index.tsx',
        './src/components/app/app.tsx',
        './public/index.html',
        './src/components/description/description.tsx',
        './src/components/header/header.tsx',
        './src/pages/home-page/home-page.tsx'
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {

    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production' ? [purgecss] : []
    ]
}