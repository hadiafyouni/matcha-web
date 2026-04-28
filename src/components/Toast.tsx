import { Snackbar, Alert, AlertColor } from '@mui/material';

interface ToastProps {
    open: boolean;
    onClose: () => void;
    message: string;
    severity?: AlertColor;
}

export default function Toast({ open, onClose, message, severity = "success" }: ToastProps) {
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
