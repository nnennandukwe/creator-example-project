

(function() {
    var modalLinks = document.getElementsByClassName("modal-link");
    for (var i = 0; i < modalLinks.length; i++){
        modalLinks[i].addEventListener("click", function(e){
            e.preventDefault();
            e.stopImmediatePropagation();

            var modalId = this.getAttribute("data-modal");

            var modal = document.getElementById(modalId);

            modal.classList.add("open");
        });
    }


    var closeButtons = document.getElementsByClassName("modal-content__close");

    for (var j = 0; j < closeButtons.length; j++){
        closeButtons[j].addEventListener('click', function() {
            var openModal = document.querySelector('.open');
            openModal.classList.remove('open');
        });
    }

    var webDevInput = document.getElementById('filter1');
    var projects = document.getElementsByClassName('project');

    webDevInput.addEventListener('change', function() {
        for (var k = 0; k < projects.length; k++){
            var category = projects[k].getAttribute('data-category');
            if (category == '1'){
                category.classList.add('active');
            }
            else{
                category.classList.remove('active');
            }
        }
    })
})();