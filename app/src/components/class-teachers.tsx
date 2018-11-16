import * as React from "react";
import { Modal, Tag } from "antd";

export class ViewTeachers extends React.Component<any, any> {
  public renderTeachers = (groups: any) => {
    console.log(groups);
    const list = groups.map((teacher: any, index: number) => {
      return <Tag key={index}>{teacher.name}</Tag>;
    });
    return <div>{list}</div>;
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
        <div>{this.renderTeachers(groups)}</div>
      </Modal>
    );
  }
}
