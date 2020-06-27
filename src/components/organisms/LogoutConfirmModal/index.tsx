import React, { memo } from 'react';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirmed: () => void;
};

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: '320px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: theme.spacing(1),
  },
}));

const LogoutConfirmModal: React.FC<Props> = ({
  open,
  onClose,
  onConfirmed,
}: Props) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="確認"
      aria-describedby="ログアウトしますか？"
      className={classes.modal}
      open={open}
      onClose={onClose}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography component="h2" variant="h6">
            ログアウトしますか？
          </Typography>
          <div className={classes.buttons}>
            <Button onClick={onConfirmed} color="primary" variant="contained">
              ログアウト
            </Button>
            <Button onClick={onClose} color="secondary" variant="contained">
              キャンセル
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default memo(LogoutConfirmModal);
