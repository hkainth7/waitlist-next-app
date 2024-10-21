import { FormLabel, Stack } from "@mui/material";
import { StyledTextField } from "../StyledTextField";
import { DatePicker } from "mui-rff";

export const FatherDetails = () => {
	return (
		<>
			<FormLabel sx={{ fontSize: "1.3em" }}>Fathers Details:</FormLabel>
			<Stack
				gap={2}
				direction="row"
				flexWrap="wrap"
				alignItems="center"
				sx={{ padding: 2 }}
			>
				<StyledTextField name="fFirstName" label="First Name" />
				<StyledTextField name="fLastName" label="Last Name" />
				<DatePicker name="fDateOfBirth" label="Date Of Birth" />
				<StyledTextField name="fAddress" label="Address" />
				<StyledTextField name="fCity" label="City" />
				<StyledTextField name="fProvince" label="Province" />
				<StyledTextField name="fHomePhone" label="Home Phone" />
				<StyledTextField name="fCellPhone" label="Cell Phone" />
				<StyledTextField name="fEmail" label="Email" />
				<StyledTextField name="fEmployer" label="Employer" />
				<StyledTextField name="fOccupation" label="Occupation" />
				<StyledTextField name="fWorkPhone" label="Work Phone" />
				<StyledTextField name="fExtension" label="Extension" />
				<StyledTextField name="fWorkHours" label="Work Hours" />
			</Stack>
		</>
	);
};
