import { Typography } from "../components/shared/Typography";
const Home = () => {
  return (
    <div style={{ padding: "16px 24px", color: "#44596e" }}>
      <div style={{ marginBottom: "48px" }}>
        <Typography variant="h4" fontWeight={600}>
          React Pro Sidebar
        </Typography>
        <Typography variant="body2">
          React Pro Sidebar provides a set of components for creating high level
          and customizable side navigation
        </Typography>
        {/* <PackageBadges /> */}
      </div>
    </div>
  );
};
export default Home;
