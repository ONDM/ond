document.addEventListener("DOMContentLoaded", function ()
{
  const button1 = document.querySelector(".button1");
  const button2 = document.querySelector(".button2");
  const button3 = document.querySelector(".button3");
  const button4 = document.querySelector(".button4");

  const gradientContainer = document.getElementById('gradient-container');
  const storedGradient = localStorage.getItem('backgroundGradient');
  if (storedGradient)
  {
    gradientContainer.style.backgroundImage = storedGradient;
  }

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
      transitionPage('https://ondm.github.io/prazdniny/');
    });
  }

  if (button3)
  {
    button3.addEventListener("click", function ()
    {
      transitionPage('https://ondm.github.io/cetba/');
    });
  }

    if (button4)
  {
    button4.addEventListener("click", function ()
    {
      transitionPage('https://ondm.github.io/epoprg/');
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

  localStorage.setItem('backgroundGradient', window.getComputedStyle(gradientContainer).backgroundImage);
});

document.addEventListener("DOMContentLoaded", function ()
{
  const textOND = document.querySelector(".text-ond");
  const imageOverlay = document.createElement("img");
  imageOverlay.src = "/ond/ondlogo.png";
  imageOverlay.classList.add("image-overlay");
  textOND.appendChild(imageOverlay);
});
