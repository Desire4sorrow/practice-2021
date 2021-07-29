import * as React from "react";
import {     List,
    TextField,
    EditButton,
    Create,
    SimpleForm,
    TextInput,
    useListContext,
Show,
ShowButton} from 'react-admin';
import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

export const NewsList = props => (
    <List {...props}>
        <NewsGrid/>
    </List>
);

const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};
const NewsGrid = () => {
    const { ids, data, basePath } = useListContext();
    return (
        <div style={{ margin: '1em' }}>
            {ids.map(id =>
                <Card key={id} style={cardStyle}>
                    <CardHeader
                        title={<TextField record={data[id]} source="title" />}
                        avatar={<Avatar icon={<PersonIcon />} />}
                    />
                    <CardContent>
                        <TextField record={data[id]} source="description" />
                    </CardContent>
                    <CardActions style={{ textAlign: 'center', marginTop: '7em'}}>
                        <EditButton resource="telegram" basePath={basePath} record={data[id]} />
                        <ShowButton resource="telegram" basePath={basePath} record={data[id]} />
                    </CardActions>
                </Card>
            )}
        </div>
    );
};

/*export const NewsEdit = props => (
    <Edit title='Текущий проект' {...props}>
        <SimpleForm>
            <TextInput source="id" label="Номер" />
            <TextInput source="title" label="Заголовок" />
            <TextInput source="description" label="Описание" />
        </SimpleForm>
    </Edit>
); */

export const NewsCreate = (props) => {

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="title" label="Заголовок" resettable/>
                <TextInput source="description" label="Описание" resettable/>
            </SimpleForm>
        </Create>
    );
}

/*export const NewsShow = props => (
    <Show label='Текущий проект' {...props}>
        <SimpleShowLayout>
            <TextField source="id" label="Номер"/>
            <TextField source="title" label="Заголовок"/>
            <TextField source="description" label="Описание"/>
        </SimpleShowLayout>
    </Show>
);*/