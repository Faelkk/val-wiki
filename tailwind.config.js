/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        agent: "url('https://trackercdn.com/cdn/tracker.gg/valorant/images/agents-bg.png')",
      },
      screens: {
        small: '400px',
        pp:'630px',
        md:' 768px',
        
        lg:'1024px',
        xl: '1280px'
      },
    
        animation: {
          overlayShow:  "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
          slideDownAndFade:  "slideDownAndFade  400ms cubic-bezier(0.16, 1, 0.3, 1)",   
          contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        },
        keyframes: {
          overlayShow: {
            from: {
              opacity:0,
            },
            to: {
              opacity: 1,
            },
          },
          slideDownAndFade: {
            from: {
              opacity:0,
              transform: "translateY(-2px)",
            },
            to: {
              opacity: 1,
              transform: "translateY(0px)"
            },
          },
          contentShow: {
            from: {
                opacity: 0,
                transform: "translate(-50%, -48%) scale(0.96)",
            },
            to: {
                opacity: 1,
                transform: "translate(-50%, -50%) scale(1)",
            },
        },
        },
      colors: {
        blueVariation: {
          50: '#f5f7fa',
          100: '#eaeff4',
          200: '#d0dce7',
          300: '#a7bed2',
          400: '#789bb8',
          500: '#577ea0',
          600: '#446685',
          700: '#38526c',
          800: '#31465b',
          900: '#2d3c4d',
          920: '#0e1015',
          950: '#0f141a',
          
        },
        cyanVariation: {
          50: '#f6f7f9',
          10: '#eceef2',
          200: '#d4d9e3',
          300: '#afb8ca',
          400: '#8391ad',
          500: '#647493',
          600: '#4f5c7a',
          700: '#414b63',
          800: '#384054',
          900: '#323848',
          950: '#13151b',
        },
        blueVariation2: {
          50: '#f4f8fa',
          100: '#e5edf4',
          200: '#d2e0eb',
          300: '#b2ccde',
          400: '#8eb1cc',
          500: '#7399bf',
          600: '#6083b0',
          700: '#5471a1',
          800: '#495e84',
          900: '#3e4e6a',
          950: '#293242',
          980: '#2c3f52', 
      },
      redVariation2: {
        '50': '#fdf3f3',
    '100': '#fbe5e5',
    '200': '#f9cfcf',
    '300': '#f3aeae',
    '400': '#ec8989',
    '450': '#FF4655',
    '500': '#de5555',
    '600': '#ca3838',
    '700': '#a92c2c',
    '800': '#8c2828',
    '900': '#752727',
    '950': '#3f1010',
      },
      'fuscous-gray': {
        '50': '#f6f5f5',
        '100': '#e7e6e6',
        '200': '#d1d0d0',
        '300': '#b1b0af',
        '400': '#898787',
        '500': '#6e6c6c',
        '600': '#5e5d5c',
        '700': '#4d4c4c',
        '800': '#454545',
        '900': '#3d3c3c',
        '950': '#262626',
        '980':  '#141414'
    },
      
      }
    },
  },
  plugins: [],
}

