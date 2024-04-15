-- Tabela Autenticação
CREATE TABLE Auth (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) UNIQUE NOT NULL,
    password VARCHAR(60) NOT NULL,
    role VARCHAR(10) NOT NULL,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Auth (username, password, role)
VALUES 
    ('greenwave', MD5('532k%&j6yuy6JKYQIubsk$'), 'admin'),
    ('detran', MD5('dEt$35876ik#tjga2@RAN$'), 'client'),
    ('bioface', MD5('abT8$*&ˆ3985y4iUY95%jy5'), 'app');

-- Tabela Usuários
CREATE TABLE Usuarios (
    id SERIAL PRIMARY KEY,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    senha VARCHAR(60) NOT NULL,
    email VARCHAR(255) NOT NULL,
    dispositivo VARCHAR(20),
    ip INET,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela Documentos
CREATE TABLE Documentos (
    id SERIAL PRIMARY KEY,
    usuarioId INT NOT NULL,
    nomecompleto VARCHAR(255),
    rg INT,
    orgaoexpedidor VARCHAR(50),
    estadoemissao VARCHAR(2),
    cpf VARCHAR(11) UNIQUE NOT NULL,
    datanascimento DATE,
    mae VARCHAR(255),
    pai VARCHAR(255),
    numseguranca INT,
    categoria VARCHAR(10),
    numregistro INT,
    validade DATE,
    primeirahabilitacao DATE,
    dataemissao DATE,
    cidadeemissao VARCHAR(100),
    observacao TEXT,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuarioId) REFERENCES Usuarios(id)
);

-- Tabela de Transações
CREATE TABLE Transacoes (
    id SERIAL PRIMARY KEY,
    usuarioId INT NOT NULL,
    refid VARCHAR(50),
    tipotransacao VARCHAR(50),
    token VARCHAR(255),
    responseraw TEXT,
    codeauth VARCHAR(6) UNIQUE,
    status VARCHAR(50),
    ip INET,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuarioId) REFERENCES Usuarios(id)
);

-- Tabela de Cobranças
CREATE TABLE Cobrancas (
    id SERIAL PRIMARY KEY,
    usuarioId INT NOT NULL,
    refid VARCHAR(50),
    token VARCHAR(255),
    valor DECIMAL(10, 2),
    totaltransacoes INT NOT NULL,
    datavencimento DATE,
    dataexpiracao DATE,
    status VARCHAR(50),
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuarioId) REFERENCES Usuarios(id)
);
