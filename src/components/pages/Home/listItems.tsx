import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BarChartIcon from '@material-ui/icons/BarChart';
import DescriptionIcon from '@material-ui/icons/Description';

type Props = {
  onSignOut: () => void;
};

const MainListItems: React.FC<Props> = ({ onSignOut }: Props) => (
  <div>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="ダッシュボード" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DescriptionIcon />
      </ListItemIcon>
      <ListItemText primary="記事別統計" />
    </ListItem>
    <ListItem button onClick={onSignOut}>
      <ListItemIcon>
        <DeleteForeverIcon />
      </ListItemIcon>
      <ListItemText primary="ログアウト" />
    </ListItem>
  </div>
);

export default MainListItems;
