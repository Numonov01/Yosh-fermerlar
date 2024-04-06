import React from 'react'
import Breadcrumb from '../../../Common/Breadcrumb';
import SidebarTodo from './Sidebar';
import TodoTable from './TodoTable';
import { Row } from 'antd';

const Todo = () => {

  document.title = "To Do" + process.env.REACT_APP_PAGE_TITLE;

  return (
    <React.Fragment>

      {/* Breadcrumb */}
      <Breadcrumb mainTitle="Apps" pageTitle="Todo" />

      <Row gutter={[16, 24]}>
        <SidebarTodo />

        <TodoTable />
      </Row>

    </React.Fragment>
  )
}

export default Todo