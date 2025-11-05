window.sendEmail = function () {
  return emailjs.sendForm('service_cumbjpp', 'template_jz8fuae', '#emailForm')
    .then(function () {
      return true;
    }, function (error) {
      console.error('EmailJS error:', error);
      return false;
    });
}


