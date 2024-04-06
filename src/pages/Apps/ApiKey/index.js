import React from 'react'
import ApiWidgets from './ApiWidgets'
import Breadcrumb from '../../../Common/Breadcrumb';
import ApiTable from './ApiTable';

const ApiKey = () => {

    document.title = "API Key" + process.env.REACT_APP_PAGE_TITLE;

  return (
    <React.Fragment>

        {/* Breadcrumb */}
        <Breadcrumb mainTitle="Apps" pageTitle="API Key" />

        {/* Widgets */}
        <ApiWidgets />

        {/* Table */}
        <ApiTable />
      
    </React.Fragment>
  )
}

export default ApiKey