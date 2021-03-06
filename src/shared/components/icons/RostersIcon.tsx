import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

const RostersIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      viewBox="0 0 20 18">
      <g id="Grupo_556" data-name="Grupo 556" transform="translate(-2 -3)">
        <g id="Grupo_309" data-name="Grupo 309">
          <path
            id="Trazado_48"
            data-name="Trazado 48"
            d="M20,3H4A2.006,2.006,0,0,0,2,5V19a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,20,3ZM10,17H5V15h5Zm0-4H5V11h5Zm0-4H5V7h5Zm4.82,6L12,12.16l1.41-1.41,1.41,1.42L17.99,9l1.42,1.42Z"
            fill="#7b8f99"
            fillRule="evenodd"
          />
        </g>
      </g>
    </SvgIcon>
  );
};

export default RostersIcon;
