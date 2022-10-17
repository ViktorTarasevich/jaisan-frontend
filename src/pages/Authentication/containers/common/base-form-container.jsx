import { Formik } from "formik";

export const BaseFormContainer = ({ renderForm, formik }) => {
	return (
		<Formik
			{...formik}
			onSubmit={() => {
				console.log("Submit");
			}}
		>
			{({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<form onSubmit={handleSubmit}>
					{renderForm(handleChange, handleBlur, values, isSubmitting)}
				</form>
			)}
		</Formik>
	);
};
