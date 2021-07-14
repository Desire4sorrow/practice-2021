import * as React from "react";
import { List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

export const NewsList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="Название" />
            <TextField source="Описание" />
            <EditButton />
        </Datagrid>
    </List>
);

export const NewsEdit = props => (
    <Edit title={<NewsTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

const NewsTitle = ({ record }) => {
    return <span>New {record ? `"${record.title}"` : ''}</span>;
};

export const NewsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="Название" />
            <TextInput multiline source="Описание" />
        </SimpleForm>
    </Create>
);