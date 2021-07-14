import * as React from "react";
import { List,
         Datagrid,
         TextField,
         Create,
         SelectInput,
         TextInput,
         SimpleForm
} from 'react-admin';
import MyUrlField from './MyUrlField';

export const NewsList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="Название" />
            <TextField source="Описание" />
        </Datagrid>
    </List>
);

export const NewsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="Название" />
            <TextInput multiline source="Описание" />
        </SimpleForm>
    </Create>
);