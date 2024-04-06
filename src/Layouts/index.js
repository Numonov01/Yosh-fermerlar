import React from 'react';
import withRouter from '../Common/withRouter';
import { ConfigProvider, Layout } from 'antd';
import HeaderLayout from './Header';
import FooterLayout from './Footer';
import SidebarLayout from './SidebarLayout';
import { ThemeProvider, styled } from 'styled-components';
import { themecolor, darkthemecolors } from '../../src/config';
import { useTheme }  from '../Common/ThemeContext';

const { Content } = Layout;

// Define the StyleLayout styled component outside the functional component
const StyleLayout = styled(Layout)`
  margin-left: ${themecolor.components.Menu.verticalSidebarWidth}px;
  position: relative;
  padding: calc(${themecolor.token.controlHeight}px * 2) 24px 0;

  .ant-breadcrumb {
    ol {
      justify-content: end;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const LayoutComponents = ({ children }) => {

  const { theme, toggleTheme } = useTheme();

  const handleToggleMode = () => {
    toggleTheme();
  };
    return (
        <React.Fragment>
          <ThemeProvider theme={theme === 'dark' ? darkthemecolors : themecolor}>
          <ConfigProvider theme={theme === 'dark' ? darkthemecolors : themecolor}>
            <SidebarLayout theme={theme} />
            <Layout style={{ minHeight: '100vh' }}>
                <HeaderLayout darkMode={theme} handleToggleMode={handleToggleMode} />
                <StyleLayout id='antLayoutContent'>
                    <Content>
                        {children}
                    </Content>
                </StyleLayout>
                <FooterLayout />
            </Layout>
          </ConfigProvider>
        </ThemeProvider>
        </React.Fragment>
    );
};

export default withRouter(LayoutComponents);