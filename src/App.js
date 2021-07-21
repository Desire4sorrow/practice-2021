import * as React from "react";
import { Admin, Resource } from 'react-admin';

import { PostList, PostEdit, PostCreate, PostShow } from './projects';
import {BriefList} from "./briefs";
import {ProjectInfo} from "./projectInfo";
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import NotFound from './NotFound';
import {NewsCreate, NewsEdit, NewsList} from "./News";

import jsonServerProvider from 'ra-data-json-server';

import PostIcon from '@material-ui/icons/Book';
import BriefIcon from '@material-ui/icons/ChromeReaderMode';
import NewsIcon from '@material-ui/icons/Announcement';

const dataProvider = jsonServerProvider('http://127.0.0.1:3001');

const App = () => (
    <Admin catchAll={NotFound}
           dashboard={Dashboard}
           authProvider={authProvider}
           dataProvider={dataProvider}>

        <Resource name="projects" list={PostList} edit={PostEdit} create={PostCreate} show={PostShow} icon={PostIcon} />
        <Resource name="briefs" list={BriefList} icon={BriefIcon} />
        <Resource name="news" list={NewsList} edit={NewsEdit} create={NewsCreate} icon={NewsIcon} />
    </Admin>
);

export default App;

