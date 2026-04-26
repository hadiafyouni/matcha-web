import { Snackbar, Alert } from '@mui/material';

export default function Toast({ open, onClose, message, severity = "success" }) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={2500}
            onClose={onClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert
                onClose={onClose}
                severity={severity}
                variant="filled"
                sx={{
                    borderRadius: '12px',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    backgroundColor: severity === 'success' ? '#2c4c3b' : undefined,
                }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}
