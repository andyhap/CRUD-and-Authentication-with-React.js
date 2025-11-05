import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

function Message({ show, onClose, message, variant }) {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast
        onClose={onClose}
        show={show}
        delay={2500}
        autohide
        bg={variant === 'success' ? 'success' : 'danger'}
        className="shadow-sm"
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">
            {variant === 'success' ? '✅ Berhasil' : '❌ Gagal'}
          </strong>
        </Toast.Header>
        <Toast.Body className="text-white fw-semibold">
          {message}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Message;
