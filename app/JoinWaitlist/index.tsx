"use client";
import { Form } from "react-final-form";
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
import { ChildDetails } from "./ChildDetails";
import { MotherDetails } from "./MotherDetails";
import { FatherDetails } from "./FatherDetails";
import { AdditionalDetails } from "./AdditionalDetails";

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
		window.scrollTo({ top: 0, behavior: "smooth" });
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const renderFormSection = () => {
		switch (activeStep) {
			case 0:
				return (
					<StyledBox>
						<ChildDetails />
					</StyledBox>
				);
			case 1:
				return (
					<StyledBox>
						<MotherDetails />
					</StyledBox>
				);
			case 2:
				return (
					<StyledBox>
						<FatherDetails />
					</StyledBox>
				);
			case 3:
				return (
					<StyledBox>
						<AdditionalDetails />
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
