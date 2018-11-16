import * as React from "react";
import { Form, Modal, Input } from "antd";
const FormItem = Form.Item;


export const AddTeacherForm = Form.create()(
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
          title="Assign specified teacher to classroom"
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

            <FormItem label="Teacher Name" {...this.formItemLayout}>
              {getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: "Please input the name of teacher!"
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