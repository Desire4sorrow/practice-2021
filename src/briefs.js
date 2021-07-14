import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

export const BriefList = props => (
    <SimpleForm>
        <label>Электронная почта</label>
        <TextInput source="Адрес электронной почты" />
        <label>Как называется Ваша компания?</label>
        <TextInput source="Краткий ответ"/>
        <label>Расскажите о своей компании (сегмент рынка, основной фокус, адрес сайта)</label>
        <TextInput source="Развернутый ответ" />
        <label>Это Ваш первый проект?</label>
        <TextInput source="Развернутый ответ" />
        <label>Приходилось ли Вам работать с внешней командой разработчиков/агентством ранее?</label>
        <TextInput source="Развернутый ответ" />
        <label>Что вам понравилось и не понравилось?</label>
        <TextInput source="Развернутый ответ" />
        <label>Ищете ли Вы  подрядчика на разовый проект или планируется долгосрочное партнерство по развитию этого и прочих проектов?</label>
        <TextInput source="Развернутый ответ" />
        <label>Каковы решающие факторы/критерии при выборе подрядчика?</label>
        <TextInput source="Развернутый ответ" />
        <label>Кто будет основным контактным лицом в работе над проектом с вашей стороны?</label>
        <TextInput source="Развернутый ответ" />
        <label>Кто будет принимать решения по проекту во время работы? </label>
        <TextInput source="Развернутый ответ" />
        <label>Опишите основную функциональность проекта?</label>
        <TextInput source="Развернутый ответ" />
        <label>Какую проблему будет решать продукт? </label>
        <TextInput source="Развернутый ответ" />
        <label>Кто его целевая аудитория?</label>
        <TextInput source="Развернутый ответ" />
        <label>Это Ваш первый проект?</label>
        <TextInput source="Развернутый ответ" />
        <label>Это Ваш первый проект?</label>
        <TextInput source="Развернутый ответ" />
        <label>Это Ваш первый проект?</label>
        <TextInput source="Развернутый ответ" />
        <label>Это Ваш первый проект?</label>
        <TextInput source="Развернутый ответ" />

        <TextInput source="body" />

    </SimpleForm>
);

