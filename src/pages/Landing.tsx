import { Box, Button, Typography } from '@mui/material';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { useNavigate } from 'react-router-dom';

function Landing() {
	const navigate = useNavigate();

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				gap: 3,
				color: '#2B0F18',
				px: 2,
			}}
		>
			<Typography variant="h3" component="h1" sx={{ fontWeight: 600 }}>
				Welcome to Style Recommendation Engine!
			</Typography>
			<CheckroomIcon sx={{ fontSize: 72 }} aria-hidden />
			<Button
				variant="contained"
				size="large"
				sx={{
					backgroundColor: '#B58DB6',
					borderRadius: '999px',
					px: 4,
					py: 1.25,
					textTransform: 'none',
					fontSize: '1rem',
					'&:hover': {
						backgroundColor: '#a279aa',
					},
				}}
				onClick={() => navigate('/build')}
			>
				Get Started
			</Button>
		</Box>
	);
}

export default Landing;