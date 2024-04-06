import { Button } from 'antd';
import { styled } from 'styled-components';
import { lighten } from 'polished';
import usecustomStyles from './customStyles';

const customStyles = usecustomStyles();     

const StyleSuccessButton = styled(Button)`
    &.ant-btn-success {
        color: white;
        background: ${customStyles.colorSuccess};
        &:hover {
            background: ${lighten(0.05, customStyles.colorSuccess)};
        }
    }

    &.ant-btn-default {
        color: ${customStyles.colorSuccess};
        border-color: ${customStyles.colorSuccess};
        &:is(:not(:disabled):not(.ant-btn-disabled)):is(:hover,:active) { 
            color: ${lighten(0.1, customStyles.colorSuccess)};
            border-color: ${lighten(0.1, customStyles.colorSuccess)};
        }
    }
    &.ant-btn-dashed {
        color: ${customStyles.colorSuccess};
        border-color: ${customStyles.colorSuccess};
        &:is(:not(:disabled):not(.ant-btn-disabled)):is(:hover,:active) { 
            color: ${lighten(0.1, customStyles.colorSuccess)};
            border-color: ${lighten(0.1, customStyles.colorSuccess)};
        }
    }

    &.ant-btn-text {
        color: ${customStyles.colorSuccess};
        &:is(:not(:disabled):not(.ant-btn-disabled)):is(:hover,:active) { 
            color: ${lighten(0.1, customStyles.colorSuccess)};
            background-color: ${customStyles.colorSuccessBg};
        }
    }

    &.ant-btn-link{
        color: ${customStyles.colorSuccess};
        &:is(:not(:disabled):not(.ant-btn-disabled)):is(:hover,:active) {
            color: ${lighten(0.1, customStyles.colorSuccess)};
        }
    }
  `;

const StyleWarningButton = styled(Button)`
    &.ant-btn-info {
        color: white;
        background: ${customStyles.colorWarning};
        &:hover {
            background: ${lighten(0.05, customStyles.colorWarning)};
        }
    }

    &.ant-btn-default {
        color: ${customStyles.colorWarning};
        border-color: ${customStyles.colorWarning};
        &:is(:not(:disabled):not(.ant-btn-disabled)):is(:hover,:active) { 
            color: ${lighten(0.1, customStyles.colorWarning)};
            border-color: ${lighten(0.1, customStyles.colorWarning)};
        }
    }
    &.ant-btn-dashed {
        color: ${customStyles.colorWarning};
        border-color: ${customStyles.colorWarning};
        &:is(:not(:disabled):not(.ant-btn-disabled)):is(:hover,:active) { 
            color: ${lighten(0.1, customStyles.colorWarning)};
            border-color: ${lighten(0.1, customStyles.colorWarning)};
        }
    }

    &.ant-btn-text {
        color: ${customStyles.colorWarning};
        &:is(:not(:disabled):not(.ant-btn-disabled)):is(:hover,:active) { 
            color: ${lighten(0.1, customStyles.colorWarning)};
            background-color: ${customStyles.colorWarningBg};
        }
    }

    &.ant-btn-link{
        color: ${customStyles.colorWarning};
        &:is(:not(:disabled):not(.ant-btn-disabled)):is(:hover,:active) {
            color: ${lighten(0.1, customStyles.colorWarning)};
        }
    }
`;

export { StyleSuccessButton, StyleWarningButton };