// class TaskProfile extends React.Component {
//   constructor(props) {
//     super(props);
//   }
import "../../TaskProfile.css";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CommentIcon from "@mui/icons-material/Comment";
const TaskProfile = ({ date, task, edits, comments, ...rest }) => {
  //   render();
  return (
    <Grid container sx={{ color: "text.primary" }} style={{ margin: "0rem" }}>
      <article>
        <Box height="10vh" mr={1}>
          <Grid container justify="flex-end" spacing={2}>
            <Grid item xs={1}>
              <HistoryToggleOffIcon />
            </Grid>
            <Grid item xs={4}>
              <Typography>{date}</Typography>
            </Grid>
          </Grid>
        </Box>
        <h3>{task}</h3>

        <div className="rect grey"></div>
        <div className="rect blue"></div>
        <div className="rect orange"></div>
        <div className="rect green"></div>

        <hr />
        <Box height="10vh" mr={3}>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            {/* <i>
            <DeleteOutlineIcon /> {edits}
          </i> */}
            <Grid item xs={1}>
              <DeleteOutlineIcon />
            </Grid>
            <Grid item xs={1}>
              <Typography>{edits}</Typography>
            </Grid>
            {/* <i>
              <CommentIcon /> {comments}
            </i> */}
            <Grid item xs={1}>
              <CommentIcon />
            </Grid>
            <Grid item xs={1}>
              <Typography>{comments}</Typography>
            </Grid>

            <Grid item xs={1}>
              <div className="bubble bubble-adder">+</div>
            </Grid>
            <Grid item xs={1}>
              <div className="bubble bubble-lilac">1</div>
            </Grid>
            <Grid item xs={1}>
              <div className="bubble bubble-orange">2</div>
            </Grid>
            <Grid item xs={1}>
              <div className="bubble bubble-green">3</div>
            </Grid>
          </Grid>
        </Box>
      </article>
    </Grid>
  );
};

export default TaskProfile;
