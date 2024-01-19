document.addEventListener("DOMContentLoaded", function ()
{
  const button1 = document.querySelector(".button1");
  const button2 = document.querySelector(".button2");
  if (button1)
  {
    button1.addEventListener("click", function ()
      {
        transitionPage('https://ondm.github.io/calc/');
      });
  }

  if (button2)
  {
    button2.addEventListener("click", function ()
    {
      transitionPage('https://d807b7ac-f925-40ec-b676-c16ee8e0322e-00-26qgunpy6xwxr.kirk.replit.dev/');
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
