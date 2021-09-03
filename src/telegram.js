import * as React from "react";
import {     List,
    TextField,
    EditButton,
    Create,
    SimpleForm,
    TextInput,
    useListContext,
    ShowButton,
    Button,
} from 'react-admin';
import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';


export const NewsList = props => (
    <List {...props}>
        <NewsGrid />
    </List>
);

const cardStyle = {
    width: 380,
    minHeight: 200,
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
                        avatar={<EventIcon />}
                    />
                    <CardActions style={{position: 'relative', textAlign: 'center', marginTop: '5em'}}>
                        <EditButton resource="telegram" basePath={basePath} record={data[id]} />
                        <ShowButton resource="telegram" basePath={basePath} record={data[id]} />
                        <Button style={{ marginLeft: '11em'}} label="Send"/>
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