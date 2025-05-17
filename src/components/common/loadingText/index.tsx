import Skeleton from "@mui/material/Skeleton";

const LoadingText = ({ width = "100%", height = "14px" }) => (
  <Skeleton animation="wave" sx={{ width, height, borderRadius: "2px" }} />
);

export default LoadingText;
