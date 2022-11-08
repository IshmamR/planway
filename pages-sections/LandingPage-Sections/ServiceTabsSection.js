import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import { Box, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import styled from "styled-components";

const useStyles = makeStyles(styles);

const Tab = styled.div`
  flex: 1;
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid ${({ active }) => (active ? "#ef6603" : "gray")};
  background-color: ${({ active }) => (active ? "#ef6603" : "white")};
  color: ${({ active }) => (active ? "white" : "#212121")};
  cursor: pointer;
  transition: all 0.2s ease;
  svg {
    font-size: 60px;
  }
  p {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    text-align: left;
  }
  :hover {
    color: ${({ active }) => (active ? "white" : "#ef6603")};
    border-color: #dadada;
  }
`;

export default function ServiceTabsSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const [tab, setTab] = useState(0);

  return (
    <div className={classes.section}>
      {/* <h2 className={classes.title}>Here is our team</h2> */}
      <Box>
        <Box display="flex" gap="1rem" mb={6}>
          <Tab
            active={tab === 0 ? "true" : undefined}
            onClick={() => setTab(0)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7.132 20.737A9.997 9.997 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.997 9.997 0 0 1-5.132 8.737l-.896-1.791a8 8 0 1 0-7.945 0l-.895 1.791zm1.792-3.584a6 6 0 1 1 6.151 0l-.898-1.797a4 4 0 1 0-4.354 0l-.899 1.797zM12 16l3 6H9l3-6z"
              />
            </svg>

            <p>E-Commerce</p>
          </Tab>
          <Tab
            active={tab === 1 ? "true" : undefined}
            onClick={() => setTab(1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 16v4h4v2H2v-6h2zm18 0v6h-6v-2h4v-4h2zM7.5 7a4.502 4.502 0 0 0 3.5 4.389V17h2l.001-5.612A4.502 4.502 0 0 0 16.5 7h2a6.5 6.5 0 0 1-3.499 5.767L15 19H9v-6.232A6.5 6.5 0 0 1 5.5 7h2zM12 5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zM8 2v2l-4-.001V8H2V2h6zm14 0v6h-2V4h-4V2h6z"
              />
            </svg>
            <p>Human Resource Management</p>
          </Tab>
          <Tab
            active={tab === 2 ? "true" : undefined}
            onClick={() => setTab(2)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
              />
            </svg>
            <p>POS</p>
          </Tab>
          <Tab
            active={tab === 3 ? "true" : undefined}
            onClick={() => setTab(3)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21 11.646V21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.354A3.985 3.985 0 0 1 2 9V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6a3.99 3.99 0 0 1-1 2.646zm-2 1.228a4.007 4.007 0 0 1-4-1.228A3.99 3.99 0 0 1 12 13a3.99 3.99 0 0 1-3-1.354a3.99 3.99 0 0 1-4 1.228V20h14v-7.126zM14 9a1 1 0 0 1 2 0a2 2 0 1 0 4 0V4H4v5a2 2 0 1 0 4 0a1 1 0 1 1 2 0a2 2 0 1 0 4 0z"
              />
            </svg>
            <p>Customized Web Application</p>
          </Tab>
        </Box>

        <Box>
          {tab === 0 ? (
            <Box>
              <Box
                display="flex"
                flexDirection={{ xs: "column-reverse", md: "row" }}
                gap={{ xs: 1, md: 2 }}
                justifyContent="space-between"
                mb={2}
              >
                <Box flex={1}>
                  <h3 className={classes.title} style={{ textAlign: "left" }}>
                    Web & e-Commerce
                  </h3>
                  <Typography color="gray" textAlign="left" mb={2}>
                    Our custom tailored web applications and e-Commerce fits
                    with client business needs and increase operational
                    efficiency.Stress-free, hassle-free, easy; the perfect
                    solution to human cost management.
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Inventory Development,Accounts
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Vendor management
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Customer management
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Affiliate management
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Shipping management
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Customize Payment gateway implementation
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Tax management
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Order management
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Money refund management & Others
                  </Typography>
                </Box>
                <Box flex={1}>
                  <img
                    src="/img/features/features-1.png"
                    height="360"
                    width="360"
                  />
                </Box>
              </Box>
            </Box>
          ) : tab === 1 ? (
            <Box>
              <Box
                display="flex"
                flexDirection={{ xs: "column-reverse", md: "row" }}
                gap={{ xs: 1, md: 2 }}
                justifyContent="space-between"
                mb={2}
              >
                <Box flex={1}>
                  <h3 className={classes.title} style={{ textAlign: "left" }}>
                    Human Resource Management System of Planway IT
                  </h3>
                  <Typography color="gray" textAlign="left">
                    LinesPay’s HRM solution can transform your business
                    management. Eliminate stress with one complete, strong
                    solution. Total HR Management from just one unique system.
                  </Typography>
                  <br />
                  <Typography color="gray" textAlign="left" mb={2}>
                    Unite all your employee records steadily & smoothly. Gather
                    vast amounts of data in one central place. Stress-free,
                    hassle-free, easy; the perfect solution to human cost
                    management.
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Employee Management
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Leave & Holiday
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Loan & Advance
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Provident Fund & Gratuity
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Attendance & Time
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Payroll & Tax
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Recruitment & Selection
                  </Typography>
                  <Typography
                    alignItems="center"
                    mb={1}
                    color="gray"
                    textAlign="left"
                  >
                    <DoneAllIcon fontSize="small" color="warning" />
                    &nbsp;Training Management
                  </Typography>
                </Box>
                <Box flex={1}>
                  <img
                    src="/img/features/features-2.png"
                    height="360"
                    width="400"
                  />
                </Box>
              </Box>
            </Box>
          ) : tab === 2 ? (
            <Box>
              <Box
                display="flex"
                flexDirection={{ xs: "column-reverse", md: "row" }}
                gap={{ xs: 1, md: 2 }}
                justifyContent="space-between"
                mb={2}
              >
                <Box flex={1}>
                  <h3 className={classes.title} style={{ textAlign: "left" }}>
                    Informative Dashboard, Quick System Search, Advanced Search
                    on Reports
                  </h3>
                  <Typography color="gray" textAlign="left" mb={2}>
                    PrismPOS dashboard gives a bird's- eye view of the business.
                    Customer count, sale orders, purchase orders, vendors,
                    account summary are some of the many dashboard information.
                  </Typography>
                  <Typography color="gray" textAlign="left" mb={2}>
                    PrismPOS offers global search providing module to module
                    movement at a short period of time
                  </Typography>
                  <Typography color="gray" textAlign="left" mb={2}>
                    Search criteria's are more in-depth and allows to seep into
                    the business operations with one click. Report wise search,
                    date wise search, branch wise search, product wise search,
                    multi product search are some of the search criteria
                  </Typography>
                </Box>
                <Box flex={1}>
                  <img
                    src="/img/features/features-3.png"
                    height="360"
                    width="360"
                  />
                </Box>
              </Box>
            </Box>
          ) : tab === 3 ? (
            <Box>
              <Box
                display="flex"
                flexDirection={{ xs: "column-reverse", md: "row" }}
                gap={{ xs: 1, md: 2 }}
                justifyContent="space-between"
                mb={2}
              >
                <Box flex={1}>
                  <h3 className={classes.title} style={{ textAlign: "left" }}>
                    We can provide any kind of customized web application with
                    your requirement. we have highly experience team to serve
                    you.
                  </h3>
                  <Typography color="gray" textAlign="left" mb={2}>
                    Choose your suitable support package as per your business
                    demand <br />
                    <br />
                    24/7 Customer support is always the first priority for any
                    size of business. Our support team is working continuously
                    to sort out all the critical issues and puts enormous effort
                    in order to satisfy the clients
                  </Typography>
                </Box>
                <Box flex={1}>
                  <img
                    src="/img/features/features-4.png"
                    height="360"
                    width="360"
                  />
                </Box>
              </Box>
            </Box>
          ) : null}
        </Box>
      </Box>
    </div>
  );
}
