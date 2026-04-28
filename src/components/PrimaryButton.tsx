import { Button, ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

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
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: '#2c4c3b',
        color: 'white',
        borderColor: '#2c4c3b',
        borderWidth: '2px',
        textDecoration: 'none',
    }
};

interface PrimaryButtonProps extends ButtonProps {
    children: ReactNode;
    component?: React.ElementType;
    to?: any;
}

export default function PrimaryButton({ children, sx, ...props }: PrimaryButtonProps) {
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
