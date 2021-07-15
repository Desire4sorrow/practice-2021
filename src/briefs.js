import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
        RadioButtonGroupInput,
} from 'react-admin';

export const BriefList = props => (
    <SimpleForm>

        <label>Электронная почта</label>
        <TextInput source="Адрес электронной почты" resettable />
        <label>Как называется Ваша компания?</label>
        <TextInput source="Краткий ответ" resettable/>
        <label>Расскажите о своей компании (сегмент рынка, основной фокус, адрес сайта)</label>
        <TextInput source="Развернутый ответ" resettable/>
        <label>Это Ваш первый проект?</label>
        <TextInput source="Развернутый ответ" resettable/>
        <label>Как Вас зовут?</label>
            <TextInput source="Краткий ответ" resettable/>
        <label>Приходилось ли Вам работать с внешней командой разработчиков/агентством ранее?</label>
        <TextInput source="Развернутый ответ" resettable/>
        <label>Что вам понравилось и не понравилось?</label>
        <TextInput source="Развернутый ответ" resettable/>
        <label>Ищете ли Вы  подрядчика на разовый проект или планируется долгосрочное партнерство по развитию этого и прочих проектов?</label>
        <TextInput source="Развернутый ответ" resettable/>
        <label>Каковы решающие факторы/критерии при выборе подрядчика?</label>
        <TextInput source="Развернутый ответ" resettable/>
        <label>Кто будет основным контактным лицом в работе над проектом с вашей стороны?</label>
        <TextInput source="Развернутый ответ" resettable/>
        <label>Кто будет принимать решения по проекту во время работы? </label>
        <TextInput source="Развернутый ответ" resettable/>
        <label>Опишите основную функциональность проекта?</label>
        <TextInput source="Развернутый ответ" resettable/>
        <label>Какую проблему будет решать продукт? </label>
        <TextInput source="Развернутый ответ" resettable/>
        <label>Кто его целевая аудитория?</label>
        <TextInput source="Развернутый ответ" resettable/>
        <label>Есть ли какая-либо документация (ТЗ, спецификации, макеты экранов, интерактивный прототип)?</label>
            <RadioButtonGroupInput source="Выберите один вариант ответа" choices={[
                    { id: 'yesDoc', name: 'Да' },
                    { id: 'noDoc', name: 'Нет' },
                    { id: 'otherDoc', name: 'Другое' }
            ]} />
        <label>Укажите платформы, которые должны поддерживаться</label>
            <label> Если есть, то могли бы Вы предоставить файлы для ознакомления? (пожалуйста, укажите ссылку на файлы)</label>
                    <TextInput source="Развернутый ответ" resettable/>
        <label>Укажите версии OS</label>
            <label>Перечислите ссылки на подобные проекты, существующие на рынке. </label>
            <TextInput source="Развернутый ответ" resettable/>
        <label>Укажите, какие, на Ваш взгляд, у них преимущества и недостатки.</label>
        <TextInput source="Развернутый ответ" resettable/>
            <label>Какие конкурентные примущества будут у вашего проекта? </label>
            <TextInput source="Развернутый ответ" resettable/>
            <label>Будет ли предоставляться дизайн, или его необходимо создать с нуля? </label>
            <label>Будет ли приложение включать фоновую музыку и звуки?</label>
            <label>Будет ли приложение многоязычным? Какие языки оно должно поддерживать? </label>
            <TextInput source="Развернутый ответ" resettable/>
            <label>Какую модель монетизации будет использовать приложение?</label>
            <label>Будет ли серверная часть, панель администратора? </label>
            <label>Если да, то будет ли предоставляться бэкэнд, API?</label>
            <RadioButtonGroupInput source="Выберите один вариант ответа" choices={[
                    { id: 'yesApi', name: 'Да' },
                    { id: 'noApi', name: 'Нет' },
            ]} />
            <label>Пожалуйста, укажите режим экрана, который будет поддерживаться в приложении.</label>
            <RadioButtonGroupInput source="Выберите один вариант ответа" choices={[
                    { id: 'port', name: 'Портретный' },
                    { id: 'land', name: 'Пейзажный' },
                    { id: 'portland', name: 'Портретный и Пейзажный'}
            ]} />
            <label>Нужна ли вам помощь при публикации в AppStore / Google Play?</label>
            <RadioButtonGroupInput source="Выберите один вариант ответа" choices={[
                    { id: 'yesPub', name: 'Да' },
                    { id: 'noPub', name: 'Нет' },
            ]} />
            <label>Предполагаемая дата старта разработки </label>
            <TextInput source="Краткий ответ" resettable/>
            <label>Предполагаемая дата релиза </label>
            <TextInput source="Краткий ответ" resettable/>
            <label>Выделенный бюджет </label>
            <RadioButtonGroupInput source="Выберите один вариант ответа" choices={[
                    { id: 'before1', name: 'До 1 млн рублей' },
                    { id: '1-3', name: '1 млн рублей - 3 млн рублей' },
                    { id: '3-6', name: '3 млн рублей - 6 млн рублей'},
                    { id: '6-10', name: '6 млн рублей - 10 млн рублей'},
                    { id: '10-15', name: '10 млн рублей - 15 млн рублей'},
                    { id: '15+', name: '15 млн рублей +'},
            ]} />
            <label>Прочие комментарии/ нюансы, которые должна учитывать команда  </label>
            <TextInput source="Развернутый ответ" resettable/>
    </SimpleForm>
);

