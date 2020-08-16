// import { UserProvider } from './src/contexts/UserContext.jsx';
const UserProvider = require('./src/contexts/UserContext.jsx').default;

export const wrapRootElement = UserProvider;
