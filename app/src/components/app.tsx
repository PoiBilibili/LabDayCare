// import createBrowserHistory from "history/createBrowserHistory";

import { observable } from "mobx";
import { observer } from "mobx-react";
import { Layout } from "antd";
import * as React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Students from "./students";
import ClassRooms from "./classrooms";
import SideBar from "./sider-bar";
const { Header, Sider, Content } = Layout;

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Router>
        <div>
          <Layout className="app">
            <Sider
              style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0
              }}
            >
              <h3
                style={{ color: "#fff", marginLeft: "24px", marginTop: "24px" }}
              >
                CSYE6200
              </h3>
              <SideBar />
            </Sider>

            <Layout style={{ marginLeft: 200 }}>
              <Header style={{ background: "#fff", padding: 0 }} />
              <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  background: "#fff",
                  minHeight: 280
                }}
              >
                <Route exact={true} path="/" component={Students} />
                <Route exact={true} path="/classrooms" component={ClassRooms} />
              </Content>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}
