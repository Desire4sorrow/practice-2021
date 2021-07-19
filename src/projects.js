import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    Filter,
    ReferenceInput,
    SelectInput,
    TextInput,
    AutocompleteInput,
} from 'react-admin';

export const ProjectList = props => (
    <List  {...props}>
        <Datagrid>
            <TextField source='id_project' />
            <TextField source='project_name' />
            <TextField source='budget' />
            <TextField source='nda' />
            <TextField source='timings' />
            <TextField source="status" />
            <TextField source="otrasl" />
            <EditButton />
        </Datagrid>
    </List>
);



