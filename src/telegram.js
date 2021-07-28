import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
import UrlFieldCustom from "./UrlFieldCustom";

export const NewsList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" label="Номер"/>
            <TextField source="title" label="Заголовок"/>
            <TextField source="description" label="Описание"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const NewsEdit = props => (
    <Edit title='Текущий проект' {...props}>
        <SimpleForm>
            <TextInput source="id" label="Номер" />
            <TextInput source="title" label="Заголовок" />
            <TextInput source="description" label="Описание" />
        </SimpleForm>
    </Edit>
);

export const NewsCreate = (props) => {

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="id" label="Номер" />
                <TextInput source="title" label="Заголовок" resettable/>
                <TextInput source="description" label="Описание" resettable/>
            </SimpleForm>
        </Create>
    );
}

export const NewsShow = props => (
    <Show label='Текущий проект' {...props}>
        <SimpleShowLayout>
            <TextField source="id" label="Номер"/>
            <TextField source="title" label="Заголовок"/>
            <TextField source="description" label="Описание"/>
        </SimpleShowLayout>
    </Show>
);