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
}

function SendToBot()
{
    alert('Sending this new to Telegram');
}
const cardStyle = {
    width: 380,
    minHeight: 200,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top',
    backgroundColor: 'lightblue',
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
                        <Button onClick={SendToBot} style={{ marginLeft: '11em'}} label="Send"/>
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
}

export const NewsShow = props => (
    <Show label='Текущий проект' {...props}>
        <SimpleShowLayout>
            <TextField source="title" label="Заголовок"/>
            <TextField source="description" label="Описание"/>
        </SimpleShowLayout>
    </Show>
);