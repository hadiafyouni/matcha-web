import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Toast from '../Toast';
import './BookingModal.css';

export interface BookingPayload {
    eventId: number;
    eventTitle: string;
    name: string;
    email: string;
    attendees: number;
    notes: string;
    submittedAt: string;
}

interface BookingModalProps {
    eventId: number;
    eventTitle: string;
    onClose: () => void;
}

export default function BookingModal({ eventId, eventTitle, onClose }: BookingModalProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [attendees, setAttendees] = useState(1);
    const [notes, setNotes] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [toastOpen, setToastOpen] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const payload: BookingPayload = {
            eventId,
            eventTitle,
            name: name.trim(),
            email: email.trim(),
            attendees,
            notes: notes.trim(),
            submittedAt: new Date().toISOString(),
        };

        // Future: send to backend API
        console.log('📩 Event Booking Submitted:', payload);

        setSubmitted(true);
        setToastOpen(true);
    }

    function handleBackdropClick(e: React.MouseEvent) {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <>
            <div className="booking-backdrop" onClick={handleBackdropClick}>
                <div className="booking-modal">
                    {!submitted ? (
                        <>
                            <div className="booking-modal-header">
                                <div>
                                    <h2>Reserve Your Spot</h2>
                                    <p className="booking-event-name">🍵 {eventTitle}</p>
                                </div>
                                <button
                                    className="booking-close-btn"
                                    onClick={onClose}
                                    aria-label="Close booking"
                                >
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>

                            <form className="booking-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>
                                        Full Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>
                                        Email <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Number of Attendees</label>
                                        <input
                                            type="number"
                                            min={1}
                                            max={20}
                                            value={attendees}
                                            onChange={(e) => setAttendees(Number(e.target.value))}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label>Notes / Special Requests</label>
                                    <textarea
                                        placeholder="Any dietary requirements, group details, etc."
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                        rows={3}
                                    />
                                </div>

                                <button type="submit" className="booking-submit-btn">
                                    Confirm Reservation
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="booking-success">
                            <span className="booking-success-icon">🎉</span>
                            <h2>You're all set!</h2>
                            <p>
                                We've received your reservation for <strong>{eventTitle}</strong>.
                                We'll reach out to confirm the details soon.
                            </p>
                            <button className="booking-done-btn" onClick={onClose}>
                                Done
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <Toast
                open={toastOpen}
                onClose={() => setToastOpen(false)}
                message="Reservation submitted successfully!"
            />
        </>
    );
}
