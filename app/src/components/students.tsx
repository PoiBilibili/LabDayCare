import * as React from "react";

import { inject, observer } from "mobx-react";
import { Table } from "antd";
import {Request} from "./utils"

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
      sorter: (a: any, b: any) => {
        return a.name - b.name;
      }
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a: any, b: any) => {
        return a.age - b.age;
      }
    }
  ];

  public constructor(props: any) {
    super(props);
    this.state = {
      data: [
        {
          id: "1",
          name: "John Brown",
          age: 32
        },
        {
          id: "2",
          name: "Jim Green",
          age: 42
        },
        {
          id: "3",
          name: "Joe Black",
          age: 32
        },
        {
          id: "4",
          name: "Disabled User",
          age: 99
        }
      ]
    };
  }

  public componentDidMount() {
    Request.get("/students").then((res: any) => {
      this.setState({ data: res.data });
    });
  }

  render() {
    return (
      <Table columns={this.columns} dataSource={this.state.data} rowKey="id" />
    );
  }
}
