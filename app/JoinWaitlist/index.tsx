"use client";
import { Form } from "react-final-form";
import { DatePicker, TextField } from "mui-rff";
import { WaitlistFormValues } from "../types";
import {
	Box,
	Button,
	FormLabel,
	Stack,
	Step,
	StepLabel,
	Stepper,
	styled,
} from "@mui/material";
import "date-fns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";

const StyledTextField = styled(TextField)({
	width: "31%",
});

const StyledBox = styled(Box)({
	padding: 4,
});

const steps = [
	"Child Details",
	"Mother Details",
	"Father Details",
	"Additional Detials",
];

export const JoinWaitlist = () => {
	const [activeStep, setActiveStep] = useState(0);

	const initialValues: WaitlistFormValues = {
		childFirstName: "",
		childLastName: "",
		dateOfBirth: "",
		age: "",
		address: "",
		city: "",
		province: "",
		postalCode: "",
		programOption: "",
		desiredStartDate: "",
		transferringFrom: "",
		mFirstName: "",
		mLastName: "",
		mDateOfBirth: "",
		mAddress: "",
		mCity: "",
		mProvince: "",
		mPostalCode: "",
		mHomePhone: "",
		mCellPhone: "",
		mEmail: "",
		mEmployer: "",
		mOccupation: "",
		mWorkPhone: "",
		mExtension: "",
		mWorkHours: "",
		fFirstName: "",
		fLastName: "",
		fDateOfBirth: "",
		fAddress: "",
		fCity: "",
		fProvince: "",
		fPostalCode: "",
		fHomePhone: "",
		fCellPhone: "",
		fEmail: "",
		fEmployer: "",
		fOccupation: "",
		fWorkPhone: "",
		fExtension: "",
		fWorkHours: "",
		courtOrders: false,
		weekendCare: "",
	};

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const renderFormSection = () => {
		switch (activeStep) {
			case 0:
				return (
					<StyledBox>
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
							<DatePicker
								name="dateOfBirth"
								label="DOB"
								sx={{ width: "31%" }}
							/>
							<StyledTextField name="age" label="Age" />
							<StyledTextField name="address" label="Address" />
							<StyledTextField name="city" label="City" />
							<StyledTextField name="province" label="Province" />
							<StyledTextField name="postalCode" label="Postal Code" />
							<StyledTextField
								name="programOption"
								label="Program and Location Type"
							/>
							<StyledTextField
								name="desiredStartDate"
								label="Desired Start Date"
							/>
							<StyledTextField
								name="transferringForm"
								label="Transferring From"
							/>
						</Stack>
					</StyledBox>
				);
			case 1:
				return (
					<StyledBox>
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
							<DatePicker
								name="mDateOfBirth"
								label="Date Of Birth"
								sx={{ width: "31%" }}
							/>
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
					</StyledBox>
				);
			case 2:
				return (
					<StyledBox>
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
							<DatePicker
								name="fDateOfBirth"
								label="Date Of Birth"
								sx={{ width: "31%" }}
							/>
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
					</StyledBox>
				);
			case 3:
				return (
					<StyledBox>
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
					</StyledBox>
				);
		}
	};

	const onSubmit = (values: WaitlistFormValues) => {
		console.log(values);
	};
	const validate = () => {
		const errors = {};
		return errors;
	};

	return (
		<>
			<Form
				initialValues={initialValues}
				onSubmit={onSubmit}
				validate={validate}
				render={({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<Stack gap={2}>
								<Stepper activeStep={activeStep}>
									{steps.map((label, index) => {
										const stepProps: { completed?: boolean } = {};
										const labelProps: {
											optional?: React.ReactNode;
										} = {};

										return (
											<Step key={index} {...stepProps}>
												<StepLabel {...labelProps}>{label}</StepLabel>
											</Step>
										);
									})}
								</Stepper>
								{renderFormSection()}
								<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
									<Button
										color="inherit"
										disabled={activeStep === 0}
										onClick={handleBack}
										sx={{ mr: 1 }}
									>
										Back
									</Button>
									<Box sx={{ flex: "1 1 auto" }} />
									{activeStep === steps.length - 1 ? (
										<Button type="submit">Join Waitlist</Button>
									) : (
										<Button onClick={handleNext}>Next</Button>
									)}
								</Box>
							</Stack>
						</LocalizationProvider>
					</form>
				)}
			/>
		</>
	);
};
