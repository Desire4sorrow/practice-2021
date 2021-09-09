import * as React from "react";
import { Admin, Resource, Logout } from 'react-admin';

import { ProjectList, ProjectEdit, ProjectCreate, ProjectShow } from './projects';
import {BriefList} from "./briefs";
import Dashboard from './Dashboard';
import {authProvider} from './embeddedModules/authProvider';
import NotFound from './embeddedModules/NotFound';
import {NewsList, NewsCreate, NewsEdit, NewsShow} from "./telegram";
import jsonServerProvider from './embeddedModules/dataProvider';
import MyLogin from './embeddedModules/LoginPage';

import PostIcon from '@material-ui/icons/Book';
import BriefIcon from '@material-ui/icons/ChromeReaderMode';
import NewsIcon from '@material-ui/icons/Announcement';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const MyLogoutButton = props => <Logout {...props} icon={<ExitToAppIcon/>} />;


const App = () => (
    <Admin
           loginPage={MyLogin}
           logoutButton={MyLogoutButton}
           catchAll={NotFound}
           dashboard={Dashboard}
           authProvider={authProvider}
           dataProvider={jsonServerProvider}>

        <Resource name="projects" list={ProjectList} edit={ProjectEdit} create={ProjectCreate} show={ProjectShow} icon={PostIcon} />
        <Resource name="briefs" list={BriefList} icon={BriefIcon} />
        <Resource name="telegrams" list={NewsList} create={NewsCreate} edit={NewsEdit} show={NewsShow} icon={NewsIcon}/>
    </Admin>
);

export default App;

