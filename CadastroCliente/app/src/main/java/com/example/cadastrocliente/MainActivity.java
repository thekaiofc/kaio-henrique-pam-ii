package com.example.cadastrocliente;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

public class MainActivity extends AppCompatActivity {

    private DatabaseReference minhaReferencia = FirebaseDatabase.getInstance().getReference("clientes");
    private int idCounter = 1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        adicionarCliente("Gabriel", "gabriel@email.com", "11 996542451", "22636489", "Rua gabriel", "casa amarela", "São Paulo", "São Paulo", "12345-781", "Ativo");
        adicionarCliente("Lucas", "lucas@email.com", "11 99658432", "22156452", "Rua Lucas", "casa azul", "São Paulo", "São Paulo", "23456-7892", "Ativo");
        adicionarCliente("Thomas", "thomas@email.com", "3456789012", "8765432109", "Rua Thomas", "casa vermelha", "São Paulo", "São Paulo", "34567-8913", "Inativo");
        adicionarCliente("Ana Maria", "anamaria@email.com", "4567890123", "7654321098", "Rua Ana Maria", "casa verde", "São Paulo", "São Paulo", "45678-9124", "Ativo");
        adicionarCliente("Marilene", "marilene@email.com", "5678901234", "6543210987", "Rua Marilene", "casa marrom", "São Paulo", "São Paulo", "56789-1235", "Inativo");
        adicionarCliente("Professor", "marilene@email.com", "5678901234", "6543210987", "Rua Marilene", "casa marrom", "São Paulo", "São Paulo", "56789-1235", "Inativo");
    }

    private void adicionarCliente(String nome, String email, String celular, String telefone, String endereco, String complemento, String estado, String cidade, String cep, String status) {

        String idCliente = String.valueOf(idCounter);
        idCounter++;

        DatabaseReference clienteRef = minhaReferencia.child(idCliente);

        Cliente novoCliente = new Cliente();
        novoCliente.setIdCliente(idCliente);
        novoCliente.setNome(nome);
        novoCliente.setEmail(email);
        novoCliente.setCelular(celular);
        novoCliente.setTelefone(telefone);
        novoCliente.setEndereco(endereco);
        novoCliente.setComplemento(complemento);
        novoCliente.setEstado(estado);
        novoCliente.setCidade(cidade);
        novoCliente.setCep(cep);
        novoCliente.setStatus(status);

        clienteRef.setValue(novoCliente);
    }


public class Cliente {
        private String idCliente;
        private String nome;
        private String email;
        private String celular;
        private String telefone;
        private String endereco;
        private String complemento;
        private String estado;
        private String cidade;
        private String cep;
        private String status;

        public Cliente() {

        }

        public String getIdCliente() {
            return idCliente;
        }

        public void setIdCliente(String idCliente) {
            this.idCliente = idCliente;
        }

        public String getNome() {
            return nome;
        }

        public void setNome(String nome) {
            this.nome = nome;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getCelular() {
            return celular;
        }

        public void setCelular(String celular) {
            this.celular = celular;
        }

        public String getTelefone() {
            return telefone;
        }

        public void setTelefone(String telefone) {
            this.telefone = telefone;
        }

        public String getEndereco() {
            return endereco;
        }

        public void setEndereco(String endereco) {
            this.endereco = endereco;
        }

        public String getComplemento() {
            return complemento;
        }

        public void setComplemento(String complemento) {
            this.complemento = complemento;
        }

        public String getEstado() {
            return estado;
        }

        public void setEstado(String estado) {
            this.estado = estado;
        }

        public String getCidade() {
            return cidade;
        }

        public void setCidade(String cidade) {
            this.cidade = cidade;
        }

        public String getCep() {
            return cep;
        }

        public void setCep(String cep) {
            this.cep = cep;
        }

        public String getStatus() {
            return status;
        }

        public void setStatus(String status) {
            this.status = status;
        }
    }
}
