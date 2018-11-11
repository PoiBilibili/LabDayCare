import * as React from "react";
import { Form, Modal, InputNumber, Input } from "antd";
const FormItem = Form.Item;

export const CollectionCreateForm = Form.create()(
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