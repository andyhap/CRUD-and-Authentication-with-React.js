import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Container } from 'react-bootstrap';
import Message from '../components/Message';

function Register() {
const [form, setForm] = useState({ name: '', email: '', password: '' });
const [toast, setToast] = useState({ show: false, message: '', variant: '' });
const navigate = useNavigate();

const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    await api.post('/auth/register', form);
    setToast({ show: true, message: 'Registrasi berhasil! Silakan login.', variant: 'success' });

    setTimeout(() => {
        navigate('/login');
    }, 2000);
    } catch (err) {
    setToast({ show: true, message: 'Registrasi gagal. Email mungkin sudah digunakan.', variant: 'danger' });
    }
};

return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
    <Card style={{ width: '400px' }} className="p-4 shadow-sm">
        <h4 className="text-center mb-3">Register</h4>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Control
            name="name"
            placeholder="Nama Lengkap"
            value={form.name}
            onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            />
        </Form.Group>
        <Button type="submit" className="w-100">Register</Button>
        </Form>
    </Card>

    <Message
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
        message={toast.message}
        variant={toast.variant}
    />
    </Container>
);
}

export default Register;
