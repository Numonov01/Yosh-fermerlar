import React, { useState } from 'react'
import Breadcrumb from '../../../Common/Breadcrumb'
import { Button, Card, Input, Row, message } from 'antd'
import CopyToClipboard from 'react-copy-to-clipboard'
import usecustomStyles from '../../../Common/customStyles'

const customStyles = usecustomStyles();

const ClipBoard = () => {

    document.title = "Clip Board" + process.env.REACT_APP_PAGE_TITLE;

    const [value, setValue] = useState('');
    const [copied, setCopied] = useState(false);

    const handleInputChange = (e) => {
        setValue(e.target.value);
        setCopied(false);
    };

    const handleCopyToClipboard = () => {
        setCopied(true);
        message.success('Copied.');
    };

    return (
        <React.Fragment>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Plugins" pageTitle="Clip Board" />

            {/* Date */}
            <Row>
                <Card title="React copy to clipboard" style={{ marginBottom: customStyles.margin }}>
                    <div>
                        <Input
                            value={value}
                            onChange={handleInputChange}
                            style={{ marginBottom: customStyles.margin }}
                        />

                        <CopyToClipboard text={value} onCopy={handleCopyToClipboard} style={{ marginRight: customStyles.margin }}>
                            <span>Copy to clipboard with span</span>
                        </CopyToClipboard>

                        <CopyToClipboard text={value} onCopy={handleCopyToClipboard}>
                            <Button>Copy to clipboard with button</Button>
                        </CopyToClipboard>
                        {copied ? <span style={{ color: 'red' }}>Copied.</span> : null}
                    </div>
                </Card>
            </Row>
        </React.Fragment>
    )
}

export default ClipBoard