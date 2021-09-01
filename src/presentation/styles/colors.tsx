type Color = {
  [prop in number | string]: string;
}

export const grey: Color = {
  0: '#fafafa',
  50: '#f5f5f5',
  100: '#eeeeee',
  200: '#e0e0e0',
  600: '#7a7a7a',
  700: '#616161',
  A50: '#dbdbdb',
  A100: '#d5d5d5'
}

export const smalt: Color = {
  10: 'rgba(0, 55, 156, 0.1)',
  900: 'rgba(0, 55, 156, 1)'
}
