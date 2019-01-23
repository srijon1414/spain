$(document).ready(function() {
		   $("#modal-filters").click(function(){
			  document.location.href = 'https://www.roomster.com/login?r=0000b93e';
		   });

		});
		function googleTranslateElementInit() {
		  new google.translate.TranslateElement({
			pageLanguage: 'en'
		  }, 'google_translate_element');
		}
        Dropzone.options.uploadWidget = {
            paramName: 'file',
            maxFilesize: 2, // MB
            maxFiles: 1,
            dictDefaultMessage: 'Drag photos here or <u>browse photos</u>',
            acceptedFiles: 'image/*',
            addRemoveLinks: true,
            error: function (file, errorMessage) {
                errors = false;
            },
            init: function () {
                this.on('thumbnail', function (file) {
                    if (file.width < 640 || file.height < 480) {
                        file.rejectDimensions();
                    } else {
                        file.acceptDimensions();
                    }
                });
            },
            accept: function (file, done) {
                file.acceptDimensions = done;
                file.rejectDimensions = function () {
                    done('The image must be at least 640 x 480px')
                };
            }
        };