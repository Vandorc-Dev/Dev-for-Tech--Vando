var app = new function () {
    this.el = document.getElementById('countries');
    this.countries = ['Brasil', 'Alemanha', 'Inglaterra', 'Espanha', 'Itália', 'México', 'Portugal',
        'Japão', 'Chile'];
    this.count = function (data) {
        var el = document.getElementById('counter');
        var name = 'país';
        if (data) {
            if (data > 1) {
                name = 'países';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'Nenhum ' + name;
        }
    }
    // Montar a lista de países com as váriaveis setadas
    this.FetchAll = function () {
        var data = '';
        if (this.countries.length > 0) {
            // Laço de repetição para correr os registros no array
            for (i = 0; i < this.countries.length; i++) {
                data += '<tr>';
                data += '<td>' + this.countries[i] + '</td>';
                data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick = "app.Delete(' + i + ')">Delete</button></td>';
                data += '</tr>'
            }
        }
        this.count(this.countries.lenght);
        return this.el.innerHTML = data;
    };
    this.Add = function(){
        el = document.getElementById('add-name');
        //pega o valor
        var country = el.value;

        if(country){
            // adiciona um novo valor
           this.countries.push(country.trim());
           // redefinir o valor de entrada
           el.value = '';
           // mostra a nova lista 
           this.FetchAll();
        }
    };

    this.Edit = function(item){
        var el = document.getElementById('edit-name');
        // exibe o valor do campo
        el.value = this.countries[item];
        // mostrar os campos
        document.getElementById('spoiler').style.display = 'block';
        self = this;

        document.getElementById('saveEdit').onsubmit = function(){
            // obter o valor
            var country = el.value;

            if(country){
                // editar o valor
                self.countries.splice(item, 1, country.trim());
                // exibe a nova lista
                self.FetchAll();
                // oculta os campos
                CloseInput();

            }
        }
    };

    // Deletar

    this.Delete = function(item){
        // Exclui a linha atual
        this.countries.splice(item, 1);
        // exibe a nova lista
        this.FetchAll();

    };
}
app.FetchAll();

function CloseInput(){
document.getElementById('spoiler').style.display = 'none'
}