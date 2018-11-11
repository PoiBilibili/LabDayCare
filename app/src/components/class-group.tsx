import * as React from "react";
import { Modal, List } from "antd";

export class ViewGroup extends React.Component<any, any> {
  public renderStudents = (groups: any) => {
    const list = [];

    for (let key in groups) {
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
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
    );
  };

  render() {
    const { visible, onCancel, groups } = this.props;
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
