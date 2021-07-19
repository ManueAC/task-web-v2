import React from 'react';
import { Grid, IconButton, Box } from '@material-ui/core';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@material-ui/icons';

type Props = {
  rowsPerPage: number;
  count: number;
  page: number;
  onChangePage: (param: number) => void;
}

export const TablePagination: React.FC<Props> = ({
  count,
  rowsPerPage,
  page,
  onChangePage
}) => {

  const totalPages = Math.ceil(count / rowsPerPage);
  const pages: number[] = [];
  
  for ( let i = 1 ; i <= totalPages; i ++) {
    pages.push(i);
  }

  const blackColor = '#000D27';
  const grayColor = '#ACC8D6';

  const disablePrev = page === pages[0];
  const disableNext = page === pages[pages.length - 1];
  
  return (
    <Grid container justify="center" alignItems="center" spacing={1}>
      <Grid item>
        <IconButton 
          size="small" 
          style={{color: blackColor}} 
          onClick={() => onChangePage(page - 1)} 
          disabled={disablePrev}
        >
          <ChevronLeftIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <Box display="flex" fontWeight="bolder">
          {pages.map((pag) => {
            const currentPage = page === pag;
            return (
              <Box 
                key={pag} 
                mx="8px"
                style={{
                  cursor: 'pointer',
                  color: currentPage ? blackColor : grayColor
                }}
                onClick={() => onChangePage(pag)}
              >
                {pag}
              </Box>
            );
          })}
        </Box>
      </Grid>
      <Grid item> 
        <IconButton 
          size="small" 
          style={{color: blackColor}} 
          onClick={() => onChangePage(page + 1)} 
          disabled={disableNext}
        >
          <ChevronRightIcon />
        </IconButton>
      </Grid>
    </Grid>
  );};
