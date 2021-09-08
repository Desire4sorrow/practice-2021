import * as React from "react";
import { Admin, Resource } from 'react-admin';

import { ProjectList, ProjectEdit, ProjectCreate, ProjectShow } from './projects';
import {BriefList} from "./briefs";
import Dashboard from './Dashboard';
import {authProvider, httpClient} from './embeddedModules/authProvider';
import NotFound from './embeddedModules/NotFound';
import {NewsList, NewsCreate, NewsEdit, NewsShow} from "./telegram";

import jsonServerProvider from './embeddedModules/dataProvider';
import simpleRestProvider from 'ra-data-json-server';

import PostIcon from '@material-ui/icons/Book';
import BriefIcon from '@material-ui/icons/ChromeReaderMode';
import NewsIcon from '@material-ui/icons/Announcement';



const App = () => (
    <Admin catchAll={NotFound}
           dashboard={Dashboard}
           authProvider={authProvider}
           dataProvider={jsonServerProvider}>

        <Resource name="projects" list={ProjectList} edit={ProjectEdit} create={ProjectCreate} show={ProjectShow} icon={PostIcon} />
        <Resource name="briefs" list={BriefList} icon={BriefIcon} />
        <Resource name="telegrams" list={NewsList} create={NewsCreate} edit={NewsEdit} show={NewsShow} icon={NewsIcon}/>
    </Admin>
);

export default App;

