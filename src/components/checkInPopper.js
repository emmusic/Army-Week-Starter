import * as React from 'react';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';


const CheckInPopper = () => {

const StyledPopperDiv = styled('div')(
  ({ theme }) => `
  padding: 0.9rem;
  border: 1px solid;
  background-color: ${theme.palette.mode === 'dark' ? '#43A047' : '#ffff'};
  opacity: 9;
  margin: 0.25rem 0px;
`,
);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>

      <button aria-describedby={id}
      type="button" onClick={handleClick}>
        Check In
      </button>
      <PopperUnstyled id={id} open={open} anchorEl={anchorEl}>
        <StyledPopperDiv>
            You have Checked In! You go glen cocoa.
            </StyledPopperDiv>
      </PopperUnstyled>
    </div>
  );
}


export default CheckInPopper
