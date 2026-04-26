import { Button } from '@mui/material';

const btnStyles = {
    color: '#2c4c3b',
    borderColor: '#2c4c3b',
    borderWidth: '2px',
    borderRadius: '30px',
    padding: '0.6rem 1.5rem',
    fontWeight: 600,
    fontSize: '1rem',
    textTransform: 'none',
    width: '100%',
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: '#2c4c3b',
        color: 'white',
        borderColor: '#2c4c3b',
        borderWidth: '2px',
    }
};

export default function PrimaryButton({ children, sx, ...props }) {
    return (
        <Button
            variant="outlined"
            sx={{ ...btnStyles, ...sx }}
            {...props}
        >
            {children}
        </Button>
    );
}
