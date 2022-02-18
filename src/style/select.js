export const colorStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: 'white',
    fontSize: '14px',
    ':hover': { border: '1px solid black' },
    width: '180px',
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isDisabled
      ? undefined
      : isSelected
        ? 'rgba(210, 63, 87, 0.08)'
        : isFocused
          ? 'rgba(0, 0, 0, 0.04)'
          : undefined,
    color: '#2b3445',
    fontFamily: 'Open Sans',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: 1.5,
    ':active': {
      ...styles[':active'],
      backgroundColor: !isDisabled ? 'rgba(210, 63, 87, 0.4)' : undefined,
      color: '#2b3445',
    },
  }),
};
