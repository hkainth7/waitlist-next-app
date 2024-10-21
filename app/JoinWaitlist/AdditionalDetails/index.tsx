import { Stack } from "@mui/material";
import { StyledTextField } from "../StyledTextField";

export const AdditionalDetails = () => {
	return (
		<>
			<Stack
				gap={2}
				direction="row"
				flexWrap="wrap"
				alignItems="center"
				sx={{ padding: 2 }}
			>
				<StyledTextField name="courtOrders" label="Court Orders" />
				<StyledTextField name="weekendCare" label="Weekend Care" />
			</Stack>
		</>
	);
};
