import * as React from "react";

import { Table, Modal, Form, Input, DatePicker, Button, Tag } from "antd";
import { Request } from "./utils";
const FormItem = Form.Item;

const RegAddForm = Form.create()(
  class extends React.Component<any, any> {
    public onChange() {
      console.log("RegAddForm");
    }
    render() {
      const { form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Form layout="inline" style={{ marginBottom: "12px" }}>
          <FormItem>
            {getFieldDecorator("Date", {
              rules: [
                {
                  required: true,
                  message: "Please choose date"
                }
              ]
            })(<DatePicker onChange={() => this.onChange()} />)}
          </FormItem>
        </Form>
      );
    }
  }
);

const ImmuAddForm = Form.create()(
  class extends React.Component<any, any> {
    public onChange() {
      console.log(111);
    }

    public add() {}

    render() {
      const { form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Form layout="inline" style={{ marginBottom: "12px" }}>
          <FormItem>
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Please input the name of classroom!"
                }
              ]
            })(<Input placeholder="Name" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator("date", {
              rules: [
                {
                  required: true,
                  message: "Please input the date of immunization!"
                }
              ]
            })(<DatePicker onChange={() => this.onChange()} />)}
          </FormItem>
          <FormItem>
            <Button type="primary" onClick={() => this.add()}>
              Add
            </Button>
          </FormItem>
        </Form>
      );
    }
  }
);

export default class Students extends React.Component<any, any> {
  private columns = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: (a: any, b: any) => {
        return a.id - b.id;
      }
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string) => <a href="javascript:;">{text}</a>,
      sorter: (a: any, b: any) => a.name.localeCompare(b.name)
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a: any, b: any) => {
        return a.age - b.age;
      }
    },
    {
      title: "Reg",
      dataIndex: "reg",
      render: (text: string, record: any) => {
        const tags = record.registList.map((tag: string) => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ));
        return (
          <span>
            {tags}
            <a onClick={() => this.showRADModal()}>reg</a>
          </span>
        );
      }
    },
    {
      title: "Immunization",
      render: (text: string, record: any) => (
        <a onClick={() => this.showModal(record.immunizationList)}>view</a>
      ),
      width: 150
    }
  ];

  private immuColumns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name)
    },
    {
      title: "Date",
      dataIndex: "date"
    }
  ];

  private formRAForm:any;

  public constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      visible: false,
      visibleRAD: false,
      immuData: []
    };
  }

  public componentDidMount() {
    Request.get("/students").then((res: any) => {
      this.setState({ data: res.data });
    });
  }

  public refresh(){
    Request.get("/students").then((res: any) => {
      this.setState({ data: res.data });
    });
  }

  public showModal(immuData: any) {
    this.setState({ visible: true, immuData });
  }

  public onCancel() {
    this.setState({ visible: false });
  }

  public onRADCancel() {
    this.setState({ visibleRAD: false });
  }

  public showRADModal() {
    this.setState({ visibleRAD: true });
  }

  public onRADCreate() {
    const form = this.formRAForm.props.form;
    form.validateFields((err: any, values: any) => {
      if (err) {
        return;
      }

      Request.post("/addRegistration", values).then(res => {
        this.refresh();
        form.resetFields();
        this.setState({ visible: false });
      });
    });
  }

  saveRAFFormRef = (formRef: any) => {
    this.formRAForm = formRef;
  };

  render() {
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={this.state.data}
          rowKey="id"
        />
        <Modal
          visible={this.state.visible}
          title="Immunization"
          okText="Done"
          onCancel={this.onCancel.bind(this)}
          onOk={this.onCancel.bind(this)}
        >
          <ImmuAddForm />

          <Table
            columns={this.immuColumns}
            dataSource={this.state.immuData}
            rowKey="id"
          />
        </Modal>

        <Modal
          visible={this.state.visibleRAD}
          title="Registrations"
          okText="Enroll"
          onCancel={this.onRADCancel.bind(this)}
          onOk={this.onRADCreate.bind(this)}
        >
          <RegAddForm wrappedComponentRef={this.saveRAFFormRef} />
        </Modal>
      </div>
    );
  }
}
