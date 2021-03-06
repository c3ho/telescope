import Link from 'next/link';
import { ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

import config from '../../config';
import { useUser } from '../UserProvider';

/**
 * Show either a Login button (if user isn't authenticated)
 * or a welcome message and Logout button.
 */

const useStyles = makeStyles((theme) => ({
  item: {
    color: theme.palette.background.default,
    fontFamily: 'Roboto, sans-serif',
    textDecoration: 'none',
    fontSize: '1.5rem',
    justifyContent: 'center',
    fontWeight: 500,
    lineHeight: 1.75,
  },
}));

type LoginProps = {
  isMobile: boolean | undefined;
};

const Login = ({ isMobile = false }: LoginProps) => {
  const { isLoggedIn } = useUser();
  const classes = useStyles();
  if (isMobile) {
    return isLoggedIn ? (
      // This is How you make NextJS Link works with ListItem
      // Reference: https://dev.to/ivandotv/using-next-js-link-component-with-material-ui-buttons-and-menu-items-3m6a
      <Link href={`${config.telescopeUrl}/auth/logout`} passHref>
        <ListItem button component="a" className={classes.item}>
          <LoggedIn />
        </ListItem>
      </Link>
    ) : (
      <Link href={`${config.telescopeUrl}/auth/login`} passHref>
        <ListItem button component="a" className={classes.item}>
          <LoggedOut />
        </ListItem>
      </Link>
    );
  }

  return isLoggedIn ? <LoggedIn /> : <LoggedOut />;
};

export default Login;
