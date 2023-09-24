-- Criação da tabela de Usuários
CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sexo ENUM('Masculino', 'Feminino', 'Outro'),
    altura DECIMAL(5, 2),
    peso DECIMAL(5, 2),
    data_nascimento DATE,
    idade INT
);

-- Criação da tabela de Instrutores
CREATE TABLE Instrutor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Criação da tabela de Fichas de Treino
CREATE TABLE FichaTreino (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    instrutor_id INT NOT NULL,
    data_inicio DATE,
    data_fim DATE,
    descricao TEXT,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (instrutor_id) REFERENCES Instrutor(id)
);

-- Criação da tabela de Exercícios
CREATE TABLE Exercicio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

-- Criação da tabela de Detalhes de Exercício na Ficha de Treino
CREATE TABLE DetalheExercicio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ficha_treino_id INT NOT NULL,
    exercicio_id INT NOT NULL,
    repeticoes INT,
    series INT,
    cronometro INT,
    FOREIGN KEY (ficha_treino_id) REFERENCES FichaTreino(id),
    FOREIGN KEY (exercicio_id) REFERENCES Exercicio(id)
);
