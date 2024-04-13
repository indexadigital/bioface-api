-- Tabela Usuários
CREATE TABLE Usuarios (
    ID SERIAL PRIMARY KEY,
    CPF VARCHAR(11) UNIQUE NOT NULL,
    Senha VARCHAR(60) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    NomeCompleto VARCHAR(255) NOT NULL,
    Dispositivo VARCHAR(20),
    IP INET,
    Created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela Documentos
CREATE TABLE Documentos (
    ID SERIAL PRIMARY KEY,
    UsuarioID INT NOT NULL,
    NomeCompleto VARCHAR(255),
    RG INT,
    OrgaoExpedidor VARCHAR(50),
    EstadoEmissao VARCHAR(2),
    CPF VARCHAR(11) UNIQUE NOT NULL,
    DataNascimento DATE,
    Mae VARCHAR(255),
    Pai VARCHAR(255),
    NumSeguranca INT,
    Categoria VARCHAR(10),
    NumRegistro INT,
    Validade DATE,
    PrimeiraHabilitacao DATE,
    DataEmissao DATE,
    CidadeEmissao VARCHAR(100),
    Observacao TEXT,
    Created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID)
);

-- Tabela de Transações
CREATE TABLE Transacoes (
    ID SERIAL PRIMARY KEY,
    UsuarioID INT NOT NULL,
    RefID VARCHAR(50),
    TipoTransacao VARCHAR(50),
    Token VARCHAR(255),
    ResponseRaw TEXT,
    CodeAuth VARCHAR(6) UNIQUE,
    ExpireAuth TIMESTAMP DEFAULT CURRENT_TIMESTAMP + INTERVAL '5 Minutes',
    Status VARCHAR(50),
    IP INET,
    Created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID)
);

-- Tabela de Cobranças
CREATE TABLE Cobrancas (
    ID SERIAL PRIMARY KEY,
    UsuarioID INT NOT NULL,
    RefID VARCHAR(50),
    Token VARCHAR(255),
    Valor DECIMAL(10, 2),
    TotalTransacoes INT NOT NULL,
    DataVencimento DATE,
    DataExpiracao DATE,
    Status VARCHAR(50),
    Created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID)
);
