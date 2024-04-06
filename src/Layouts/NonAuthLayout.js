import React from 'react'
import withRouter from '../Common/withRouter';
import { useTheme } from '../Common/ThemeContext';
import { darkthemecolors, themecolor } from '../config';
import { ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';

const NonAuthLayout = ({ children }) => {

  const { theme } = useTheme();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme === 'dark' ? darkthemecolors : themecolor}>
        <ConfigProvider theme={theme === 'dark' ? darkthemecolors : themecolor}>
          {children}
        </ConfigProvider>
      </ThemeProvider> 
    </React.Fragment>
  )
}

export default withRouter(NonAuthLayout);