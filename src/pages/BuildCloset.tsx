import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function BuildCloset() {
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
                Build Your Closet
            </Typography>
            <Box
                sx={{
                    border: '2px solid #D0ADA7',
                    px: 4,
                    py: 3,
                }}
            >
                <Typography>No images yet!</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
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
                >
                    Upload Photos
                </Button>
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
                    onClick={() => navigate('/analysis')}
                >
                    Generate Analysis
                </Button>
            </Box>
        </Box>
    );
}

export default BuildCloset;