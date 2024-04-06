import React from 'react'
import Breadcrumb from '../../../Common/Breadcrumb';
import Mainpage from './Mainpage';

const KanbanBoard = () => {

  document.title = "Kanban Board" + process.env.REACT_APP_PAGE_TITLE;

  return (
    <React.Fragment>

      {/* Breadcrumb */}
      <Breadcrumb mainTitle="Apps" pageTitle="Kanban Board" />

      {/* KanbanBoard */}
      <Mainpage />

    </React.Fragment>
  )
}

export default KanbanBoard