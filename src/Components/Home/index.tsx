import React from 'react';
import { useNavigate } from 'react-router-dom';
// @material-ui
import { Typography, Grid } from '@material-ui/core';
// @api
import useStore from 'store/store';
// @local
import Office from '../Office';
import useStyles from './styles';

const LandingPage = () => {
	const classes = useStyles({});
	const store = useStore((state) => state);
	const fetchOffices = store.offices;

	const navigate = useNavigate();

	const goToOfficePage = (id: string) => {
		navigate(`/office/${id}`);
	};

	return (
		<Grid container>
			<Grid item xs={12}>
				<Typography
					variant="h4"
					color="secondary"
					className={classes.topSpacingText}
					align="center"
				>
					All Offices
				</Typography>
			</Grid>
			<Grid item xs={12}>
				{fetchOffices
					? fetchOffices.map((office) =>
							office.id ? (
								<Office
									office={office}
									goToOfficePage={goToOfficePage}
									key={office.id}
								/>
							) : null,
					  )
					: null}

				{fetchOffices?.length === 0 ? (
					<Typography variant="h5">
						There are currently no offices. Click on the button
						below to add a new office.
					</Typography>
				) : null}
			</Grid>
		</Grid>
	);
};

export default LandingPage;
