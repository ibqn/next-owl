import { ThemeProvider } from 'styled-components'

import theme from 'theme'
import GlobalStyles from 'components/global-styles'

import '@fontsource/noto-sans-kr'

// import '@fontsource/noto-sans-kr/300.css'
// import '@fontsource/noto-sans-kr/400.css'
// import '@fontsource/noto-sans-kr/500.css'
// import '@fontsource/noto-sans-kr/600.css'
// import '@fontsource/noto-sans-kr/700.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
