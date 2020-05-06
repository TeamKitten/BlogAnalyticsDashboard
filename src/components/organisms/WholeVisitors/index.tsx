import 'dayjs/locale/ja';

import React, { memo } from 'react';
import dayjs from 'dayjs';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Title from '../../atoms/Title';

const useStyles = makeStyles(() => ({
  depositContext: {
    flex: 1,
  },
}));

const WholeVisitors: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Title>全期間ページビュー</Title>
      <Typography component="p" variant="h4">
        114,515人
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {dayjs().format('YYYY/MM/DD hh:mm')}
        時点
      </Typography>
    </>
  );
};

export default memo(WholeVisitors);
