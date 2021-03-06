import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

const StudentsIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="12"
      viewBox="0 0 24 12">
      <g id="Grupo_554" data-name="Grupo 554" transform="translate(0 -6)">
        <path
          id="Trazado_45"
          data-name="Trazado 45"
          d="M12,12.75a10.611,10.611,0,0,1,4.24.9A2.984,2.984,0,0,1,18,16.38V18H6V16.39a2.963,2.963,0,0,1,1.76-2.73A10.44,10.44,0,0,1,12,12.75ZM4,13a2,2,0,1,0-2-2A2.006,2.006,0,0,0,4,13Zm1.13,1.1A6.983,6.983,0,0,0,4,14a6.95,6.95,0,0,0-2.78.58A2.011,2.011,0,0,0,0,16.43V18H4.5V16.39A4.5,4.5,0,0,1,5.13,14.1ZM20,13a2,2,0,1,0-2-2A2.006,2.006,0,0,0,20,13Zm4,3.43a2.011,2.011,0,0,0-1.22-1.85,6.8,6.8,0,0,0-3.91-.48,4.5,4.5,0,0,1,.63,2.29V18H24ZM12,6A3,3,0,1,1,9,9,3,3,0,0,1,12,6Z"
          fill="#7b8f99"
        />
      </g>
    </SvgIcon>
  );
};

export default StudentsIcon;
