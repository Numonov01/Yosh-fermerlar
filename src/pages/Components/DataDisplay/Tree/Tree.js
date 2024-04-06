import React, { useState,useMemo } from "react";
import { Card, Col, Row, Tree, Typography,Select,Switch,Input } from "antd";
import {
  controlledData,
  initTreeData,
  CustomizetreeData,
  Customizecollapseexpand,Treewithline,directoryData
} from "./TreeData";
import { DownOutlined,CheckOutlined } from "@ant-design/icons";

//Breadcrumbs
import Breadcrumb from "../../../../Common/Breadcrumb";
import usecustomStyles from "../../../../Common/customStyles";

const { Text } = Typography;
const { DirectoryTree } = Tree;
const { Search } = Input;

const customStyles = usecustomStyles();


//load data asynchronously
// It's just a simple demo. You can use tree map to optimize update perf.
const updateTreeData = (list, key, children) =>
  list.map((node) => {
    if (node.key === key) {
      return {
        ...node,
        children,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children),
      };
    }
    return node;
  });
  //searchable data
  const x = 3;
const y = 2;
const z = 1;
const defaultData = [];
  const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || defaultData;
    const children = [];
    for (let i = 0; i < x; i++) {
      const key = `${preKey}-${i}`;
      tns.push({
        title: key,
        key,
      });
      if (i < y) {
        children.push(key);
      }
    }
    if (_level < 0) {
      return tns;
    }
    const level = _level - 1;
    children.forEach((key, index) => {
      tns[index].children = [];
      return generateData(level, key, tns[index].children);
    });
  };
  generateData(z);
  const dataList = [];
  const generateList = (data) => {
    for (let i = 0; i < data.length; i++) {
      const node = data[i];
      const { key } = node;
      dataList.push({
        key,
        title: key,
      });
      if (node.children) {
        generateList(node.children);
      }
    }
  };
  generateList(defaultData);
  const getParentKey = (key, tree) => {
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.children) {
        if (node.children.some((item) => item.key === key)) {
          parentKey = node.key;
        } else if (getParentKey(key, node.children)) {
          parentKey = getParentKey(key, node.children);
        }
      }
    }
    return parentKey;
  };

