const light = {
    bg: {
      site: '#F3F7F9',
      page: '#ffffff',
      header: '#EBF1F3',
      header_shader: '#efefef',
      footer: '#DAE4E9'
    },
    text: {
      primary: '#000000'
    },
    // ...
  }
  
  const dark = {
    bg: {
        site: '#2a3135',
        page: '#4a575e',
        header: '#22292d',
        header_shader: '#21282b',
        footer: '#2b353a'
      },
      text: {
        primary: '#f4ebeb'
      },
  }
  
  const defaultTheme = {
    fontSizes: [
      '14px', // 0
      '16px', // 1
      '18px', // 2
      '22px', // 3
      '26px', // 4
      '32px', // 5
      '40px'  // 6
    ],
    fontWeights: {
      body: 400,
      subheading: 500,
      link: 600,
      bold: 700,
      heading: 800,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.3,
      code: 1.6,
    },
    // ...
  };
  
  export const lightTheme = { ...defaultTheme, ...light }
  export const darkTheme = { ...defaultTheme, ...dark }