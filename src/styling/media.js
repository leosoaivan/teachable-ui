import { css } from 'styled-components/macro';

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
};

const sizes = {
  phone: breakpoints.sm - 1,
  tablet: breakpoints.md - 1,
  desktop: breakpoints.lg - 1,
};

const mediaQueryString = (device) => `(max-width: ${sizes[device] / 16}em)`;

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, deviceType) => {
  acc[deviceType] = (...styling) => css`
    @media ${mediaQueryString(deviceType)} {
      ${css(...styling)}
    }
  `;
  return acc;
}, {});

export default media;