const UiTree = () => {
  // page title
  document.title = "Tree" + process.env.REACT_APP_PAGE_TITLE;

  //basic example
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const onCheck = (checkedKeys, info) => {
    console.log("onCheck", checkedKeys, info);
  };

  //Controlled Tree
  const [expandedKeys2, setExpandedKeys] = useState(["0-0-0", "0-0-1"]);
  const [checkedKeys, setCheckedKeys] = useState(["0-0-0"]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);
  const [showLeafIcon, setShowLeafIcon] = useState(true);
  const onExpand = (expandedKeysValue) => {
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };
  const onCheck2 = (checkedKeysValue) => {
    setCheckedKeys(checkedKeysValue);
  };
  const onSelect2 = (selectedKeysValue, info) => {
    setSelectedKeys(selectedKeysValue);
  };

  //draggable
  const [gData, setGData] = useState(defaultData);
  const [expandedKeys] = useState(["0-0", "0-0-0", "0-0-0-0"]);
  const onDragEnter = (info) => {
    console.log(info);
    // expandedKeys, set it when controlled is needed
    // setExpandedKeys(info.expandedKeys)
  };

  const onDrop = (info) => {
    console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);
    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };
    const data = [...gData];

    // Find dragObject
    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });
    if (!info.dropToGap) {
      // Drop on the content
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
        item.children.unshift(dragObj);
      });
    } else if (
      (info.node.props.children || []).length > 0 &&
      // Has children
      info.node.props.expanded &&
      // Is expanded
      dropPosition === 1 // On the bottom gap
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        // where to insert. New item was inserted to the start of the array in this example, but can be anywhere
        item.children.unshift(dragObj);
        // in previous version, we use item.children.push(dragObj) to insert the
        // item to the tail of the children
      });
    } else {
      let ar = [];
      let i;
      loop(data, dropKey, (_item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }
    setGData(data);
  };

  //load data asynchronously
  const [treeData, setTreeData] = useState(initTreeData);
  const onLoadData = ({ key, children }) =>
    new Promise((resolve) => {
      if (children) {
        resolve();
        return;
      }
      setTimeout(() => {
        setTreeData((origin) =>
          updateTreeData(origin, key, [
            {
              title: "Child Node",
              key: `${key}-0`,
            },
            {
              title: "Child Node",
              key: `${key}-1`,
            },
          ])
        );
        resolve();
      }, 1000);
    });
  const onSelect1 = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const onSelect3 = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  const handleLeafIconChange = (value) => {
    if (value === 'custom') {
      return setShowLeafIcon(<CheckOutlined />);
    }
    if (value === 'true') {
      return setShowLeafIcon(true);
    }
    return setShowLeafIcon(false);
  };
  const onSelect4 = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };
  const onExpand4 = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };
  const dig = (path = '0', level = 3) => {
    const list = [];
    for (let i = 0; i < 10; i += 1) {
      const key = `${path}-${i}`;
      const treeNode = {
        title: key,
        key,
      };
      if (level > 0) {
        treeNode.children = dig(key, level - 1);
      }
      list.push(treeNode);
    }
    return list;
  };
  const VirtualscrollData = dig();
  //Searchable tree
  const [expandedKeys6, setExpandedKeys6] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [autoExpandParent6, setAutoExpandParent6] = useState(true);

  const onExpandSearch = (newExpandedKeys) => {
    setExpandedKeys6(newExpandedKeys);
    setAutoExpandParent6(false);
  };
  const onChange = (e) => {
    const { value } = e.target;
    const newExpandedKeys = dataList
      .map((item) => {
        if (item.title.indexOf(value) > -1) {
          return getParentKey(item.key, defaultData);
        }
        return null;
      })
      .filter((item, i, self) => item && self.indexOf(item) === i);
      setExpandedKeys6(newExpandedKeys);
    setSearchValue(value);
    setAutoExpandParent6(true);
  };
  const SearchtreeData = useMemo(() => {
    const loop = (data) =>
      data.map((item) => {
        const strTitle = item.title;
        const index = strTitle.indexOf(searchValue);
        const beforeStr = strTitle.substring(0, index);
        const afterStr = strTitle.slice(index + searchValue.length);
        const title =
          index > -1 ? (
            <span>
              {beforeStr}
              <span className="site-tree-search-value">{searchValue}</span>
              {afterStr}
            </span>
          ) : (
            <span>{strTitle}</span>
          );
        if (item.children) {
          return {
            title,
            key: item.key,
            children: loop(item.children),
          };
        }
        return {
          title,
          key: item.key,
        };
      });
    return loop(defaultData);
  }, [searchValue]);

  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb mainTitle="Data Display" pageTitle="Tree" />

      <Row gutter={[24]}>
        <Col span={24} xl={12} className="gutter-row">
          <Card
            title="Basic Example"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                The most basic usage, tell you how to use checkable, selectable,
                disabled, defaultExpandKeys, and etc.
              </Text>
            </p>
            <Tree
              checkable
              defaultExpandedKeys={["0-0-0", "0-0-1"]}
              defaultSelectedKeys={["0-0-0", "0-0-1"]}
              defaultCheckedKeys={["0-0-0", "0-0-1"]}
              onSelect={onSelect}
              onCheck={onCheck}
              treeData={treeData}
            />
          </Card>
          <Card
            title="Draggable"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                Drag treeNode to insert after the other treeNode or insert into
                the other parent TreeNode.
              </Text>
            </p>
            <Tree
              className="draggable-tree"
              defaultExpandedKeys={expandedKeys2}
              draggable
              blockNode
              onDragEnter={onDragEnter}
              onDrop={onDrop}
              treeData={gData}
            />
          </Card>
          <Card
            title="Searchable"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">Searchable Tree.</Text>
            </p>
            <Search
        style={{
          marginBottom: 8,
        }}
        placeholder="Search"
        onChange={onChange}
      />
      <Tree
        onExpand={onExpandSearch}
        expandedKeys={expandedKeys6}
        autoExpandParent={autoExpandParent6}
        treeData={SearchtreeData}
      />
          </Card>
        </Col>
        {/* end col */}
        <Col span={24} xl={12} className="gutter-row">
          <Card
            title="Controlled Tree"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                Controlled mode lets parent nodes reflect the status of child
                nodes more intelligently.
              </Text>
            </p>
            <Tree
              checkable
              onExpand={onExpand}
              expandedKeys={expandedKeys}
              autoExpandParent={autoExpandParent}
              onCheck={onCheck2}
              checkedKeys={checkedKeys}
              onSelect={onSelect2}
              selectedKeys={selectedKeys}
              treeData={controlledData}
            />
          </Card>
          <Card
            title="Load Data Asynchronously"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                To load data asynchronously when click to expand a treeNode.
              </Text>
            </p>
            <Tree loadData={onLoadData} treeData={treeData} />
          </Card>

          <Card
            title="directory"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
              Built-in directory tree. multiple support ctrl(Windows) / command(Mac) selection.
              </Text>
            </p>
            <DirectoryTree
      multiple
      defaultExpandAll
      onSelect={onSelect4}
      onExpand={onExpand4}
      treeData={directoryData}
    />
            </Card>

            <Card
            title="Virtual scroll"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
              Use virtual list through height prop.
              </Text>
            </p>
            <Tree treeData={VirtualscrollData} height={233} defaultExpandAll />
            </Card>
        </Col>
        {/* end col */}

        <Col span={24} xl={12} className="gutter-row">
          <Card
            title="Customize Icon"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                You can customize icons for different nodes.
              </Text>
            </p>

            <Tree
              showIcon
              defaultExpandAll
              defaultSelectedKeys={["0-0-0"]}
              switcherIcon={<DownOutlined />}
              treeData={CustomizetreeData}
            />
          </Card>

          <Card
            title="Customize collapse/expand icon"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                customize collapse/expand icon of tree node
              </Text>
            </p>
            <Tree
              showLine
              switcherIcon={<DownOutlined />}
              defaultExpandedKeys={["0-0-0"]}
              onSelect={onSelect1}
              treeData={Customizecollapseexpand}
            />
          </Card>
        </Col>
        {/* end col */}

        <Col span={24} xl={12} className="gutter-row">
          <Card
            title="Tree with line"
            style={{ marginBottom: customStyles.margin }}
          >
            <p style={{ marginBottom: customStyles.marginXS }}>
              <Text type="secondary">
                Tree with connected line between nodes, turn on by showLine,
                customize the preset icon by
              </Text>
            </p>
            <div
              style={{
                marginBottom: 16,
              }}
            >
              showLine: <Switch checked={!!showLine} onChange={setShowLine} />
              <br />
              <br />
              showIcon: <Switch checked={showIcon} onChange={setShowIcon} />
              <br />
              <br />
              showLeafIcon:{" "}
              <Select defaultValue="true" onChange={handleLeafIconChange}>
                <Select.Option value="true">True</Select.Option>
                <Select.Option value="false">False</Select.Option>
                <Select.Option value="custom">Custom icon</Select.Option>
              </Select>
            </div>
            <Tree
              showLine={
                showLine
                  ? {
                      showLeafIcon,
                    }
                  : false
              }
              showIcon={showIcon}
              defaultExpandedKeys={["0-0-0"]}
              onSelect={onSelect3}
              treeData={Treewithline}
            />
          </Card>
        </Col>
      </Row>
      {/* end row */}
    </>
  );
};

export default UiTree;
