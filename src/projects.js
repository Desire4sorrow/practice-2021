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
    Show,
    ShowButton,
    TabbedShowLayout,
    DateField,
    RichTextField,
    SimpleShowLayout,
    Tab,
    NumberField,
    BooleanField,
    ReferenceManyField
} from 'react-admin';
import UrlFieldCustom from './UrlFieldCustom'

export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid>
            <TextField source="client" title="Клиент" />
            <TextField source="budget" />
            <TextField source="nda" />
            <TextField source="timings" />
            <UrlFieldCustom source="projectLink" />
            <TextField source="directions" />
            <TextField source="otrasl" />
            <TextField source="status" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit title={<ProjectTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => {
    const categories = [
        { name: 'Tech', id: 'tech' },
        { name: 'Lifestyle', id: 'lifestyle' },
    ];
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <AutocompleteInput
                    onCreate={() => {
                        const newCategoryName = prompt('Enter a new category');
                        const newCategory = { id: newCategoryName.toLowerCase(), name: newCategoryName };
                        categories.push(newCategory);
                        return newCategory;
                    }}
                    source="category"
                    choices={categories}
                />
            </SimpleForm>
        </Create>
    );
}

const ProjectTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Id" source="projectName" reference="projects" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="projectName" />
            <TextField source="teaser" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
);