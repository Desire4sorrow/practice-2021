import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';

export const NewsList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);