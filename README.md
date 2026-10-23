<div align="center">

![Header animado](https://capsule-render.vercel.app/api?type=waving&color=0:0B1220,45:123A5A,100:168AAD&height=190&section=header&text=AutoMec%C3%A2nica%20Pro&fontSize=42&fontColor=FFFFFF&animation=fadeIn&fontAlignY=35&desc=CONTROLE%20EM%20DIA.%20OFICINA%20EM%20MOVIMENTO.&descAlignY=58&descSize=16)

[![Typing SVG](https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=20&duration=2600&pause=700&color=38BDF8&center=true&vCenter=true&width=650&lines=Organize+clientes+e+ve%C3%ADculos;Acompanhe+os+agendamentos;Deixe+a+rotina+da+oficina+mais+fluida)](https://git.io/typing-svg)

![Carro em movimento](assets/carro-em-movimento.gif)

<br>

![Python](https://img.shields.io/badge/Python-3.13-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-3.x-000000?style=for-the-badge&logo=flask&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-Database-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-Interface-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interactions-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Projeto acadêmico • SENAI • SAEP**

[Sobre](#-sobre-o-projeto) · [Funcionalidades](#-o-que-o-sistema-faz) · [Tecnologias](#-tecnologias) · [Como executar](#-colocando-para-rodar) · [Estrutura](#-por-dentro-do-projeto)

</div>

---

## `01 /` 🧰 Sobre o projeto

O **AutoMecânica Pro** é um sistema web desenvolvido para apoiar a rotina de uma oficina mecânica, centralizando informações que precisam estar organizadas para o atendimento funcionar bem.

A proposta é facilitar o gerenciamento de **clientes, veículos e agendamentos de serviços**, com um painel inicial que reúne os principais números da oficina e os próximos serviços previstos.

> Menos informação espalhada. Mais controle sobre o que acontece na oficina.

## `02 /` ⚙️ O que o sistema faz

<table>
<tr>
<td width="50%" valign="top">

### 👥 Gestão de clientes
- Cadastro e edição de clientes
- Busca por nome, CPF, e-mail ou telefone
- Consulta dos dados cadastrados
- Associação dos dados aos veículos

</td>
<td width="50%" valign="top">

### 🚘 Gestão de veículos
- Cadastro e edição de veículos
- Placa, marca, modelo, ano e cor
- Registro da quilometragem
- Vínculo do veículo com seu proprietário

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 📅 Agendamento de serviços
- Cadastro de serviços com data e horário
- Descrição e valor estimado
- Acompanhamento do status
- Listagem organizada por data

</td>
<td width="50%" valign="top">

### 📊 Painel principal
- Total de clientes cadastrados
- Total de veículos registrados
- Quantidade de agendamentos
- Visualização dos próximos serviços

</td>
</tr>
</table>

### 🔐 Acesso e segurança

- Login com usuário e senha.
- Senhas verificadas com **Bcrypt**.
- Controle de sessão com expiração após período de inatividade.
- Encerramento de sessão pelo logout.
- Conexão com banco de dados centralizada em um único módulo.

## `03 /` 🧪 Tecnologias

| Tecnologia | Utilização |
|---|---|
| **Python** | Lógica e processamento da aplicação |
| **Flask** | Rotas e funcionamento do servidor web |
| **MySQL** | Armazenamento dos dados |
| **MySQL Connector** | Comunicação entre Python e MySQL |
| **HTML + Jinja** | Estrutura das páginas e exibição dinâmica |
| **CSS** | Estilização da interface |
| **JavaScript** | Interações da interface |
| **Bcrypt** | Verificação de senhas com hash |

## `04 /` 🖥️ Colocando para rodar

### Pré-requisitos

Antes de iniciar, tenha instalado:

- [Python](https://www.python.org/downloads/)
- [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
- [Visual Studio Code](https://code.visualstudio.com/) (recomendado)

### 1. Abra a pasta do projeto

No terminal, entre na pasta `oficina_mecanica`, onde estão `saep_db.sql` e a pasta `sistema`.

### 2. Crie e ative o ambiente virtual

No Windows:

```bash
python -m venv venv
venv\Scripts\activate
```

Quando estiver ativo, o terminal deve mostrar `(venv)` no começo da linha.

### 3. Instale as dependências

O arquivo `sistema/requirements.txt` deve conter:

```txt
Flask==3.0.3
mysql-connector-python==8.4.0
bcrypt==4.1.3
Werkzeug==3.0.3
```

Depois, instale os pacotes:

```bash
python -m pip install -r sistema/requirements.txt
```

> Se o arquivo estiver vazio, adicione as linhas acima e salve antes de executar o comando.

### 4. Prepare o banco de dados

1. Abra o MySQL Workbench e conecte-se ao servidor.
2. Abra o arquivo `saep_db.sql`.
3. Confira o conteúdo antes de executar: o script **apaga e recria as tabelas** `agendamentos`, `veiculos`, `clientes` e `usuarios`. Não execute em um banco com dados que deseja preservar.
4. Execute o script para criar a base `saep_db` e inserir os registros de exemplo.

### 5. Confira a conexão com o MySQL

A configuração fica em `sistema/banco.py`. O projeto aceita estas variáveis de ambiente:

| Variável | Padrão utilizado |
|---|---|
| `DB_HOST` | `localhost` |
| `DB_USER` | `root` |
| `DB_PASSWORD` | Definida na configuração local |
| `DB_NAME` | `saep_db` |
| `DB_PORT` | `3306` |

Confirme que o MySQL está iniciado e que o usuário informado tem acesso ao banco. Se necessário, ajuste a senha na configuração local ou defina `DB_PASSWORD` no ambiente. **Não publique senhas reais no GitHub.**

### 6. Inicie a aplicação

Na raiz do projeto, com o ambiente virtual ativo:

```bash
python sistema/app.py
```

Quando o servidor iniciar, abra no navegador:

**http://127.0.0.1:5000**

Para encerrar o servidor, volte ao terminal e pressione `Ctrl + C`.

## `05 /` 🗂️ Por dentro do projeto

```text
oficina_mecanica/
├── saep_db.sql
├── sistema/
│   ├── app.py                 # Inicialização do Flask
│   ├── banco.py               # Configuração e conexão com MySQL
│   ├── autenticacao.py        # Login, senha e sessão
│   ├── rotas.py               # Endpoints e navegação
│   ├── clientes.py            # Operações de clientes
│   ├── veiculos.py            # Operações de veículos
│   ├── agendamento.py         # Operações de agendamentos
│   ├── requirements.txt       # Dependências Python
│   ├── templates/             # Páginas HTML/Jinja
│   └── static/
│       ├── css/style.css      # Estilos da interface
│       └── js/main.js         # Interações do front-end
└── README.md
```

## `06 /` 🔑 Usuários de demonstração

O script SQL inclui usuários para testar o login:

| Perfil | Usuário | Senha |
|---|---|---|
| Administrador / Gerente | `admin` | `admin123` |
| Mecânico | `mecanico` | `senha123` |
| Recepção | `recepcao` | `rec123` |

Essas credenciais são **apenas para ambiente de demonstração**. Troque-as antes de qualquer uso real e não reutilize essas senhas em outros serviços.

## `07 /` 📌 Objetivo do projeto

Aplicar conhecimentos de desenvolvimento web, integração com banco de dados, organização de código, autenticação e operações de cadastro em uma aplicação prática.

O projeto reúne interface, lógica de servidor e persistência de dados em uma solução voltada à organização do dia a dia de uma oficina mecânica.

---

<div align="center">

### `BUILT TO KEEP THE WORKSHOP MOVING.`

**AutoMecânica Pro** · Projeto acadêmico SENAI / SAEP

<sub>Python • Flask • MySQL • HTML • CSS • JavaScript</sub>

![Footer animado](https://capsule-render.vercel.app/api?type=waving&color=0:168AAD,55:123A5A,100:0B1220&height=110&section=footer)

</div>


<div align="center">
<sub>Feito com 🩵 por Alana Corso</sub>
</div>
