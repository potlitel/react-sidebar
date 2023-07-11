import { Typography } from "../components/shared/Typography";
// import { Grid, Row, Col } from "react-flexbox-grid";
import TaskProfile from "../components/shared/TaskProfile";
// import Grid from "@mui/material/Grid";
// import { Box } from "@mui/material";
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
      </div>
      {/* <div style={{ width: "100%" }}> */}
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
      {/* <Grid container direction="row" spacing="1" alignItems="right">
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
        </Grid> */}
      <div className="main-section">
        <div className="card">
          <TaskProfile
            date="May 21"
            task="Invoice Research"
            edits="58"
            comments="60"
          />
        </div>
        <div className="card">
          <TaskProfile
            date="Jan 03"
            task="Personal Research"
            edits="4"
            comments="6"
          />
        </div>
        <div className="card">
          <TaskProfile
            date="Nov 03"
            task="Transactions Research"
            edits="14"
            comments="26"
          />
        </div>
        <div className="card">
          <TaskProfile
            date="Feb 23"
            task="Wallets Research"
            edits="17"
            comments="81"
          />
        </div>
      </div>
      {/* <h1>Responsive Card</h1>
      <div class="wrapper">
        <div class="card">
          <h3 class="card-title">CARD TITLE</h3>
          <p class="card-content">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <button class="card-btn">READ MORE</button>
        </div>
        <div class="card">
          <h3 class="card-title">CARD TITLE</h3>
          <p class="card-content">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <button class="card-btn">READ MORE</button>
        </div>
        <div class="card">
          <h3 class="card-title">CARD TITLE</h3>
          <p class="card-content">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <button class="card-btn">READ MORE</button>
        </div>
      </div> */}
      {/* </div> */}
    </div>
  );
};
export default Dashboard;
