function abrirModal(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'flex';
}

function fecharModal(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
}

function abrirModalEditar(id, nome, telefone, email, endereco) {
    const form = document.getElementById('formEditarCliente');
    if (form) {
        form.action = '/clientes/editar/' + id;
        document.getElementById('edit_nome').value = nome;
        document.getElementById('edit_telefone').value = telefone;
        document.getElementById('edit_email').value = email;
        document.getElementById('edit_endereco').value = endereco;
        abrirModal('modalEditarCliente');
    }
}

function abrirModalEditarVeiculo(id, clienteId, placa, marca, modelo, ano, cor, km) {
    const form = document.getElementById('formEditarVeiculo');
    if (form) {
        form.action = '/veiculos/editar/' + id;
        document.getElementById('edit_veiculo_cliente_id').value = clienteId;
        document.getElementById('edit_veiculo_placa').value = placa;
        document.getElementById('edit_veiculo_marca').value = marca;
        document.getElementById('edit_veiculo_modelo').value = modelo;
        document.getElementById('edit_veiculo_ano').value = ano;
        document.getElementById('edit_veiculo_cor').value = cor || '';
        document.getElementById('edit_veiculo_km').value = km || 0;
        abrirModal('modalEditarVeiculo');
    }
}

function abrirModalAtualizarData(id, dataAtual) {
    const form = document.getElementById('formAtualizarData');
    if (form) {
        form.action = '/agendamentos/atualizar-data/' + id;
        if (dataAtual) {
            document.getElementById('nova_data_agendamento').value = dataAtual.replace(' ', 'T').substring(0, 16);
        }
        abrirModal('modalAtualizarData');
    }
}