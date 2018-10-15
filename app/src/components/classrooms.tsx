import * as React from "react";

import { inject, observer } from "mobx-react";
import { Table, Button, Modal, Form, Input, InputNumber, List } from "antd";
import { Request } from "./utils";
import * as querystring from "querystring";

const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
  class extends React.Component<any, any> {
    private formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 }
    };

    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new classroom"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="horizontal">
            <FormItem label="Name" {...this.formItemLayout}>
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Please input the name of classroom!"
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="Groupsize" {...this.formItemLayout}>
              {getFieldDecorator("groupsize")(
                <InputNumber min={1} max={100} style={{ width: "76%" }} />
              )}
            </FormItem>
            <FormItem label="Maxgroup" {...this.formItemLayout}>
              {getFieldDecorator("maxgroup")(
                <InputNumber min={1} max={100} style={{ width: "76%" }} />
              )}
            </FormItem>
            <FormItem label="Minage" {...this.formItemLayout}>
              {getFieldDecorator("minage")(
                <InputNumber min={1} max={100} style={{ width: "76%" }} />
              )}
            </FormItem>
            <FormItem label="Maxage" {...this.formItemLayout}>
              {getFieldDecorator("maxage")(
                <InputNumber min={1} max={100} style={{ width: "76%" }} />
              )}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

const AddStudentForm = Form.create()(
  class extends React.Component<any, any> {
    private formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 10 }
    };

    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Modal
          visible={visible}
          title="Assign specify student to classroom"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="horizontal">
            <FormItem label="Classroom Name" {...this.formItemLayout}>
              {getFieldDecorator("cid", {
                rules: [
                  {
                    required: true,
                    message: "Please input the name of classroom!"
                  }
                ]
              })(<Input />)}
            </FormItem>

            <FormItem label="Student ID" {...this.formItemLayout}>
              {getFieldDecorator("sid", {
                rules: [
                  {
                    required: true,
                    message: "Please input the id of student!"
                  }
                ]
              })(<Input />)}
            </FormItem>

          </Form>
        </Modal>
      );
    }
  }
);

const ViewGroup = Form.create()(
  class extends React.Component<any, any> {
    private formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 10 }
    };
    private columns = [
      {
        title: "Group ID",
        render: (text: string, record: any, index: number) => "group" + index
      },
      {
        title: "Students",
        render: (names: any) => names.join(",")
      }
    ];

    public componentDidMount() {}

    public renderStudents = (groups: any) => {
      const list = [];

      for (let key in groups) {
        console.log();
        const students = groups[key].students;
        const title = `Group${+key + 1}`;
        let description = "";
        for (let v of students) {
          description += v.name + ", ";
        }
        description = description.slice(0, -2);
        list.push({
          title,
          description
        });
      }

      return (
        <List
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item: any) => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      );
    };

    render() {
      const { visible, onCancel, groups } = this.props;
      console.log(groups, "+++++");

      return (
        <Modal
          visible={visible}
          title="View groups"
          okText="Close"
          onOk={onCancel}
          onCancel={onCancel}
        >
          <div>{this.renderStudents(groups)}</div>
        </Modal>
      );
    }
  }
);

export default class ClassRoom extends React.Component<any, any> {
  private columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name)
    },
    {
      title: "Age(months)",
      dataIndex: "minAge",
      render: (text: string, record: any) =>
        record.minAge + " - " + record.maxAge
    },
    {
      title: "Groupsize",
      dataIndex: "groupsize",
      sorter: (a: any, b: any) => {
        return a.groupsize - b.groupsize;
      }
    },
    {
      title: "Maxgroup",
      dataIndex: "capacity",
      sorter: (a: any, b: any) => {
        return a.capacity - b.capacity;
      }
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "capacity",
      render: (text: string, record: any) => (
        <span>
          <a onClick={() => this.setGroups(record.groups)}>View group</a>
        </span>
      )
    }
  ];
  private formRef: any = null;
  private formASFRef: any = null;
  public constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      visible: false,
      visibleASF: false,
      currentGroups: [],
      visibleGroups: false
    };
  }

  public componentDidMount() {
    Request.get("/classrooms").then((res: any) => {
      this.setState({ data: res.data });
    });
  }

  public refresh() {
    Request.get("/classrooms").then((res: any) => {
      this.setState({ data: res.data });
    });
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  saveFormRef = (formRef: any) => {
    this.formRef = formRef;
  };

  saveASFFormRef = (formRef: any) => {
    this.formASFRef = formRef;
  };
  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err: any, values: any) => {
      if (err) {
        return;
      }

      Request.post("/classrooms", values).then(res => {
        this.refresh();
        form.resetFields();
        this.setState({ visible: false });
      });
    });
  };

  handleASFCreate = () => {
    const form = this.formASFRef.props.form;
    form.validateFields((err: any, values: any) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
      Request.post(`/addstudent?${querystring.stringify(values)}`, {}).then(
        res => {
          console.log(res);
          this.refresh();
          form.resetFields();
          this.setState({ visible: false });
        }
      );
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleASFCancel = () => {
    this.setState({ visibleASF: false });
  };

  showASFModal = () => {
    this.setState({ visibleASF: true });
  };

  setGroups = (groups: any) => {
    this.setState({ currentGroups: groups, visibleGroups: true });
  };

  handleGroupsCancel = () => {
    this.setState({ visibleGroups: false });
  };

  render() {
    return (
      <div>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />

        <AddStudentForm
          wrappedComponentRef={this.saveASFFormRef}
          visible={this.state.visibleASF}
          onCancel={this.handleASFCancel}
          onCreate={this.handleASFCreate}
        />

        <ViewGroup
          groups={this.state.currentGroups}
          visible={this.state.visibleGroups}
          onCancel={this.handleGroupsCancel}
        />

        <div style={{ marginBottom: "16px" }}>
          <Button onClick={this.showModal} style={{ marginRight: "16px" }}>
            Add
          </Button>
          <Button onClick={this.showASFModal}>Add Student</Button>
        </div>

        <Table
          columns={this.columns}
          dataSource={this.state.data}
          rowKey="name"
        />
      </div>
    );
  }
}
