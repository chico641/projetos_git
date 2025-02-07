$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        const novoItemDaLista = $('#lista-tarefas').val();
        const novaTarefa = $(`<li>${novoItemDaLista}</li>`);
        $(novaTarefa).appendTo('ul');
        $('#lista-tarefas').val('');

    })

    $("ul").on("click", "li", function(){
        $(this).toggleClass("riscado");
    })


})
