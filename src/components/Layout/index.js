// import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Box from '../Box';
import Flex from '../Flex';

const Layout = styled(Flex)`
  /* display: flex; */
`;

// function NavBarBase({ children, ...rest }) {
//   return <Flex {...rest}>{children}</Flex>;
// }

// Keeping this around for backwards compatibility, but it's the same as `FLEX`
Layout.NavBar = styled(Flex)`
  /* align-items: center; */
  /* justify-content: space-between; */
  /* flex: 1; */
`;

Layout.SubNavBar = styled(Flex)``;

Layout.LeftPanel = styled(Box)``;

Layout.RightPanel = styled(Flex)``;

Layout.Content = styled(Flex)``;

Layout.Footer = styled(Box)``;
/*
 * PropTypes below
 *
 */
Layout.defaultProps = {};

Layout.NavBar.defaultProps = {
  // theme
};

Layout.propTypes = {
  // ...Box.propTypes
};

Layout.NavBar.propTypes = {
  // theme: PropTypes.object
};

/** @component */
export default Layout;
