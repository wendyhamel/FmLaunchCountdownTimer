tailwind.config = {
    theme: {
        fontFamily: {
            'sans': ['Red\\ Hat\\ Display', 'sans-serif']
        },
        extend: {
            colors: {
                'red': 'hsl(345, 95%, 68%)',
                'red-shaded': 'hsl(345,55%,55%)',
                'white': 'hsl(0, 0%, 100%)',
                'blue-gray': 'hsl(237, 18%, 59%)',
                'blue-des': 'hsl(236, 21%, 26%)',
                'blue-dark': 'hsl(235, 16%, 14%)',
                'blue-black': 'hsl(234, 17%, 12%)',
                'purple': 'hsl(271,23%,18%)',
            },
            boxShadow: {
                'bold-bottom': '0 8px 3px -3px hsl(234, 17%, 12%)',
                'bold-bottom-lg': '0 12px 3px -3px hsl(234, 17%, 12%)',
            }
        }
    }
}
