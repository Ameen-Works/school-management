import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [componentClicked, setComponentClicked] = useState(false);
  const [utilityClicked, setUtilityClicked] = useState(false);
  const [pagesClicked, setPagesClicked] = useState(false);

  let handleComponentCollapse = () => {
    setComponentClicked(!componentClicked);
    setPagesClicked(false);
    setUtilityClicked(false);
  };

  let handlePagesCollapse = () => {
    setPagesClicked(!pagesClicked);
    setUtilityClicked(false);
    setComponentClicked(false);
  };

  let handleUtilityCollapse = () => {
    setUtilityClicked(!utilityClicked);
    setPagesClicked(false);
    setComponentClicked(false);
  };
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand -->*/}
      <a
        class="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div class="sidebar-brand-icon rotate-n-15">
          <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      {/* <!-- Divider -->*/}
      <hr class="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard -->*/}
      <li class="nav-item active">
        <a
          class="nav-link"
          onClick={() => {
            navigate("/");
          }}
        >
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      {/* <!-- Divider -->*/}
      <hr class="sidebar-divider" />

      {/* <!-- Heading -->*/}
      <div class="sidebar-heading">Interface</div>

      {/* <!-- Nav Item - Pages Collapse Menu -->*/}
      <li class="nav-item">
        <a
          onClick={handleComponentCollapse}
          class={componentClicked ? "nav-link" : "nav-link collapsed"}
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded={componentClicked ? "true" : "false"}
          aria-controls="collapseTwo"
        >
          <i class="fas fa-fw fa-cog"></i>
          <span>School Management</span>
        </a>
        <div
          id="collapseTwo"
          class={componentClicked ? "collapse show" : "collapse"}
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Custom Components:</h6>
            <a class="collapse-item" onClick={() => navigate("/students-list")}>
              Students List
            </a>
            <a class="collapse-item" onClick={() => navigate("/teachers-list")}>
              Teachers List
            </a>
          </div>
        </div>
      </li>

      {/* <!-- Divider -->*/}
      <hr class="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) -->*/}
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
}

export default Sidebar;
