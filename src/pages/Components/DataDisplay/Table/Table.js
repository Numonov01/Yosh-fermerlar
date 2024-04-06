import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Divider,
  Radio,
  Row,
  Table,
  Typography,
  InputNumber,
  Form,
  Input,
  Popconfirm, Switch
} from "antd";
import {
  borderColumns,
  borderData,
  expandableColumns,
  expandableData,
  filterColumns,
  filterData,
} from "./TableData";
import { ellipsistooltipcolumns } from "./TableData";
import { DynamicSettingscolumns } from "./TableData";
//Breadcrumbs
import Breadcrumb from "../../../../Common/Breadcrumb";
import { originData } from "./TableData";
import { ellipsistooltipdata } from "./TableData";
import usecustomStyles from "../../../../Common/customStyles";
const { Text } = Typography;

const customStyles = usecustomStyles();

// rowSelection object indicates the need for row selection

//Selection and operation

const columns2 = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data2 = [];
for (let i = 0; i < 46; i++) {
  data2.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

//Filter in Tree
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: Number(`${i}2`),
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}
const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};
const defaultTitle = () => 'Here is title';
const defaultFooter = () => 'Here is footer';
const UiTable = () => {
  // page title
  document.title = "Table" + process.env.REACT_APP_PAGE_TITLE;

  //selection
  const [selectionType, setSelectionType] = useState("checkbox");

  //Selection and operation
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  //editable rows
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");

  //dynamic settings
  const [bordered, setBordered] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [size, setSize] = useState('large');
  const [expandable, setExpandable] = useState(defaultExpandable);
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showfooter, setShowFooter] = useState(true);
  const [rowSelection1, setRowSelection1] = useState({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState();
  const [top, setTop] = useState('none');
  const [bottom, setBottom] = useState('bottomRight');
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState();

  const isEditing = (record) => record.key === editingKey;

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const edit = (record) => {
    form.setFieldsValue({
      name: "",
      age: "",
      address: "",
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "name",
      dataIndex: "name",
      width: "25%",
      editable: true,
    },
    {
      title: "age",
      dataIndex: "age",
      width: "15%",
      editable: true,
    },
    {
      title: "address",
      dataIndex: "address",
      width: "40%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a href="/#">Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const handleBorderChange = (enable) => {
    setBordered(enable);
  };
  const handleLoadingChange = (enable) => {
    setLoading1(enable);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleTableLayoutChange = (e) => {
    setTableLayout(e.target.value);
  };
  const handleExpandChange = (enable) => {
    setExpandable(enable ? defaultExpandable : undefined);
  };
  const handleEllipsisChange = (enable) => {
    setEllipsis(enable);
  };
  const handleTitleChange = (enable) => {
    setShowTitle(enable);
  };
  const handleHeaderChange = (enable) => {
    setShowHeader(enable);
  };
  const handleFooterChange = (enable) => {
    setShowFooter(enable);
  };
  const handleRowSelectionChange = (enable) => {
    setRowSelection1(enable ? {} : undefined);
  };
  const handleYScrollChange = (enable) => {
    setYScroll(enable);
  };
  const handleXScrollChange = (e) => {
    setXScroll(e.target.value);
  };
  const handleDataChange = (newHasData) => {
    setHasData(newHasData);
  };
  const scroll = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '100vw';
  }
  const tableColumns = DynamicSettingscolumns.map((item) => ({
    ...item,
    ellipsis,
  }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }
  const tableProps = {
    bordered,
    loading1,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    rowSelection1,
    scroll,
    tableLayout,
  };
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb mainTitle="Data Display" pageTitle="Table" />

      <Row gutter={[24]}>
        <Col xs={24} className="gutter-row">
          <Card
            title="Basic Usage"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">Simple table with actions.</Text>
            </p>
            <div style={{ overflowX: 'auto' }}>
              <Table columns={columns} dataSource={data} />
            </div>
          </Card>
        </Col>
        {/* end col */}
        <Col xs={24} className="gutter-row">
          <Card
            title="selection"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                Rows can be selectable by making first column as a selectable
                column. You can use <Text code>rowSelection.type</Text> to set
                selection type. Default is <Text code>checkbox</Text>.
              </Text>
            </p>
            <div>
              <Radio.Group
                onChange={({ target: { value } }) => {
                  setSelectionType(value);
                }}
                value={selectionType}
              >
                <Radio value="checkbox">Checkbox</Radio>
                <Radio value="radio">radio</Radio>
              </Radio.Group>

              <Divider />

              <div style={{ overflowX: 'auto' }}>
                <Table
                  rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                  }}
                  columns={columns}
                  dataSource={data}
                />
              </div>
            </div>
          </Card>
        </Col>
        {/* end col */}
        <Col xs={24} className="gutter-row">
          <Card
            title="Selection and operation"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                To perform operations and clear selections after selecting some
                rows, use <Text code>rowSelection.selectedRowKeys</Text> to
                control selected rows.
              </Text>
            </p>
            <div>
              <div
                style={{
                  marginBottom: 16,
                }}
              >
                <Button
                  type="primary"
                  onClick={start}
                  disabled={!hasSelected}
                  loading={loading}
                >
                  Reload
                </Button>
                <span
                  style={{
                    marginLeft: 8,
                  }}
                >
                  {hasSelected
                    ? `Selected ${selectedRowKeys.length} items`
                    : ""}
                </span>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <Table
                  rowSelection={rowSelection}
                  columns={columns2}
                  dataSource={data2}
                />
              </div>
            </div>
          </Card>
        </Col>
        {/* end col */}
        <Col xs={24} className="gutter-row">
          <Card
            title="Filter in Tree"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                You can use <Text code>filterMode</Text> to change default
                filter interface, options: <Text code>menu</Text>(default) and{" "}
                <Text code>tree</Text>.
              </Text>
            </p>
            <div style={{ overflowX: 'auto' }}>
              <Table
                columns={filterColumns}
                dataSource={filterData}
                onChange={onChange}
              />
            </div>
          </Card>
        </Col>
        {/* end col */}
        <Col xs={24} className="gutter-row">
          <Card
            title="Multiple sorter"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                <Text code>column.sorter</Text> support multiple to config the
                priority of sort columns. Though{" "}
                <Text code>sorter.compare</Text> to customize compare function.
                You can also leave it empty to use the interactive only.
              </Text>
            </p>
            <div style={{ overflowX: 'auto' }}>
              <Table
                columns={filterColumns}
                dataSource={filterData}
                onChange={onChange}
              />
            </div>
          </Card>
        </Col>
        {/* end col */}
        <Col xs={24} className="gutter-row">
          <Card title="size" style={{ marginBottom: customStyles.margin }}>
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                There are two compacted table sizes: <Text code>middle</Text>{" "}
                and <Text code>small</Text>. The <Text code>small</Text> size is
                used in Modals only.
              </Text>
            </p>
            <Divider>Middle size table</Divider>
            <Table columns={columns} dataSource={data} size="middle" />
            <Divider>Small size table</Divider>
            <Table columns={columns} dataSource={data} size="small" />
          </Card>
        </Col>
        {/* end col */}
        <Col xs={24} className="gutter-row">
          <Card
            title="Border, Title and Footer"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                Add border, title and footer for table.
              </Text>
            </p>
            <div style={{ overflowX: 'auto' }}>
              <Table
                columns={borderColumns}
                dataSource={borderData}
                bordered
                title={() => "Header"}
                footer={() => "Footer"}
              />
            </div>
          </Card>
        </Col>
        {/* end col */}
        <Col xs={24} className="gutter-row">
          <Card
            title="Expandable Row"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                When there's too much information to show and the table can't
                display all at once.
              </Text>
            </p>
            <div style={{ overflowX: 'auto' }}>
              <Table
                columns={expandableColumns}
                expandable={{
                  expandedRowRender: (record) => (
                    <p
                      style={{
                        margin: 0,
                      }}
                    >
                      {record.description}
                    </p>
                  ),
                  rowExpandable: (record) => record.name !== "Not Expandable",
                }}
                dataSource={expandableData}
              />
            </div>
          </Card>
        </Col>
        {/* end col */}
        <Col xs={24} className="gutter-row" style={{overflowX: 'auto'}}>
          <Card
            title="Editable Rows"
            style={{ marginBottom: customStyles.margin, overflowX: 'auto' }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">Table with editable rows.</Text>
            </p>

            <Form form={form} component={false}>
              <div style={{overflowX: 'auto'}}>
                <Table
                  components={{
                    body: {
                      cell: EditableCell,
                    },
                  }}
                  bordered
                  dataSource={data}
                  columns={mergedColumns}
                  rowClassName="editable-row"
                  pagination={{
                    onChange: cancel,
                  }}
                />
              </div>
            </Form>
          </Card>
        </Col>
        {/* end col */}

        <Col xs={24} className="gutter-row">
          <Card
            title="Editable Rows"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">ellipsis column custom tooltip</Text>
            </p>
          <div style={{overflowX: 'auto'}}>
            <Table columns={ellipsistooltipcolumns} dataSource={ellipsistooltipdata} />;
            </div>
          </Card>
        </Col>
        {/* end col */}

        <Col xs={24} className="gutter-row">
          <Card
            title="Editable Rows"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">ellipsis column custom tooltip</Text>
            </p>

            <Form
              layout="inline"
              className="components-table-demo-control-bar"
              style={{
                marginBottom: 16, overflowX: 'auto'
              }}
            >
              <Form.Item label="Bordered">
                <Switch checked={bordered} onChange={handleBorderChange} />
              </Form.Item>
              <Form.Item label="loading">
                <Switch checked={loading1} onChange={handleLoadingChange} />
              </Form.Item>
              <Form.Item label="Title">
                <Switch checked={showTitle} onChange={handleTitleChange} />
              </Form.Item>
              <Form.Item label="Column Header">
                <Switch checked={showHeader} onChange={handleHeaderChange} />
              </Form.Item>
              <Form.Item label="Footer">
                <Switch checked={showfooter} onChange={handleFooterChange} />
              </Form.Item>
              <Form.Item label="Expandable">
                <Switch checked={!!expandable} onChange={handleExpandChange} />
              </Form.Item>
              <Form.Item label="Checkbox">
                <Switch checked={!!rowSelection1} onChange={handleRowSelectionChange} />
              </Form.Item>
              <Form.Item label="Fixed Header">
                <Switch checked={!!yScroll} onChange={handleYScrollChange} />
              </Form.Item>
              <Form.Item label="Has Data">
                <Switch checked={!!hasData} onChange={handleDataChange} />
              </Form.Item>
              <Form.Item label="Ellipsis">
                <Switch checked={!!ellipsis} onChange={handleEllipsisChange} />
              </Form.Item>
              <Form.Item label="Size">
                <Radio.Group value={size} onChange={handleSizeChange}>
                  <Radio.Button value="large">Large</Radio.Button>
                  <Radio.Button value="middle">Middle</Radio.Button>
                  <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Table Scroll">
                <Radio.Group value={xScroll} onChange={handleXScrollChange}>
                  <Radio.Button value={undefined}>Unset</Radio.Button>
                  <Radio.Button value="scroll">Scroll</Radio.Button>
                  <Radio.Button value="fixed">Fixed Columns</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Table Layout">
                <Radio.Group value={tableLayout} onChange={handleTableLayoutChange}>
                  <Radio.Button value={undefined}>Unset</Radio.Button>
                  <Radio.Button value="fixed">Fixed</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Pagination Top">
                <Radio.Group
                  value={top}
                  onChange={(e) => {
                    setTop(e.target.value);
                  }}
                >
                  <Radio.Button value="topLeft">TopLeft</Radio.Button>
                  <Radio.Button value="topCenter">TopCenter</Radio.Button>
                  <Radio.Button value="topRight">TopRight</Radio.Button>
                  <Radio.Button value="none">None</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Pagination Bottom">
                <Radio.Group
                  value={bottom}
                  onChange={(e) => {
                    setBottom(e.target.value);
                  }}
                >
                  <Radio.Button value="bottomLeft">BottomLeft</Radio.Button>
                  <Radio.Button value="bottomCenter">BottomCenter</Radio.Button>
                  <Radio.Button value="bottomRight">BottomRight</Radio.Button>
                  <Radio.Button value="none">None</Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Form>
            <div style={{overflowX: 'auto'}}>
            <Table
              {...tableProps}
              pagination={{
                position: [top, bottom],
              }}
              columns={tableColumns}
              dataSource={hasData ? data : []}
              scroll={scroll}
            />
          </div>
          </Card>
        </Col>
        {/* end col */}
      </Row>
      {/* end row */}
    </>
  );
};

export default UiTable;
