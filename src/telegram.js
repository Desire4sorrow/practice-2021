import * as React from "react";
import axios from 'axios';


import {     List,
    TextField,
    EditButton,
    Create,
    SimpleForm,
    TextInput,
    useListContext,
    ShowButton,
    Button,
    Edit,
    Show,
    SimpleShowLayout
} from 'react-admin';
import { Card, CardActions, CardHeader } from '@material-ui/core';
import ChromeReaderModeRoundedIcon from '@material-ui/icons/ChromeReaderModeRounded';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles({
    actions: {
        backgroundColor: '#ccc',
    },
});

export const NewsList = props => {
    useStyles(props);
    return (
        <List {...props}>
            <NewsGrid/>
        </List>
    );
};

const cardStyle = {
    width: 380,
    minHeight: 200,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top',
    backgroundColor: '#F0F8FF',
};
const NewsGrid = () => {
    const { ids, data, basePath } = useListContext();
    return (
        <div style={{ margin: '1em' }}>
            {ids.map(id =>
                <Card key={id} style={cardStyle}>
                    <CardHeader
                        title={<TextField record={data[id]} source="title" />}
                        avatar={<ChromeReaderModeRoundedIcon fontSize="large"/>}
                    />
                    <CardActions style={{position: 'relative', textAlign: 'center', marginTop: '5em'}}>
                        <ShowButton resource="telegrams" basePath={basePath} record={data[id]} />
                        <EditButton resource="telegrams" basePath={basePath} record={data[id]} />
                        <Button onClick={async () => {
                            alert('Sended to telegramBot');
                            console.log("Get method");
                            try {
                                await axios({
                                    url: "http://localhost:3001/telegrams/1",
                                    headers: {
                                        "Content-type": "application/json"
                                    },
                                    params: {
                                        id: '1',
                                        title: 'title',
                                        description: 'description'
                                    },
                                    method: "GET",
                                }).then(resp => {
                                    console.log(resp.data);
                                });
                            } catch (e) {
                                console.log("Sending error", e);
                            }
                            console.log("Post method");
                            try {
                                await axios({
                                    url: "https://localhost:3005/telegrambot",
                                    headers: {
                                        "Content-type": "application/json"
                                    },
                                    params: {
                                        id: '1',
                                        title: 'Feed1',
                                        description: 'TestFeed1'
                                    },
                                    data:{
                                        id: '1',
                                        title: 'Feed1',
                                        description: 'TestFeed1'
                                    },

                                    method: "POST",
                                }).then(resp => {
                                    console.log(resp.data);
                                });
                            } catch (e) {
                                console.log("Sending error", e);
                            }
                        }}
                                style={{ marginLeft: '11em'}} label="Send"/>
                    </CardActions>
                </Card>
            )}
        </div>
    );
};

export const NewsEdit = props => (
    <Edit title='Текущий проект' {...props}>
        <SimpleForm>
            <TextInput source="title" label="Заголовок" />
            <TextInput source="description" label="Описание" />
        </SimpleForm>
    </Edit>
);

export const NewsCreate = (props) => {

    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="title" label="Заголовок" resettable/>
                <TextInput source="description" label="Описание" resettable/>
            </SimpleForm>
        </Create>
    );
};

export const NewsShow = props => (
    <Show label='Текущий проект' {...props}>
        <SimpleShowLayout>
            <TextField source="title" label="Заголовок"/>
            <TextField source="description" label="Описание"/>
        </SimpleShowLayout>
    </Show>
);
