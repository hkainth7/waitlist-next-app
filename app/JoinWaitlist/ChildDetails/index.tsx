import { FormLabel, Stack } from "@mui/material";
import { StyledTextField } from "../StyledTextField";
import { DatePicker } from "mui-rff";

export const ChildDetails = () => {
	return (
		<>
			<FormLabel sx={{ fontSize: "1.3em" }}>Child Details:</FormLabel>
			<Stack
				gap={2}
				direction="row"
				flexWrap="wrap"
				alignItems="center"
				sx={{ padding: 2 }}
			>
				<StyledTextField name="childFirstName" label="First Name" />
				<StyledTextField name="childLastName" label="Last Name" />
				<DatePicker name="dateOfBirth" label="DOB" />
				<StyledTextField name="age" label="Age" />
				<StyledTextField name="address" label="Address" />
				<StyledTextField name="city" label="City" />
				<StyledTextField name="province" label="Province" />
				<StyledTextField name="postalCode" label="Postal Code" />
				<StyledTextField
					name="programOption"
					label="Program and Location Type"
				/>
				<StyledTextField name="desiredStartDate" label="Desired Start Date" />
				<StyledTextField name="transferringForm" label="Transferring From" />
			</Stack>
		</>
	);
};
