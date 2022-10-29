import { Formik } from "formik";

export const BaseFormContainer = ({ renderForm, formik, onSubmit }) => {

	return (
		<Formik
			{...formik}
			onSubmit={onSubmit}
		>
			{({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
				<form onSubmit={handleSubmit}>
					{renderForm(handleChange, handleBlur, values, isSubmitting)}
				</form>
			)}
		</Formik>
	);
};
