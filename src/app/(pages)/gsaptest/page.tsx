import DraggableGrid from "@/components/UI/Animations/DraggableGrid";
import { Box } from "@mui/material";

const GSapTestPage: React.FC = () => {
  return (
    <Box className="w-screen h-screen flex justify-center items-center">
      <DraggableGrid />
    </Box>
  );
};

export default GSapTestPage;
