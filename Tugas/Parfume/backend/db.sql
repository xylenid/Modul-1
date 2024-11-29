-- Membuat database dan menggunakan database tersebut
CREATE DATABASE prakdemo4;
USE prakdemo4;

-- Membuat tabel parfume
CREATE TABLE data_parfume (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Menambahkan data dummy ke tabel parfume
INSERT INTO data_parfume (name, description, image_url) VALUES
('Xylen Parfume 1', 'Aroma Vanila yang sangat yahutt.', 'https://drive.google.com/file/d/12066hPjPdpSUw9J7q-rwAGMQLphnV531/view?usp=drive_link'),
('Xylen Parfume 2', 'Bau Jiggong yahuutttt.', 'https://drive.google.com/file/d/12066hPjPdpSUw9J7q-rwAGMQLphnV531/view?usp=drive_link'),

