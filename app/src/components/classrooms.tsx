import * as React from "react";

import { inject, observer } from "mobx-react";
import { Table, Button } from "antd";
import { Request } from "./utils";
import * as querystring from "querystring";
import { CollectionCreateForm } from "./class-form";
import { AddStudentForm } from "./class-student-form";
import { AddTeacherForm } from "./class-teacher-form";
import { ViewTeachers } from "./class-teachers";


import { ViewGroup } from "./class-group";

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

          <a onClick={() => this.viewTeachers(record.teacherList)}>View teachers</a>
        </span>
      )
    }
  ];
  private formRef: any = null;
  private formASFRef: any = null;
  private formATFRef: any = null;
  public constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      visible: false,
      visibleASF: false,
      visibleATF: false,
      currentGroups: [],
      visibleGroups: false,
      currentTeachers: [],
      visibleTeachers: false,
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

  saveATFFormRef = (formRef: any) => {
    this.formATFRef = formRef;
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
      console.log(values)

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

  handleATFCreate = () => {
    const form = this.formATFRef.props.form;
    form.validateFields((err: any, values: any) => {
      if (err) {
        return;
      }

      Request.post(`/addteacher?${querystring.stringify(values)}`, {}).then(
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

  handleATFCancel = () => {
    this.setState({ visibleATF: false });
  };

  handleTeachersCancel = () =>{
    this.setState({ visibleTeachers: false });
  }

  showASFModal = () => {
    this.setState({ visibleASF: true });
  };

  showATFModal = () => {
    this.setState({ visibleATF: true });
  };

  setGroups = (groups: any) => {
    this.setState({ currentGroups: groups, visibleGroups: true });
  };

  viewTeachers = (teachers: any) =>{
    this.setState({ currentTeachers: teachers, visibleTeachers: true });
  }

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

        <AddTeacherForm
          wrappedComponentRef={this.saveATFFormRef}
          visible={this.state.visibleATF}
          onCancel={this.handleATFCancel}
          onCreate={this.handleATFCreate}
        />

        <ViewGroup
          groups={this.state.currentGroups}
          visible={this.state.visibleGroups}
          onCancel={this.handleGroupsCancel}
        />

        <ViewTeachers
          groups={this.state.currentTeachers}
          visible={this.state.visibleTeachers}
          onCancel={this.handleTeachersCancel}
        />

        <div style={{ marginBottom: "16px" }}>
          <Button onClick={this.showModal} style={{ marginRight: "16px" }}>
            Create
          </Button>
          <Button onClick={this.showASFModal} style={{ marginRight: "16px" }}>
            Add Student
          </Button>
          <Button onClick={this.showATFModal}>Add Teacher</Button>
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
