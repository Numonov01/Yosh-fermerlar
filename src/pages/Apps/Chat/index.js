import React from 'react'
import Breadcrumb from '../../../Common/Breadcrumb'
import SidebarChat from './SidebarChat'

const ChatPage = () => {

    document.title = "Chat" + process.env.REACT_APP_PAGE_TITLE;

    return (
        <React.Fragment>
            {/* Breadcrumb */}
            <Breadcrumb mainTitle="Apps" pageTitle="Chat" />

            <div className="gap-1 p-1 mb-3" style={{ marginBottom: "20px" }}>

                <SidebarChat />

            </div>
        </React.Fragment>
    )
}

export default ChatPage