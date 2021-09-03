import * as React from "react";
import { fetchUtils, Admin, Resource } from 'react-admin';

import { ProjectList, ProjectEdit, ProjectCreate, ProjectShow } from './projects';
import {BriefList} from "./briefs";
import Dashboard from './Dashboard';
import authProvider from './embeddedModules/authProvider';
import NotFound from './embeddedModules/NotFound';
import {NewsList, NewsCreate} from "./telegram";

import jsonServerProvider from 'ra-data-json-server';

import PostIcon from '@material-ui/icons/Book';
import BriefIcon from '@material-ui/icons/ChromeReaderMode';
import NewsIcon from '@material-ui/icons/Announcement';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider('http://127.0.0.1:3001', httpClient);

const App = () => (
    <Admin catchAll={NotFound}
           dashboard={Dashboard}
           authProvider={authProvider}
           dataProvider={dataProvider}>

        <Resource name="projects" list={ProjectList} edit={ProjectEdit} create={ProjectCreate} show={ProjectShow} icon={PostIcon} />
        <Resource name="briefs"  list={BriefList} icon={BriefIcon} />
        <Resource name="telegrams" list={NewsList} create={NewsCreate}  icon={NewsIcon} />
    </Admin>
);

export default App;

