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
    UrlField,
    SelectField,
    ArrayField,
    ArrayInput,
    SingleFieldList,
    SimpleFormIterator,
    NumberInput,
    DateInput,
    SimpleList,
    SearchInput,
} from 'react-admin';
import UrlFieldCustom from './UrlFieldCustom';

const otraslFields = [
    {id: '0', name: 'Разработка web-приложений'},
    {id: '1', name: 'Разработка desktop-приложений'},
    {id: '2', name: 'Разработка серверных приложений'},
    {id: '3', name: 'Разработка мобильных приложений'},
    {id: '4', name: 'Программирование встраиваемых систем'},
    {id: '5', name: 'Системное программирование'},
    {id: '6', name: 'Разработка игр'},
];

const stateOfProjectFields = [
    {id: '0', name: 'Открыт'},
    {id: '1', name: 'В процессе разработки'},
    {id: '2', name: 'Тестрируется'},
    {id: '3', name: 'Завершён'},
];

const ndaFields = [
    { name: 'Разрешено', id: '1' },
    { name: 'Запрещено', id: '0' },
];


const ProjectFilter = (props) => (
    <Filter {...props}>
        <SearchInput source="id" resettable alwaysOn />
    </Filter>
)
export const ProjectList = props => (
    <List filters={<ProjectFilter/>} {...props} >
        <Datagrid>
            <TextField source="project_name" label="Название проекта"/>
            <TextField source="client" label="Клиент" />
            <NumberField source="budget" lable="Бюджет"/>
            <SelectField source="nda" choices={ndaFields} label="NDA"/>
            <UrlFieldCustom source="link_to_project_folder" label="Ссылка" />
            <SelectField source="otrasl" choices={otraslFields} label="Отрасль"/>
            <SelectField source="state_of_project" choices={stateOfProjectFields} label="Статус проекта"/>
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);

export const ProjectEdit = props => (
    <Edit title='Текущий проект' {...props}>
        <SimpleForm>
            <TextInput source="project_name" label="Название проекта" />
            <SelectInput source="otrasl" choices={otraslFields} label="Отрасль"/>
            <SelectInput source="state_of_project" choices={stateOfProjectFields} label="Состояние проекта"/>
            <TextInput source="client" label="Клиент"/>
            <SelectInput source="nda" choices={ndaFields} />
            <NumberInput source="budget" label="Бюджет"/>
            <TextInput source="description" label="Описание проекта"/>
            <TextInput source="problems_and_solvings" label="Проблемы и их решения"/>
            <ArrayInput source="technologies" label="Технологии">
                <SimpleFormIterator>
                    <TextInput source="technology" label="Технология" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="links_to_store_site" label="Ссылка на стор-сайт">
                <SimpleFormIterator>
                    <TextInput source="link" label="Ссылка"/>
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="link_to_project_folder" label="Ссылка на папку проекта"/>
            <TextInput source="link_to_presentation" label="Ссылка на презентацию"/>
            <ArrayInput source="links_to_case_behance_or_our_site" label="Ссылки на кейс в бехансе или нашем сайте">
                <SimpleFormIterator>
                    <TextInput source="link_case" label="Ссылка" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="teams" label="Команды">
                <SimpleFormIterator >
                    <TextInput source="team_work_direction" label="Команда" />
                    <ArrayInput source="team" label="">
                        <SimpleFormIterator >
                            <TextInput source="workers" label="Сотрудник" />
                        </SimpleFormIterator>
                    </ArrayInput>
                </SimpleFormIterator>
            </ArrayInput>
            <DateInput source="terms_from" label="Дата начала проекта"/>
            <DateInput source="terms_to" label="Дата окончания проекта"/>
            <ArrayInput source="directions_of_work" label="Направление работы">
                <SimpleFormIterator>
                    <TextInput source="work_direction" label="Направление"/>
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="nominations" label="Номинации">
                <SimpleFormIterator>
                    <TextInput source="title" label="Название"/>
                    <TextInput source="description" label="Описание"/>
                    <TextInput source="link" label="Ссылка"/>
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="clock_estimation" label="Часы разработки проекта">
                <SimpleFormIterator>
                    <NumberInput source="clock" label="Количество часов"/>
                    <TextInput source="direction" label="Направление"/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const ProjectCreate = (props) => {

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="project_name" label="Название проекта" resettable/>
                <SelectInput source="otrasl" label="Отрасль" choices={otraslFields} />
                <SelectInput source="state_of_project" label="Состояние проекта" choices={stateOfProjectFields} />
                <TextInput source="client" label="Клиент" resettable/>
                <SelectInput source="nda" choices={ndaFields} />
                <NumberInput source="budget" label="Бюджет" resettable/>
                <TextInput source="description" label="Описание проекта" resettable/>
                <TextInput source="problems_and_solvings" label="Проблемы и их решения" resettable/>
                <ArrayInput source="technologies" label="Технологии" >
                    <SimpleFormIterator>
                        <TextInput source="technology" label="Технология" resettable/>
                    </SimpleFormIterator>
                </ArrayInput>
                <ArrayInput source="links_to_store_site" label="Ссылка на стор-сайт">
                    <SimpleFormIterator>
                        <TextInput source="link" label="Ссылка" resettable/>
                    </SimpleFormIterator>
                </ArrayInput>
                <TextInput source="link_to_project_folder" label="Ссылка на папку проекта" resettable/>
                <TextInput source="link_to_presentation" label="Ссылка на презентацию" resettable/>
                <ArrayInput source="links_to_case_behance_or_our_site" label="Ссылки на кейс на Бехансе или на нашем сайте">
                    <SimpleFormIterator>
                        <TextInput source="link_case" label="Ссылка" resettable/>
                    </SimpleFormIterator>
                </ArrayInput>
                <ArrayInput source="teams" label="Команды" >
                    <SimpleFormIterator>
                        <TextInput source="team_work_direction" label="Команда" resettable/>
                        <ArrayInput source="team" label="">
                            <SimpleFormIterator>
                                <TextInput source="workers" label="Сотрудник" resettable/>
                            </SimpleFormIterator>
                        </ArrayInput>
                    </SimpleFormIterator>
                </ArrayInput>
                <DateInput source="terms_from" label="Дата начала проекта"/>
                <DateInput source="terms_to" label="Дата окончания проекта"/>
                <ArrayInput source="directions_of_work" label="Направление работы">
                    <SimpleFormIterator>
                        <TextInput source="work_direction" label="Направление" resettable/>
                    </SimpleFormIterator>
                </ArrayInput>
                <ArrayInput source="nominations" label="Номинации">
                    <SimpleFormIterator>
                        <TextInput source="title" label="Название" resettable/>
                        <TextInput source="description" label="Описание" resettable/>
                        <TextInput source="link" label="Ссылка" resettable/>
                    </SimpleFormIterator>
                </ArrayInput>
                <ArrayInput source="clock_estimation" label="Часы разработки проекта">
                    <SimpleFormIterator>
                        <NumberInput source="clock" label="Количество часов" resettable/>
                        <TextInput source="direction" label="Направление" resettable/>
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create>
    );
}

