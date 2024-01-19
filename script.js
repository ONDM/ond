document.addEventListener("DOMContentLoaded", function ()
{
  const button1 = document.querySelector(".button1");
  const button2 = document.querySelector(".button2");
  if (button1)
  {
    button1.addEventListener("click", function ()
      {
        transitionPage('ondm.github.io/calc/');
      });
  }

  if (button2)
  {
    button2.addEventListener("click", function ()
    {
      transitionPage('NEZADÁNO');
    });
  }

  function transitionPage(url)
  {
    document.body.classList.add('page-hidden');
    setTimeout(function ()
    {
      window.location.href = url;
    }, 600);
  }

  window.addEventListener('pageshow', function (event)
  {
    if (event.persisted)
    {
      document.body.classList.remove('page-hidden');
      playAnimation();
    }
  });

  function playAnimation()
  {
    document.getElementById('ond').classList.add('text-ond-animation');
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button =>
    {
      button.classList.add('button-animation');
    });
  }
});
