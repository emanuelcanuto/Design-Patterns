var inputLabel = (function () {
    
    function initial(id, value){
        $(id).val(value);
    }
    
    function focus(id, value){
        $(id).focus(function(){
            if($(this).val() == value){
                $(this).val("");
            }
        });
    }
    
    function blur(id, value){
        $(id).blur(function(){
            if($(this).val() == ""){
                $(this).val(value);
            }
        });
    }
    
    return {
        iterator: function(hash){
            $.each(hash, function(id, value) { 
                $.each(value, function(id, value) {
                    intial: initial(id, value);
                    focus: focus(id, value);
                    blur: blur(id, value);
                });
            });
        }
    };

})();

hash = {};
hash[0] = {"#webform-client-form-48 #edit-submitted-nome":"Nome"};
hash[1] = {"#webform-client-form-48 #edit-submitted-e-mail":"Email"};
hash[2] = {"#search-block-form #edit-search-block-form-1":"Buscar"};
inputLabel.iterator(hash);