export const ProjectShow = props => (
    <Show label='Текущий проект' {...props}>
        <SimpleShowLayout>
            <TextField source="project_name" title="Название"/>
            <SelectField source="otrasl" choices={otraslFields} title="Отрасль"/>
            <SelectField source="state_of_project" choices={stateOfProjectFields} title="Статус" />
            <TextField source="client" title="Клиент" />
            <SelectField source="nda" choices={ndaFields} title="NDA"/>
            <NumberField source="budget" title="Бюджет"/>
            <TextField source="description" title="Описание"/>
            <TextField source="problems_and_solvings" title="Проблемы/сложности"/>
            <ArrayField source="technologies" title="Технологии">
                <SingleFieldList>
                    <TextField source="technology"/>
                </SingleFieldList>
            </ArrayField>
            <ArrayField source="links_to_store_site" title="Cсылка на стор">
                <SingleFieldList>
                    <UrlField source="link"/>
                </SingleFieldList>
            </ArrayField>
            <UrlField source="link_to_project_folder" title="Ссылка на проект" />
            <UrlField source="link_to_presentation" title="Cсылка на презентацию"/>
            <ArrayField source="links_to_case_behance_or_our_site" title="Ссылка на бэхансе/наш сайт">
                <SingleFieldList>
                    <UrlField source="link_case"/>
                </SingleFieldList>
            </ArrayField>
            <ArrayField source="teams" title="Команды">
                <Datagrid>
                    <TextField source="team_work_direction" title="Направление"/>
                    <ArrayField source="team" title="Команда">
                        <SingleFieldList>
                            <TextField source="workers"/>
                        </SingleFieldList>
                    </ArrayField>
                </Datagrid>
            </ArrayField>
            <DateField source="terms_from" title="Срок От"/>
            <DateField source="terms_to" title="Срок До"/>
            <ArrayField source="directions_of_work" title="Направление работы">
                <SingleFieldList>
                    <TextField source="work_direction"/>
                </SingleFieldList>
            </ArrayField>
            <ArrayField source="nominations" title="Номинации">
                <Datagrid>
                    <TextField source="title" title="Название"/>
                    <TextField source="description" title="Описание"/>
                    <TextField source="link" title="Ссылка"/>
                </Datagrid>
            </ArrayField>
            <ArrayField source="clock_estimation" title="Часы по оценке">
                <Datagrid>
                    <DateField source="clock" title="Время"/>
                    <TextField source="direction" title="Направление работы"/>
                </Datagrid>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);