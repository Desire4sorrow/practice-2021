import * as React from 'react';
import { VisibilityOff } from '@material-ui/icons';
import { BulkUpdateButton } from 'react-admin';

const views = { views: 0 };

const ResetViewsButton = (props) => (
    <BulkUpdateButton
        {...props}
        label="Reset Views"
        data={views}
        icon={<VisibilityOff/>}
        mutationMode="pessimistic"
    />
);

export default ResetViewsButton;