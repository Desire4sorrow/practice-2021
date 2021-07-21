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
    ReferenceManyField,
    UrlField
} from 'react-admin';
import UrlFieldCustom from './UrlFieldCustom'

export const ProjectList = props => (
    <List  {...props}>
        <Datagrid>
            <TextField source="project_name" title="Название"/>
            <TextField source="client" title="Клиент" />
            <TextField source="budget" title="Бюджет"/>
            <TextField source="nda" title="NDA"/>
            <TextField source="timings" title="Сроки"/>
            <UrlFieldCustom source="projectLink" title="Ссылка на проект" />
            <TextField source="workDirections" title="Направление"/>
            <TextField source="otrasl" title="Отрасль"/>
            <TextField source="status" title="Статус" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export const ProjectEdit = props => (
    <Edit title={<ProjectTitle />} {...props}>
        <SimpleForm>
            <TextInput source="project_name" />
            <TextInput source="description"/>
            <TextInput source="client" />
            <TextInput source="budget" />
            <TextInput source="nda" />
            <TextInput source="timings"/>
            <TextInput source="projectLink"/>
            <TextInput source="workDirections"/>
            <TextInput source="otrasl"/>
            <TextInput source="status"/>
            <TextInput source="troubles"/>
            <TextInput source="technologies"/>
            <TextInput source="storeSiteLinks"/>
            <TextInput source="caseBehanceLinks"/>
            <TextInput source="presentationLink"/>
        </SimpleForm>
    </Edit>
);

export const ProjectCreate = (props) => {
    const nda = [
        { name: 'Разрешено', id: 'NdaTrue' },
        { name: 'Запрещено', id: 'NdaFalse' },
    ];
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="project_name" resettable/>
                <TextInput source="description" resettable/>
                <TextInput source="client" resettable/>
                <TextInput source="budget" resettable/>
                <AutocompleteInput
                    source="nda"
                    choices={nda}
                    resettable
                />
                <TextInput source="timings" resettable/>
                <TextInput source="projectLink" resettable/>
                <TextInput source="workDirections" resettable/>
                <TextInput source="otrasl" resettable/>
                <TextInput source="status" resettable/>
                <TextInput source="troubles" resettable/>
                <TextInput source="technologies" resettable/>
                <TextInput source="storeSiteLinks" resettable/>
                <TextInput source="caseBehanceLinks" resettable/>
                <TextInput source="presentationLink" resettable/>
            </SimpleForm>
        </Create>
    );
}

const ProjectTitle = ({ record }) => {
    return <span>Project {record ? `"${record.title}"` : ''}</span>;
};

/*const ProjectFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Id" source="projectName" reference="projects" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);*/

export const ProjectShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="project_name" title="Название"/>
            <TextField source="description" title="Описание"/>
            <TextField source="client" title="Клиент" />
            <TextField source="budget" title="Бюджет"/>
            <TextField source="nda" title="NDA"/>
            <TextField source="timings" title="Сроки"/>
            <UrlField source="projectLink" title="Ссылка на проект" />
            <TextField source="workDirections" title="Направление"/>
            <TextField source="otrasl" title="Отрасль"/>
            <TextField source="status" title="Статус" />
            <TextField source="troubles" title="Проблемы/сложности"/>
            <TextField source="technologies" title="Технологии"/>
            <UrlField source="storeSiteLinks" title="ссылка на стор"/>
            <UrlField source="caseBehanceLinks" title="ссылка на бехансе"/>
            <UrlField source="presentationLink" title="ссылка на презентацию"/>
        </SimpleShowLayout>
    </Show>
);