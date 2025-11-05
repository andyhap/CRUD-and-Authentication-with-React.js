import React, { useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';

function FormModal({ show, handleClose, handleSave, form, setForm, editId }) {
const [error, setError] = useState('');

const onSave = () => {
    if (!form.title.trim() || !form.description.trim()) {
    setError('Semua field wajib diisi!');
    return;
    }
    setError('');
    handleSave();
};

return (
    <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
        <Modal.Title>{editId ? 'Edit Data' : 'Tambah Data'}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Judul</Form.Label>
            <Form.Control
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Masukkan judul"
            required
            />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
            as="textarea"
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Masukkan deskripsi"
            required
            />
        </Form.Group>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
        Batal
        </Button>
        <Button variant="primary" onClick={onSave}>
        Simpan
        </Button>
    </Modal.Footer>
    </Modal>
);
}

export default FormModal;
