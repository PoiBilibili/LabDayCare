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
            {getFieldDecorator("date", {
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
    public add() {
      const { form, sid, refresh } = this.props;
      form.validateFields((err: any, values: any) => {
        console.log(values);

        const obj = {
          date: values.date.format("MM/DD/YYYY"),
          sid,
          type: values.name
        };

        Request.post("/addImmunization", obj).then((res: any) => {
          refresh();
        });
      });
    }

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
            })(<DatePicker />)}
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
        return (
          <div>
            {record.registList.map((tag: any) => (
              <Tag color="blue" key={tag.date}>
                {tag.date}
              </Tag>
            ))}

            <a onClick={() => this.showRADModal(record.id)}>reg</a>
          </div>
        );
      }
    },
    {
      title: "Immunization",
      render: (text: string, record: any) => (
        <a onClick={() => this.showModal(record.immunizationList, record.id)}>
          view
        </a>
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

  private formRAForm: any;

  public constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      visible: false,
      visibleRAD: false,
      immuData: [],
      currID: 0
    };
  }

  public componentDidMount() {
    Request.get("/students").then((res: any) => {
      this.setState({ data: res.data });
    });
  }

  refresh = () => {
    Request.get("/students").then((res: any) => {
      this.setState({ data: res.data });
    });
  };

  public showModal(immuData: any, currID: string) {
    this.setState({ visible: true, immuData, currID });
  }

  public onCancel() {
    this.setState({ visible: false });
  }

  public onRADCancel() {
    this.setState({ visibleRAD: false });
  }

  public showRADModal(currID: string) {
    this.setState({ visibleRAD: true, currID });
  }

  public onRADCreate() {
    const form = this.formRAForm.props.form;
    form.validateFields((err: any, values: any) => {
      if (err) {
        return;
      }
      const obj = {
        date: values.date.format("MM/DD/YYYY"),
        sid: this.state.currID
      };
      Request.post("/addRegistration", obj).then(res => {
        this.refresh();
        form.resetFields();
        this.setState({ visibleRAD: false });
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
          <ImmuAddForm sid={this.state.currID} refresh={this.refresh} />

          <Table
            columns={this.immuColumns}
            dataSource={this.state.immuData}
            rowKey="name"
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
