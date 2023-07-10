import { Typography } from "../components/shared/Typography";
const Invoices = () => {
  return (
    <div style={{ padding: "16px 24px", color: "#44596e" }}>
      <div style={{ marginBottom: "48px" }}>
        <Typography variant="h4" fontWeight={600}>
          KEEP TRACK OF YOUR Invoices
        </Typography>
        <Typography variant="body2">
          <h3>Seamless Invoices</h3>
          <p>Lorem ipsum dolor sit amet...</p>
        </Typography>
        {/* <PackageBadges /> */}
      </div>
    </div>
  );
};
export default Invoices;
