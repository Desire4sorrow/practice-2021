import * as React from "react";
import { Admin, Resource } from 'react-admin';

import { PostList, PostEdit, PostCreate } from './posts';
import { UserList } from './users';
import {BriefList} from "./briefs";
import {ProjectInfo} from "./projectInfo";
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import NotFound from './NotFound';
import {NewsCreate, NewsList} from "./News";

import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import BriefIcon from '@material-ui/icons/ChromeReaderMode';
import NewsIcon from '@material-ui/icons/Announcement';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin catchAll={NotFound}
           dashboard={Dashboard}
           authProvider={authProvider}
           dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="briefs" list={BriefList} icon={BriefIcon} />
        <Resource name="news" list={NewsList} create={NewsCreate} icon={NewsIcon} />
    </Admin>
);

export default App;

