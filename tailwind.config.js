/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html', './script.js'],
    theme: {
        extend: {
            colors: {
                primary: '#3b82f6',
                secondary: '#1e40af',
                accent: '#10b981',
                dark: '#1e293b',
                light: '#f8fafc'
            },
            fontFamily: {
                sans: ['Poppins', 'Segoe UI', 'system-ui', 'sans-serif']
            }
        }
    },
    plugins: []
};
