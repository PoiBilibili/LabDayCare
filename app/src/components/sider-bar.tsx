import * as React from "react";

import { inject, observer } from "mobx-react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class SideBar extends React.Component {
  handleClick = (e: any) => {
    console.log("click ", e);
  };

  render() {
    return (
      <div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">
              <Link to="/" style={{ color: "#eee" }}>
                Roster
              </Link>
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="team" />
            <span className="nav-text">
              <Link to="/classrooms" style={{ color: "#eee" }}>
                ClassRooms
              </Link>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
