import { FormLabel, Stack } from "@mui/material";
import { StyledTextField } from "../StyledTextField";
import { DatePicker } from "mui-rff";

export const MotherDetails = () => {
	return (
		<>
			<FormLabel sx={{ fontSize: "1.3em" }}>Mother Details: </FormLabel>
			<Stack
				gap={2}
				direction="row"
				flexWrap="wrap"
				alignItems="center"
				sx={{ padding: 2 }}
			>
				<StyledTextField name="mFirstName" label="First Name" />
				<StyledTextField name="mLastName" label="Last Name" />
				<DatePicker name="mDateOfBirth" label="Date Of Birth" />
				<StyledTextField name="mAddress" label="Address" />
				<StyledTextField name="mCity" label="City" />
				<StyledTextField name="mProvince" label="Province" />
				<StyledTextField name="mHomePhone" label="Home Phone" />
				<StyledTextField name="mCellPhone" label="Cell Phone" />
				<StyledTextField name="mEmail" label="Email" />
				<StyledTextField name="mEmployer" label="Employer" />
				<StyledTextField name="mOccupation" label="Occupation" />
				<StyledTextField name="mWorkPhone" label="Work Phone" />
				<StyledTextField name="mExtension" label="Extension" />
				<StyledTextField name="mWorkHours" label="Work Hours" />
			</Stack>
		</>
	);
};
