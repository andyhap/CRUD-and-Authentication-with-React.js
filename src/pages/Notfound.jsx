import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NotFound() {
const navigate = useNavigate();

return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
    <h1 className="display-1 fw-bold text-danger">404</h1>
    <h4 className="mb-3">Halaman Tidak Ditemukan</h4>
    <p className="text-muted mb-4">
        Sepertinya halaman yang kamu cari tidak tersedia atau telah dipindahkan.
    </p>
    <Button variant="primary" onClick={() => navigate('/')}>
        Kembali ke Beranda
    </Button>
    </Container>
);
}

export default NotFound;
