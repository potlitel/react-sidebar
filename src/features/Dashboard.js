import { Typography } from "../components/shared/Typography";
// import { Grid, Row, Col } from "react-flexbox-grid";
import TaskProfile from "../components/shared/TaskProfile";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
// import Stack from "@mui/material/Stack";
const Dashboard = () => {
  return (
    <div style={{ padding: "16px 24px", color: "#44596e" }}>
      <div style={{ marginBottom: "48px" }}>
        <Typography variant="h4" fontWeight={600}>
          Dashboard - React Pro Sidebar
        </Typography>
        <Typography variant="body2">
          React Pro Sidebar provides a set of components for creating high level
          and customizable side navigation
        </Typography>
        {/* <PackageBadges /> */}
      </div>
      <div style={{ width: "100%" }}>
        {/* <Grid
          container
          spacing={0}
          align="center"
          justify="center"
          direction="column"
          style={{ backgroundColor: "teal" }}
        >
          <Grid item direction="column" style={{ backgroundColor: "yellow" }}>
            <h2>
              This grid item is centered both horizontally and vertically.
            </h2>
            <i>
              <p>
                Note the styling of body, html and #root in index.css for this
                to work.
              </p>
              <p>
                Thanks to <a href="https://codesandbox.io/s/gLE85V2D">STUNAZ</a>{" "}
                for improving upon my original!
              </p>
            </i>
          </Grid>
          <Grid item direction="column" style={{ backgroundColor: "yellow" }}>
            <h2>
              This grid item is centered both horizontally and vertically.
            </h2>
            <i>
              <p>
                Note the styling of body, html and #root in index.css for this
                to work.
              </p>
              <p>
                Thanks to <a href="https://codesandbox.io/s/gLE85V2D">STUNAZ</a>{" "}
                for improving upon my original!
              </p>
            </i>
          </Grid>
        </Grid> */}
        <Grid container direction="row" spacing="1" alignItems="right">
          <Grid item container direction="column">
            <TaskProfile
              date="May 21"
              task="Invoice Research"
              edits="58"
              comments="60"
            />
          </Grid>
          <Grid item container direction="column">
            <TaskProfile
              date="Jan 03"
              task="Personal Research"
              edits="4"
              comments="6"
            />
          </Grid>
          <Grid item container direction="column">
            <TaskProfile
              date="Jan 03"
              task="Personal Research"
              edits="4"
              comments="6"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Dashboard;
