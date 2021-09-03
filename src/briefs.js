import * as React from "react";
import {
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    CheckboxGroupInput,
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
            <RadioButtonGroupInput source="Documentation" label="" choices={[
                    { id: 'yesDoc', name: 'Да' },
                    { id: 'noDoc', name: 'Нет' },
                    { id: 'otherDoc', name: 'Другое' }
            ]} row={false} />
        <label>Укажите платформы, которые должны поддерживаться</label>
        <CheckboxGroupInput source="Platforms" label="" choices={[
            { id: 'IOS', name: 'IOS(Iphone или Ipad)' },
            { id: 'Iphone', name: 'Iphone only' },
            { id: 'Ipad', name: 'Ipad only' },
            { id: 'AppleWatch', name: 'Apple Watch'},
            { id: 'AppleTV', name: 'AppleTV'},
            { id: 'AndroidOnly', name: 'Android smartphones only'},
            { id: 'AndroidTablets', name: 'Android tablets only'},
            { id: 'SmartphonesTablets', name: 'Android smartphones and tablets'},
            { id: 'Web', name: 'Web'},
        ]} row={false}/>
            <label> Если есть, то могли бы Вы предоставить файлы для ознакомления? (пожалуйста, укажите ссылку на файлы)</label>
                    <TextInput source="Развернутый ответ" resettable/>
        <label>Укажите версии OS</label>
        <CheckboxGroupInput source="OsVersion" label="" choices={[
            { id: 'IOS8+', name: 'IOS 8+' },
            { id: 'Android4+', name: 'Android 4+' },
        ]} row={false}/>
            <label>Перечислите ссылки на подобные проекты, существующие на рынке. </label>
            <TextInput source="Развернутый ответ" resettable/>
        <label>Укажите, какие, на Ваш взгляд, у них преимущества и недостатки.</label>
        <TextInput source="Развернутый ответ" resettable/>
            <label>Какие конкурентные примущества будут у вашего проекта? </label>
            <TextInput source="Развернутый ответ" resettable/>
            <label>Будет ли предоставляться дизайн, или его необходимо создать с нуля? </label>
        <CheckboxGroupInput source="Design" label="" choices={[
            { id: 'NoDesign', name: 'Нет, нам нужно создать дизайн с нуля' },
            { id: 'IconsDesign', name: 'У нас есть иконки приложения' },
            { id: 'FinDesign', name: 'У нас есть окончательный дизайн, и наш дизайнер уже подготовил все ресурсы для разработки в соответствии с вашими стандартами'}
        ]} row={false}/>
            <label>Будет ли приложение включать фоновую музыку и звуки?</label>
        <CheckboxGroupInput source="Music" label="" choices={[
            { id: 'MusicYes', name: 'Да' },
            { id: 'MusicNo', name: 'Нет' },
            { id: 'MusicYesExist', name: 'Да, и Клиент предоставит аудио файлы' },
            { id: 'MusicYesNotExist', name: 'Да, Клиенту необходимо, чтобы они были созданы как часть этого заказа'},
            { id: 'MusicNotStated', name: 'Пока не уверен'},
        ]} row={false}/>
            <label>Будет ли приложение многоязычным? Какие языки оно должно поддерживать? </label>
            <TextInput source="Развернутый ответ" resettable/>
            <label>Какую модель монетизации будет использовать приложение?</label>
        <CheckboxGroupInput source="Monetization" label="" choices={[
            { id: 'MonetizationPaid', name: 'Платное' },
            { id: 'MonetizationFree', name: 'Бесплатное' },
            { id: 'MonetizationFreePaid', name: 'Будет включать в себя покупки в приложении' },
            { id: 'MonetizationNotStated', name: 'Еще не знаю'},
        ]} row={false}/>
            <label>Будет ли серверная часть, панель администратора? </label>
                <RadioButtonGroupInput source="Backend part" label="" choices={[
            { id: 'BackendPartYes', name: 'Да' },
            { id: 'BackendPartNo', name: 'Нет' },
                ]} row={false}/>
            <label>Если да, то будет ли предоставляться бэкэнд, API?</label>
            <RadioButtonGroupInput source="Backend" label="" choices={[
                { id: 'yesApi', name: 'Да' },
                { id: 'noApi', name: 'Нет' },
            ]} row={false}/>
            <label>Пожалуйста, укажите режим экрана, который будет поддерживаться в приложении.</label>
            <RadioButtonGroupInput source="Screen" label="" choices={[
                    { id: 'port', name: 'Портретный' },
                    { id: 'land', name: 'Пейзажный' },
                    { id: 'portland', name: 'Портретный и Пейзажный'}
            ]} row={false}/>
            <label>Нужна ли вам помощь при публикации в AppStore / Google Play?</label>
            <RadioButtonGroupInput source="Publication" label="" choices={[
                    { id: 'yesPub', name: 'Да' },
                    { id: 'noPub', name: 'Нет' },
            ]} row={false}/>
            <label>Предполагаемая дата старта разработки </label>
            <TextInput source="Краткий ответ" resettable/>
            <label>Предполагаемая дата релиза </label>
            <TextInput source="Краткий ответ" resettable/>
            <label>Выделенный бюджет </label>
            <RadioButtonGroupInput source="Budjet" label="" choices={[
                    { id: 'before1', name: 'До 1 млн рублей' },
                    { id: '1-3', name: '1 млн рублей - 3 млн рублей' },
                    { id: '3-6', name: '3 млн рублей - 6 млн рублей'},
                    { id: '6-10', name: '6 млн рублей - 10 млн рублей'},
                    { id: '10-15', name: '10 млн рублей - 15 млн рублей'},
                    { id: '15+', name: '15 млн рублей +'},
            ]} row={false}/>
            <label>Прочие комментарии/ нюансы, которые должна учитывать команда  </label>
            <TextInput source="Развернутый ответ" resettable/>
    </SimpleForm>
);

