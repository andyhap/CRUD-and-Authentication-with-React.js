import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Card, Container } from 'react-bootstrap';
import Message from '../components/Message';

function Login() {
const [form, setForm] = useState({ email: '', password: '' });
const [toast, setToast] = useState({ show: false, message: '', variant: '' });
const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await api.post('/auth/login', form);
    localStorage.setItem('token', res.data.token);
    setToast({ show: true, message: 'Login berhasil!', variant: 'success' });

    setTimeout(() => {
        navigate('/dashboard');
    }, 2000);
    } catch (err) {
    setToast({ show: true, message: 'Email atau password salah', variant: 'danger' });
    }
};

return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
    <Card style={{ width: '400px' }} className="p-4 shadow-sm">
        <h4 className="text-center mb-3">Login</h4>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
        </Form.Group>
        <Button type="submit" className="w-100">Login</Button>
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

export default Login;
