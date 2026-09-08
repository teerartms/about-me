/* Mendaftarkan palet brand ke Tailwind CDN.
   Harus dimuat sinkron tepat setelah cdn.tailwindcss.com, sebelum <body> diparse,
   agar utility seperti bg-primary / text-dark ikut ter-generate. */
tailwind.config = {
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
    }
};
